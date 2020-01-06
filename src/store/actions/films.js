import * as __actions from './actions';
import axios from '../../axios-films';

export const fetchFilmsSuccess = (films) => ({
  type: __actions.FETCH_FILMS_SUCCESS,
  films,
});

export const fetchFilmsFail = (error) => ({
  type: __actions.FETCH_FILMS_FAIL,
  error,
});

export const fetchFilms = () => {
  return (dispatch) => {
    axios
      .get('/movies')
      .then((response) => {
        dispatch(fetchFilmsSuccess(response));
      })
      .catch((err) => dispatch(fetchFilmsFail(err)));
  };
};
