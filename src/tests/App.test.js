// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { mount } from 'enzyme';
// import App from '../Components/App/App';
// import fetchMock from 'fetch-mock';
// import Enzyme from 'enzyme';
// import mockData from './mockData/mockData';
// import mockFilms from './mockData/mockFilms';
// import mockPeople from './mockData/mockPeople';
// import mockPlanets from './mockData/mockPlanets';
// import mockVehicles from './mockData/mockVehicles';
// import Adapter from 'enzyme-adapter-react-16';
//
// Enzyme.configure({ adapter: new Adapter() });
//
// describe('App', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });
//   const resolveAfter2Seconds = () => {
//     return new Promise(resolve => {
//
//       setTimeout(() => {
//         resolve();
//       }, 2000);
//     });
//   };
//   global.fetch = jest.fn();
//
//   it('renders without crashing', async () => {
//     const div = document.createElement('div');
//     const mockFn = jest.fn();
//
//     fetchMock.get('https://swapi.co/api/people/',
//       {status: 200, body: mockPeople });
//     fetchMock.get('https://swapi.co/api/planets/',
//       {status: 200, body: mockPlanets });
//     fetchMock.get('https://swapi.co/api/vehicles/',
//       {status: 200, body: mockVehicles });
//     fetchMock.get('https://swapi.co/api/films/',
//       {status: 200, body: mockFilms });
//
//     const wrapper = mount(<App />);
//
//     await wrapper.update();
//
//     expect(fetchMock.called()).toEqual(true);
//     expect(fetchMock.called('https://swapi.co/api/people/'));
//     expect(fetchMock.called('https://swapi.co/api/planet/'));
//     expect(fetchMock.called('https://swapi.co/api/vehicles/'));
//     expect(fetchMock.called('https://swapi.co/api/films/'));
//     expect(fetchMock._matchedCalls.length).toEqual(4);
//   });
// });
