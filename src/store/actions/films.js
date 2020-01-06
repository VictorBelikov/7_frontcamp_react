import * as __actions from './actions';
import { buildRequest } from '../utils/utility';

import axios from '../../axios-films';

export const fetchFilmsSuccess = (films) => ({
  type: __actions.FETCH_FILMS_SUCCESS,
  films,
});

export const fetchFilmsFail = (error) => ({
  type: __actions.FETCH_FILMS_FAIL,
  error,
});

export const setSearchFilter = (value) => ({
  type: __actions.SET_SEARCH_FILTER,
  value,
});

export const setSearchValue = (value) => ({
  type: __actions.SET_SEARCH_VALUE,
  value,
});

export const fetchFilms = () => {
  return (dispatch, getState) => {
    const query = buildRequest(getState());
    axios
      .get(`/movies?${query}`)
      .then((response) => {
        dispatch(fetchFilmsSuccess(response.data.data));
      })
      .catch((err) => dispatch(fetchFilmsFail(err)));
  };
};
