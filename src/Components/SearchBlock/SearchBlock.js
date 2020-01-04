import React from 'react';

import SearchInput from '../UI/SearchInput/SearchInput';
import SearchButton from '../UI/SearchButton/SearchButton';
import style from './SearchBlock.module.scss';

const SearchBlock = () => (
  <div className={style.searchBlock}>
    <SearchInput type={'text'} placeholder={'Enter movie name...'} />
    <SearchButton>search</SearchButton>
  </div>
);

export default SearchBlock;
