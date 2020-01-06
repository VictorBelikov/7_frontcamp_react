import * as __actions from '../actions/actions';

const initialState = {
  films: [],
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case __actions.FETCH_FILMS_SUCCESS:
      console.log(action.films);
      return {
        ...state,
        films: action.films,
      };
    case __actions.FETCH_FILMS_FAIL:
      console.log(`!! ERROR(get: fetch films) !!: ${action.error}`);
      return { ...state };
    default:
      return state;
  }
};

export default films;
