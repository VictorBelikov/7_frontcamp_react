import React, { Component } from 'react';

import style from './Search.module.scss';
import Brand from '../../Components/UI/Brand/Brand';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import Filter from '../../Components/Filter/Filter';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';

class Search extends Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.contentWrapper}>
          <h1>find your movie</h1>
          <Brand fWord={'netflix'} sWord={'roulette'} />
          <SearchBlock />
          <Filter title={'search by'} leftBtnText={'title'} rightBtnText={'genre'} />
        </div>
        <SearchFilter isSearchComponent />
      </header>
    );
  }
}

export default Search;
