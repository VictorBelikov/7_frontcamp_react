import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './SearchResult.module.scss';
import Movie from '../../Components/Movie/Movie';

class SearchResult extends Component {
  render() {
    const movies = this.props.films.map((film) => {
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

    return <main className={style.searchResult}>{movies}</main>;
  }
}

const mapStateToProps = (state) => ({
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResult);
