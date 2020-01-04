import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import style from './App.module.css';
import MainPage from './Containers/MainPage/MainPage';
import ParticularMovie from './Containers/ParticularMovie/ParticularMovie';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={'/movie'} component={ParticularMovie} />
          <Route path={'/'} component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
