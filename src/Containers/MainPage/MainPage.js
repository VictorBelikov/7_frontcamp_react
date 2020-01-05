import React, { Component } from 'react';

import Brand from '../../Components/UI/Brand/Brand';
import Header from '../Header/Header';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import Filter from '../../Components/Filter/Filter';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header title={'find your movie'}>
          <Brand fWord={'netflix'} sWord={'roulette'} />
          <SearchBlock />
          <Filter title={'search by'} leftBtnText={'title'} rightBtnText={'genre'} />
        </Header>
      </div>
    );
  }
}

export default MainPage;
