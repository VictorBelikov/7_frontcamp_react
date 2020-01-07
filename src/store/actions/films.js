import * as __actions from './actions';
import { buildRequest } from '../utils/utility';

import axios from '../../axios-films';

const fetchFilmsSuccess = (films) => ({
  type: __actions.FETCH_FILMS_SUCCESS,
  films,
});

const fetchParticularFilmSuccess = (film) => ({
  type: __actions.FETCH_PARTICULAR_FILM_SUCCESS,
  film,
});

const fetchFilmsFail = (error) => ({
  type: __actions.FETCH_FILMS_FAIL,
  error,
});

export const setSearchFilter = (value) => ({
  type: __actions.SET_SEARCH_FILTER,
  value,
});

export const setSortFilter = (value) => ({
  type: __actions.SET_SORT_FILTER,
  value,
});

export const setSearchValue = (value) => ({
  type: __actions.SET_SEARCH_VALUE,
  value,
});

export const fetchFilms = () => {
  return (dispatch, getState) => {
    const query = buildRequest(getState());
    console.log(query);
    axios
      .get(`/movies?${query}`)
      .then((response) => {
        dispatch(fetchFilmsSuccess(response.data.data));
      })
      .catch((err) => dispatch(fetchFilmsFail(err)));
  };
};

export const fetchParticularFilm = (id) => {
  return (dispatch) => {
    axios
      .get(`/movies/${id}`)
      .then((response) => {
        dispatch(fetchParticularFilmSuccess(response.data));
      })
      .catch((err) => dispatch(fetchFilmsFail(err)));
  };
};
