import React from 'react';

import style from './SearchFilter.module.scss';
import Filter from '../Filter/Filter';

const SearchFilter = () => {
  return (
    <div className={style.searchFilter}>
      <div className={style.wrapper}>
        <div className={style.movies}><span>7 </span>movie found</div>
        <Filter title={'sort by'} leftBtnText={'release date'} rightBtnText={'rating'} />
      </div>
    </div>
  );
};

export default SearchFilter;
