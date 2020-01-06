import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import style from './ParticularMovie.module.scss';
import styleHeader from '../Search/Search.module.scss';
import Brand from '../../Components/UI/Brand/Brand';
import SortFilter from '../../Components/SearchFilter/SortFilter';
import * as __actions from '../../store/actions/films';

class ParticularMovie extends Component {
  componentDidMount() {
    this.fetchFilmHandler();
  }

  componentDidUpdate() {
    if (+this.props.match.params.id !== this.props.film.id) {
      this.fetchFilmHandler();
    }
  }

  fetchFilmHandler = () => {
    const filmId = this.props.match.params.id;
    this.props.onFetchFilm(filmId);
  };

  searchIconClickHandler = () => {
    this.props.history.push({ pathname: '/' });
  };

  render() {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />;
    const releaseDate = new Date(this.props.film.release_date).getFullYear();

    return (
      <header className={styleHeader.header}>
        <div className={style.contentWrapper}>
          <div onClick={this.searchIconClickHandler} className={style.searchIconWrapper}>
            {searchIcon}
          </div>
          <Brand fWord={'netflix'} sWord={'roulette'} />
          <div className={style.mainWrapper}>
            <div className={style.imgWrapper}>
              <img src={this.props.film.poster_path} alt="Cover" />
            </div>
            <div className={style.wrapper}>
              <div className={style.ratingWrapper}>
                <h1 className={style.title}>{this.props.film.title}</h1>
                <span className={style.rating}>{this.props.film.vote_average || '-.-'}</span>
              </div>
              <p className={style.tagline}>{this.props.film.tagline || 'No tagline'}</p>
              <div className={style.movieDate}>
                <p>
                  {releaseDate || '----'} <span>year</span>
                </p>
                <p>
                  {this.props.film.runtime || '---'} <span>min</span>
                </p>
              </div>
              <p className={style.overview}>{this.props.film.overview || 'No overview'}</p>
            </div>
          </div>
        </div>
        <SortFilter />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  film: state.particularFilm,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchFilm: (filmId) => dispatch(__actions.fetchParticularFilm(filmId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParticularMovie);
