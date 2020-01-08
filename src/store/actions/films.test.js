import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as __types from './actions';
import * as __actions from './films';
import { buildRequest } from '../utils/utility';

import { searchMovieByIdData, searchMoviesData, constants } from '../../static/mockSearchResult';

const initStore = {
  moviesByGenre: [],
  movie: constants.EMPTY_MOVIE,
  query: {
    search: 'drama',
    searchBy: 'genres',
    sortOrder: 'desc',
    sortBy: 'vote_average',
    limit: 2,
  },
};

const BASE_URL = 'https://reactjs-cdp.herokuapp.com';
const query = buildRequest(initStore.query);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

  it('creates FETCH_FILMS_SUCCESS action when movies has been fetched', () => {
    fetchMock.get(`${BASE_URL}/${query}`, {
      status: 200,
      body: searchMoviesData,
    });

    const expectedActions = [{ type: __types.FETCH_FILMS_SUCCESS, films: searchMoviesData.data }];
    const store = mockStore(initStore);

    return store.dispatch(__actions.fetchFilms(query)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_PARTICULAR_FILM_SUCCESS action when particular(by Id) movie has been fetched', () => {
    fetchMock.get(`${BASE_URL}/movie/${searchMovieByIdData.id}`, {
      status: 200,
      body: searchMovieByIdData,
    });

    const expectedActions = [
      { type: __types.FETCH_PARTICULAR_FILM_SUCCESS, film: searchMovieByIdData },
      { type: __types.FETCH_FILMS_SUCCESS, films: searchMoviesData.data },
    ];
    const store = mockStore(initStore);

    return store.dispatch(__actions.fetchParticularFilm(278)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
