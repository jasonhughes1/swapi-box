import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Card from '../Components/Card/Card';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
  let wrapper;
  const mockFn = jest.fn()
  const CardMock = {
  "Name": "Luke Skywalker",
  "Homeworld": "Tatooine",
  "Species": "Human",
  "Population": "200000" }

  beforeEach(() => {
    wrapper = shallow(<Card
                        cardData={CardMock}
                        setFavorite={mockFn}
                        toggleActive={mockFn} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a card', () => {
    const card = wrapper.find('.card')

    expect(card.length).toEqual(1)
  })

  it('should render 4 divs', () => {
    const div = wrapper.find('div')

    expect(div.length).toEqual(4);
  })

  it('should 4 h3s and 4 ps', () => {
    const h3 = wrapper.find('h3');
    const p = wrapper.find('p');

    expect(h3.length).toEqual(4);
    expect(p.length).toEqual(4);
  })

  it('should render a favorite button on each of the cards', () => {
    const button = wrapper.find('.favorite-btn')

    expect(button.length).toBe(1)
  })

  it('should pass in the correct props', () => {
    expect(wrapper.props()).toHaveProperty('className', 'card')
    expect(wrapper.props().children[0].props).toHaveProperty('className', 'favorite-btn');
    expect(wrapper.props().children[0].props).toHaveProperty('children', 'Favorite');
    expect(wrapper.props().children[0].props).toHaveProperty('onClick');
  })

})
