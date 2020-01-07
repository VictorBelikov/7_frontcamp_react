import cloneDeep from 'clone-deep';

import * as __actions from '../actions/actions';

const initialState = {
  films: [],
  particularFilm: {},
  sortMapping: {
    rating: 'vote_average',
    'release date': 'release_date',
    vote_average: 'rating',
    release_date: 'release date',
  },
  query: {
    search: '',
    searchBy: 'title',
    sortOrder: 'desc',
    sortBy: 'vote_average',
    limit: 20,
  },
};

const films = (state = initialState, action) => {
  const updatedObject = cloneDeep(state);

  switch (action.type) {
    case __actions.FETCH_FILMS_SUCCESS:
      updatedObject.films = action.films;
      return updatedObject;

    case __actions.FETCH_PARTICULAR_FILM_SUCCESS:
      updatedObject.particularFilm = action.film;
      return updatedObject;

    case __actions.FETCH_FILMS_FAIL:
      console.log(`!! ERROR(get: fetch films) !!: ${action.error}`);
      return { ...state };

    case __actions.SET_SEARCH_FILTER:
      updatedObject.query.searchBy = action.value;
      return updatedObject;

    case __actions.SET_SORT_FILTER:
      updatedObject.query.sortBy = action.value;
      return updatedObject;

    case __actions.SET_SEARCH_VALUE:
      updatedObject.query.search = action.value;
      return updatedObject;

    default:
      return state;
  }
};

export default films;
