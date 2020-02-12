import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Search from './Search';
import Filter from '../../Components/Filter/Filter';
import SortFilter from '../../Components/SearchFilter/SortFilter';

const mockStore = configureMockStore();
const store = mockStore({});
configure({ adapter: new Adapter() });

describe('<Search />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
  });

  it('should render two <Filter /> components', () => {
    expect(wrapper.find(Filter)).toHaveLength(0);
  });

  it('should contain <SortFilter /> component', () => {
    expect(wrapper.contains(<SortFilter isSearchComponent />)).toEqual(true);
  });
});
