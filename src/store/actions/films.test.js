import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as __types from './actions';
import * as __actions from './films';
import { searchMovieByIdData, searchMoviesData, constants } from '../../static/mockSearchResult';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialStore = {
  moviesByGenre: [],
  movie: constants.EMPTY_MOVIE,
};

describe('actions', () => {
  it('should create an action to "set search value"', () => {
    const text = 'some_search_query';
    const expectedAction = {
      type: __types.SET_SEARCH_VALUE,
      value: text,
    };
    expect(__actions.setSearchValue(text)).toEqual(expectedAction);
  });

  it('should create an action to "set search filter"', () => {
    const text = 'some_search_filter';
    const expectedAction = {
      type: __types.SET_SEARCH_FILTER,
      value: text,
    };
    expect(__actions.setSearchFilter(text)).toEqual(expectedAction);
  });

  it('should create an action to "set sort filter"', () => {
    const text = 'some_sort_filter';
    const expectedAction = {
      type: __types.SET_SORT_FILTER,
      value: text,
    };
    expect(__actions.setSortFilter(text)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_FILMS_SUCCESS when fetching movies has been done', () => {
    fetchMock.get(
      'https://reactjs-cdp.herokuapp.com/movies?search=drama&searchBy=genres&sortOrder=desc&sortBy=vote_average&limit=20',
      {
        status: 200,
        body: searchMoviesData,
      },
    );

    const expectedActions = [{ type: __types.FETCH_FILMS_SUCCESS, films: searchMoviesData.data }];
    const store = mockStore(initialStore);

    return store
      .dispatch(__actions.fetchFilms('search=drama&searchBy=genres&sortOrder=desc&sortBy=vote_average&limit=2'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
