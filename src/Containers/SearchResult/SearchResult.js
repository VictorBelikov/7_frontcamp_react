import React from 'react';
import { connect } from 'react-redux';

import style from './SearchResult.module.scss';
import Movie from '../../Components/Movie/Movie';

const SearchResult = (props) => {
  let movies = <h1 className={style.noFound}>No films found</h1>;

  if (props.films.length > 0) {
    movies = props.films.map((film) => {
      const genres = film.genres;
      return (
        <Movie
          key={film.id}
          id={film.id}
          imgUrl={film.poster_path}
          releaseYear={new Date(film.release_date).getFullYear()}
          title={film.title}
          genre={genres.length > 2 ? genres.join(', ') : genres.join(' & ')}
        />
      );
    });
  }
  return <main className={style.searchResult}>{movies}</main>;
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(SearchResult);
