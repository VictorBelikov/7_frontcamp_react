import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as __types from './actions';
import * as __actions from './films';

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

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' },
    });
    const expectedActions = [{ type: __types.FETCH_FILMS_SUCCESS, body: { todos: ['do something'] } }];
    const store = mockStore({ todos: [] });
    return store.dispatch(__actions.fetchFilms()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
