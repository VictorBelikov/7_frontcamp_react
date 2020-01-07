import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './Search.module.scss';
import Brand from '../../Components/UI/Brand/Brand';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import Filter from '../../Components/Filter/Filter';
import SortFilter from '../../Components/SearchFilter/SortFilter';
import * as __actions from '../../store/actions/films';

class Search extends Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    this.headerRef.current.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.searchBtnClickHandler();
      }
    });

    if (this.props.search.trim().length > 0) {
      this.props.onFetchFilms();
      document.getElementById('searchInput').value = this.props.search;
    }
  }

  searchBtnClickHandler = () => {
    if (this.props.search.trim().length > 0) {
      this.props.onFetchFilms();
    }
  };

  searchFilterClickHandler = (e) => {
    this.props.onSetSearchFilter(e.target.value);
  };

  searchInputChangeHandler = (e) => {
    this.props.onSetSearchValue(e.target.value);
  };

  render() {
    return (
      <header ref={this.headerRef} className={style.header}>
        <div className={style.contentWrapper}>
          <h1>find your movie</h1>
          <Brand fWord={'netflix'} sWord={'roulette'} />
          <SearchBlock
            isDisable={this.props.search}
            searchInputChange={this.searchInputChangeHandler}
            searchBtnClick={this.searchBtnClickHandler}
          />
          <Filter
            click={this.searchFilterClickHandler}
            searchBy={this.props.searchBy}
            title={'search by'}
            leftBtnText={'title'}
            rightBtnText={'genres'}
          />
        </div>
        <SortFilter isSearchComponent />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  searchBy: state.query.searchBy,
  search: state.query.search,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchFilms: () => dispatch(__actions.fetchFilms()),
  onSetSearchFilter: (val) => dispatch(__actions.setSearchFilter(val)),
  onSetSearchValue: (val) => dispatch(__actions.setSearchValue(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
