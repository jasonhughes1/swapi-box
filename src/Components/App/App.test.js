import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from './App/App';

describe('App', () => {
  // let wrapper;

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should exist', () => {
    expect(wrapper).toBe Defined()
  })


})
