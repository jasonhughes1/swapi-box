import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Scroll from '../Components/Scroll/Scroll';
import ScrollMock from './mockData/ScrollMock';
import Button from '../Components/Button/Button';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Scroll', () => {
  let wrapper;
  const mockFn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Scroll
      data={ScrollMock}
      toggleActive={mockFn}
      btnFn={mockFn}
      numFav={2}
      opening={3}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a title and a button component', () => {
    wrapper = mount(<Scroll data={ScrollMock} toggleActive={mockFn} btnFn={mockFn} numFav={2} opening={3}/>)

    const title = wrapper.find('.title')

    expect(title.text()).toEqual('STAR WARS')
    expect(wrapper.find('Button').length).toEqual(1)
  })

  it('should expect all correct props', () => {
    expect(wrapper.find('Button').props().className).toEqual(' button favorite')
    expect(wrapper.find('Button').props().toggleActive).toEqual(mockFn)
    expect(wrapper.find('Button').props().buttonText).toEqual('View Favorites 2')
    expect(wrapper.find('Button').props().btnFn).toEqual(mockFn)
  })

  it('should render a film summary, film title and release date', () => {
    wrapper = mount(<Scroll data={ScrollMock} toggleActive={mockFn} btnFn={mockFn} numFav={2} opening={3}/>)

    const crawlText = wrapper.find('.crawl-text')
    const filmTitle = wrapper.find('.film-title')
    const releaseDate = wrapper.find('.release-date')
    expect(crawlText.length).toEqual(1)

    expect(filmTitle.length).toEqual(1)

    expect(releaseDate.length).toEqual(1)
  })
})
