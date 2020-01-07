import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import style from './App.module.scss';
import Search from './Containers/Search/Search';
import ParticularMovie from './Containers/ParticularMovie/ParticularMovie';
import SearchResult from './Containers/SearchResult/SearchResult';
import Footer from './Containers/Footer/Footer';
import Brand from './Components/UI/Brand/Brand';
import Error from './Components/Error/Error';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className={style.mainWrapper}>
          <Switch>
            <Route path={'/movie/:id'} component={ParticularMovie} />
            <Route path={'/search'} component={Search} />
            <Route path={'/'} exact component={Search} />
            <Route path={'/'} component={Error} />
          </Switch>
          <SearchResult />
          <Footer>
            <Brand fWord={'netflix'} sWord={'roulette'} />
          </Footer>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
