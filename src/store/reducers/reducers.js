import cloneDeep from 'clone-deep';

import * as __actions from '../actions/actions';

const initialState = {
  films: [],
  query: {
    search: '',
    searchBy: 'title',
    limit: 20,
  },
};

const films = (state = initialState, action) => {
  const updatedObject = cloneDeep(state);

  switch (action.type) {
    case __actions.FETCH_FILMS_SUCCESS:
      console.log(action.films);
      updatedObject.films = action.films;
      return updatedObject;

    case __actions.FETCH_FILMS_FAIL:
      console.log(`!! ERROR(get: fetch films) !!: ${action.error}`);
      return { ...state };

    case __actions.SET_SEARCH_FILTER:
      updatedObject.query.searchBy = action.value;
      return updatedObject;

    case __actions.SET_SEARCH_VALUE:
      updatedObject.query.search = action.value;
      return updatedObject;

    default:
      return state;
  }
};

export default films;
