import React from 'react';

import style from './SearchResult.module.scss';
import Filter from '../Filter/Filter';

const SearchResult = () => {
  return (
    <div className={style.searchResult}>
      <div className={style.wrapper}>
        <div className={style.movies}><span>7 </span>movie found</div>
        <Filter title={'sort by'} leftBtnText={'release date'} rightBtnText={'rating'} />
      </div>
    </div>
  );
};

export default SearchResult;
