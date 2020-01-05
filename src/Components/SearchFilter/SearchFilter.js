import React, { Fragment } from 'react';

import style from './SearchFilter.module.scss';
import Filter from '../Filter/Filter';

const SearchFilter = (props) => {
  let filter = (
    <Fragment>
      <div className={style.movies}>
        <span>7 </span>movie found
      </div>
      <Filter title={'sort by'} leftBtnText={'release date'} rightBtnText={'rating'} />
    </Fragment>
  );

  if (!props.isSearchComponent) {
    filter = (
      <div className={style.movies}>
        Film by <span>drama</span> genre
      </div>
    );
  }

  return (
    <div className={style.searchFilter}>
      <div className={style.wrapper}>{filter}</div>
    </div>
  );
};

export default SearchFilter;
