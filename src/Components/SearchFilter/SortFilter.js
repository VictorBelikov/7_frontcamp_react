import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import style from './SortFilter.module.scss';
import Filter from '../Filter/Filter';
import * as __actions from '../../store/actions/films';

class SortFilter extends React.Component {
  sortFilterClickHandler = (e) => {
    this.props.onSetSortFilter(e.target.value);
  };

  render() {
    let filter = (
      <Fragment>
        <div className={style.movies}>
          <span>{this.props.films.length} </span>movie found
        </div>
        <Filter
          click={this.sortFilterClickHandler}
          sortBy={this.props.sortBy}
          title={'sort by'}
          leftBtnText={'release date'}
          rightBtnText={'rating'}
        />
      </Fragment>
    );

    if (!this.props.isSearchComponent) {
      const genre = this.props.film.genres ? this.props.film.genres[0] : '';
      filter = (
        <div className={style.movies}>
          Films by <span>{genre}</span> genre
        </div>
      );
    }

    return (
      <div className={style.sortFilter}>
        <div className={style.wrapper}>{filter}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  film: state.particularFilm,
  films: state.films,
  sortBy: state.query.sortBy,
});

const mapDispatchToProps = (dispatch) => ({
  onSetSortFilter: (val) => dispatch(__actions.setSortFilter(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortFilter);
