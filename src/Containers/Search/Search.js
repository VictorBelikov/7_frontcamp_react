import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './Search.module.scss';
import Brand from '../../Components/UI/Brand/Brand';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import Filter from '../../Components/Filter/Filter';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import * as __actions from '../../store/actions/films';

class Search extends Component {
  searchBtnClickHandler = () => {
    this.props.onFetchFilms();
  };

  render() {
    return (
      <header className={style.header}>
        <div className={style.contentWrapper}>
          <h1>find your movie</h1>
          <Brand fWord={'netflix'} sWord={'roulette'} />
          <SearchBlock btnClick={this.searchBtnClickHandler} />
          <Filter title={'search by'} leftBtnText={'title'} rightBtnText={'genre'} />
        </div>
        <SearchFilter isSearchComponent />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchFilms: () => dispatch(__actions.fetchFilms()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
