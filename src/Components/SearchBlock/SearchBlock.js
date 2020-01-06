import React from 'react';

import SearchInput from '../UI/SearchInput/SearchInput';
import SearchButton from '../UI/SearchButton/SearchButton';
import style from './SearchBlock.module.scss';

const SearchBlock = (props) => (
  <div className={style.searchBlock}>
    <SearchInput change={props.searchInputChange} type={'text'} placeholder={'Enter movie name...'} />
    <SearchButton isDisable={props.isDisable} click={props.searchBtnClick}>
      search
    </SearchButton>
  </div>
);

export default SearchBlock;
