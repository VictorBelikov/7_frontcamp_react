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

const fetchMovies = (dispatch, state, genre) => {
  const query = buildRequest(state, genre);
  console.log(query);
  axios
    .get(`/movies?${query}`)
    .then((response) => {
      dispatch(fetchFilmsSuccess(response.data.data));
    })
    .catch((err) => dispatch(fetchFilmsFail(err)));
};

export const fetchFilms = () => {
  return (dispatch, getState) => {
    fetchMovies(dispatch, getState());
  };
};

export const fetchParticularFilm = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`/movies/${id}`);
      await dispatch(fetchParticularFilmSuccess(response.data));
      fetchMovies(dispatch, getState(), response.data.genres[0]);
    } catch (err) {
      dispatch(fetchFilmsFail(err));
    }
  };
};
