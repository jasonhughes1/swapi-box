import React from 'react';
// import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import CardContainer from '../Components/CardContainer/CardContainer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('CardContainer', () => {
  let wrapper;
  const mockFn = jest.fn()
  const mockData = [{
    "Name": "Owen Lars",
    "Homeworld": "Tatooine",
    "Species": "Human",
    "Population": "200000"
  },
  {
    "Name": "Beru Whitesun lars",
    "Homeworld": "Tatooine",
    "Species": "Human",
    "Population": "200000"
  },
  {
    "Name": "Beru Whitesun lars",
    "Homeworld": "Tatooine",
    "Species": "Human",
    "Population": "200000"
  }];

  beforeEach(() => {
    wrapper = shallow(<CardContainer
      cardType={mockData}
      setFavorite={mockFn} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render cards to the page', () => {
    expect(wrapper.find('Card').length).toEqual(3);
  });

  it('should render message if no favorited cards', () => {
    wrapper = mount(<CardContainer cardType={[]} setFavorite={mockFn} />);
    const message = wrapper.find('.select-favs');

    expect(wrapper.find('Card').length).toEqual(0);
    expect(message.text()).toEqual('There are currently no favorites...');
  });
});
