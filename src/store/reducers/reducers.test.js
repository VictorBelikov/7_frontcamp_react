import reducer from './reducers';
import * as __actions from '../actions/actions';

describe('films reducer', () => {
  let state;
  beforeEach(() => {
    state = {
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
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it('should store movie collection', () => {
    expect(reducer(state, { type: __actions.FETCH_FILMS_SUCCESS, films: ['Movie1', 'Movie2', 'Movie3'] })).toEqual({
      films: ['Movie1', 'Movie2', 'Movie3'],
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
    });
  });

  it('should store particular movie', () => {
    expect(
      reducer(state, {
        type: __actions.FETCH_PARTICULAR_FILM_SUCCESS,
        film: { title: 'someTitle', genre: 'someDrama' },
      }),
    ).toEqual({
      films: [],
      particularFilm: { title: 'someTitle', genre: 'someDrama' },
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
    });
  });

  it('should store search string', () => {
    expect(
      reducer(state, {
        type: __actions.SET_SEARCH_VALUE,
        value: 'someSearchString',
      }),
    ).toEqual({
      films: [],
      particularFilm: {},
      sortMapping: {
        rating: 'vote_average',
        'release date': 'release_date',
        vote_average: 'rating',
        release_date: 'release date',
      },
      query: {
        search: 'someSearchString',
        searchBy: 'title',
        sortOrder: 'desc',
        sortBy: 'vote_average',
        limit: 20,
      },
    });
  });

  it('should store search filter', () => {
    expect(
      reducer(state, {
        type: __actions.SET_SEARCH_FILTER,
        value: 'someFilter',
      }),
    ).toEqual({
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
        searchBy: 'someFilter',
        sortOrder: 'desc',
        sortBy: 'vote_average',
        limit: 20,
      },
    });
  });

  it('should store sort type', () => {
    expect(
      reducer(state, {
        type: __actions.SET_SORT_FILTER,
        value: 'someSortType',
      }),
    ).toEqual({
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
        sortBy: 'someSortType',
        limit: 20,
      },
    });
  });
});
