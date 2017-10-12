import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Scroll from './Scroll';
import ScrollMock from './ScrollMock'
import Button from '../Button/Button'

describe('Scroll', () => {
  let wrapper;
  const mockFn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Scroll data={ScrollMock} toggleActive={mockFn} btnFn={mockFn} numFav={2} opening={3}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a title and a button component', () => {
    wrapper = mount(<Scroll data={ScrollMock} toggleActive={mockFn} btnFn={mockFn} numFav={2} opening={3}/>)

    const title = wrapper.find('.title')

    expect(title.text()).toEqual('SWAPI-BOX')
    expect(wrapper.find('Button').length).toEqual(1)
  })

  it('should expect all correct props', () => {
    expect(wrapper.find('Button').props().className).toEqual(' button favorite')
    expect(wrapper.find('Button').props().toggleActive).toEqual(mockFn)
    expect(wrapper.find('Button').props().buttonText).toEqual('View Favorites 2')
    expect(wrapper.find('Button').props().btnFn).toEqual(mockFn)
  })

})
