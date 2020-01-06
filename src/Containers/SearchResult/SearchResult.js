import React, { Component } from 'react';

import style from './SearchResult.module.scss';
import Movie from '../../Components/Movie/Movie';

class SearchResult extends Component {
  render() {
    return (
      <main className={style.searchResult}>
        <Movie movieId={'34578'} />
        <Movie movieId={'34578'} />
        <Movie movieId={'34578'} />
        <Movie movieId={'34578'} />
        <Movie movieId={'34578'} />
        <Movie movieId={'34578'} />
        {/*<Movie />*/}
        {/*<Movie />*/}
        {/*<Movie />*/}
      </main>
    );
  }
}

export default SearchResult;
