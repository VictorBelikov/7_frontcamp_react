import React, { Component, Fragment } from 'react';

import Brand from '../../Components/UI/Brand/Brand';
import Header from '../Header/Header';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import Filter from '../../Components/Filter/Filter';
import SearchResult from '../SearchResult/SearchResult';
import Footer from '../Footer/Footer';

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <Header title={'find your movie'}>
          <Brand fWord={'netflix'} sWord={'roulette'} />
          <SearchBlock />
          <Filter title={'search by'} leftBtnText={'title'} rightBtnText={'genre'} />
        </Header>
        <SearchResult />
        <Footer>
          <Brand fWord={'netflix'} sWord={'roulette'} />
        </Footer>
      </Fragment>
    );
  }
}

export default MainPage;
