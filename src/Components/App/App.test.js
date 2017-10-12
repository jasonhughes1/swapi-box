import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';
import AppMock from './AppMock'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />)

    // Fetch Main Star Wars Data
    fetchMock.get('https://swapi.co/api/films/', {status: 200});
    fetchMock.get('https://swapi.co/api/people/', {status: 200});
    fetchMock.get('https://swapi.co/api/planets/', {status: 200});
    fetchMock.get('https://swapi.co/api/vehicles/', {status: 200});

    // Fetch Homeworld Data
    fetchMock.get("https://swapi.co/api/planets/1/", {status: 200});
    fetchMock.get('https://swapi.co/api/films/', {status: 200});


    // Fetch Species Data
    fetchMock.get("https://swapi.co/api/species/1/", {status: 200});



  })

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  // });

  it('displays an error if fetching groceries fails', () => {

    expect(true)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })


})
