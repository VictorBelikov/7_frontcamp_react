import React, { Component } from 'react';

import Brand from '../../Components/UI/Brand/Brand';
import Header from '../Header/Header';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import SearchType from '../../Components/SearchType/SearchType';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header title={'find your movie'}>
          <Brand fWord={'netflix'} sWord={'roulette'} />
          <SearchBlock />
          <SearchType />
        </Header>
      </div>
    );
  }
}

export default MainPage;
