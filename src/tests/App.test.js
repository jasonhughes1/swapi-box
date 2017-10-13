// import React from 'react';
// import jest from 'enzyme';
// import { mount } from 'enzyme';
// import fetchMock from 'fetch-mock';
// import App from '../Components/App/App';
// import mockData from './mockData/mockData';
// import mockFilms from './mockData/mockFilms';
// import mockPeople from './mockData/mockPeople';
// import mockPlanets from './mockData/mockPlanets';
// import favoriteMock from './mockData/favoriteMock';
// import mockVehicles from './mockData/mockVehicles';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// Enzyme.configure({ adapter: new Adapter() });
//
// describe('App Component', () => {
//
//   let wrapper;
//
//   const pause = () => {
//     return new Promise(res => {
//       setTimeout(() => {
//         res();
//       }, 0);
//     });
//   };
//
//   beforeEach( async () => {
//     fetchMock.get('https://swapi.co/api/films/', {
//       status: 200,
//       body: mockFilms
//     });
//     fetchMock.get('https://swapi.co/api/people/', {
//       status: 200,
//       body: mockPeople
//     });
//     fetchMock.get('https://swapi.co/api/vehicles/', {
//       status: 200,
//       body: mockVehicles
//     });
//     fetchMock.get('https://swapi.co/api/planets/', {
//       status: 200,
//       body: mockPlanets
//     });
//
//     wrapper = mount(<App
//                     fetchHomeworld = {jest.fn()}
//                     fetchMock = {jest.fn()}
//                     />);
//
//     await pause();
//
//     wrapper.setState({ data: mockData });
//     wrapper.setState({ opening: Math.floor(Math.random() * (6 - 0 + 1))});
//     wrapper.setState({ currentIndex: 1 });
//     wrapper.setState({ favClicked: false });
//     wrapper.setState({ favorites: favoriteMock });
//   });
//
//   afterEach(() => {
//     expect(fetchMock.calls().unmatched).toEqual([]);
//     fetchMock.restore();
//   });
//
//   test(`fetchMock should have been called`, () => {
//     expect(fetchMock.called()).toEqual(true);
//   });
//
//   test(`should create an instance of App`, () => {
//     expect(wrapper.exists()).toEqual(true);
//   });
//
//   test(`should save api call data to app.state data arrays`, () => {
//     expect(wrapper.state().filmArray).toEqual(mockFilms);
//     expect(wrapper.state().peopleArray).toEqual(mockPeople);
//     expect(wrapper.state().planetArray).toEqual(mockPlanets);
//     expect(wrapper.state().vehicleArray).toEqual(mockVehicles);
//   });
//
//   test(`should render an instance of Crawl with correct data
//         and receive correct props from App`, () => {
//       const crawler = wrapper.find('Crawl');
//       const pTag = crawler.find('p').at(1);
//       const pTagText = pTag.text();
//
//       expect(crawler.exists()).toEqual(true);
//
//       expect(pTag.text()).toEqual(pTagText);
//
//       expect(crawler.props().filmArray).toEqual(filmData);
//       expect(crawler.props().whichCrawler)
//        .toEqual(wrapper.state().whichCrawler);
//     });
//
//   test(`should render an instance of CardContainer,
//         CardContainer should create an instance of Card,
//         and pass down correct data, onCardClick it should add/remove
//         the card to favoritesArray in app.state, should
//         recieve correct props from App`, () => {
//
//       const cardContainer = wrapper.find('CardContainer');
//       const card = cardContainer.find('Card').first();
//       const span = card.find('span').at(3);
//       const spanText = span.text();
//       const article = card.find('article');
//
//       expect(cardContainer.exists()).toEqual(true);
//       expect(card.exists()).toEqual(true);
//
//       expect(span.text()).toEqual(spanText);
//
//       expect(article.hasClass('card')).toEqual(true);
//
//       expect(cardContainer.props().currentDataArray).toEqual(mockData);
//       expect(cardContainer.props()
//         .favoritesArray).toEqual(wrapper.state().favoritesArray);
//       expect(cardContainer.props().currentView)
//        .toEqual(wrapper.state().currentView);
//
//       expect(wrapper.state().favoritesArray.length).toEqual(2);
//
//       expect(wrapper.state().favoritesArray).toEqual([
//         { "homeworld": "Tatooine",
//           "name": "Biggs Darklighter",
//           "population": "200000",
//           "species": "Human"
//         },
//         {
//           "homeworld": "Stewjon",
//           "name": "Obi-Wan Kenobi",
//           "population": "unknown",
//           "species": "Human"
//         }
//       ]);
//
//       article.simulate('click');
//
//       expect(wrapper.state().favoritesArray.length).toEqual(3);
//
//       expect(wrapper.state().favoritesArray).toEqual([
//         { "homeworld": "Tatooine",
//           "name": "Biggs Darklighter",
//           "population": "200000",
//           "species": "Human"
//         },
//         {
//           "homeworld": "Stewjon",
//           "name": "Obi-Wan Kenobi",
//           "population": "unknown",
//           "species": "Human"
//         },
//         { "homeworld": "Tatooine",
//           "name": "Luke Skywalker",
//           "population": "200000",
//           "species": "Human"}
//       ]);
//
//       article.simulate('click');
//
//       expect(wrapper.state().favoritesArray.length).toEqual(2);
//
//       expect(wrapper.state().favoritesArray).toEqual([
//         { "homeworld": "Tatooine",
//           "name": "Biggs Darklighter",
//           "population": "200000",
//           "species": "Human"
//         },
//         {
//           "homeworld": "Stewjon",
//           "name": "Obi-Wan Kenobi",
//           "population": "unknown",
//           "species": "Human"
//         }
//       ]);
//     });
//
//   test(`should render an instance of Controls,
//         should pass down correct props, on button
//         click; currentDataArray in App.state should
//         be updated with data corresponding to button name`, () => {
//
//       const controls = wrapper.find('Controls');
//       const peopleBtn = controls.find('button').first();
//       const planetBtn = controls.find('button').at(1);
//       const vehiclesBtn = controls.find('button').at(2);
//       const favoritesBtn = controls.find('button').at(3);
//
//       expect(controls.exists()).toEqual(true);
//
//       expect(controls.props().favoritesArray)
//        .toEqual(wrapper.state().favoritesArray);
//       expect(controls.props().currentView)
//         .toEqual(wrapper.state().currentView);
//
//       planetBtn.simulate('click');
//
//       expect(wrapper.state().currentDataArray)
//        .toEqual(wrapper.state().planetArray);
//       expect(wrapper.state().currentView).toEqual('Planets');
//
//       vehiclesBtn.simulate('click');
//
//       expect(wrapper.state().currentDataArray)
//         .toEqual(wrapper.state().vehicleArray);
//       expect(wrapper.state().currentView).toEqual('Vehicles');
//
//       favoritesBtn.simulate('click');
//
//       expect(wrapper.state().currentDataArray)
//        .toEqual(wrapper.state().favoritesArray);
//       expect(wrapper.state().currentView).toEqual('Favorites');
//
//       peopleBtn.simulate('click');
//
//       expect(wrapper.state().currentDataArray)
//        .toEqual(wrapper.state().peopleArray);
//       expect(wrapper.state().currentView).toEqual('People');
//     });
// });
