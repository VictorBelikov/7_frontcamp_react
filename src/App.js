import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import style from './App.module.scss';
import Search from './Containers/Search/Search';
import ParticularMovie from './Containers/ParticularMovie/ParticularMovie';
import SearchResult from './Containers/SearchResult/SearchResult';
import Footer from './Containers/Footer/Footer';
import Brand from './Components/UI/Brand/Brand';

class App extends Component {
  render() {
    return (
      <div className={style.mainWrapper}>
        <Switch>
          <Route path={'/movie/:id'} component={ParticularMovie} />
          <Route path={'/'} component={Search} />
        </Switch>
        <SearchResult />
        <Footer>
          <Brand fWord={'netflix'} sWord={'roulette'} />
        </Footer>
      </div>
    );
  }
}

export default App;
