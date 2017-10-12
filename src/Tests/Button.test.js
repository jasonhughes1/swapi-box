import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Button from '../Components/Button/Button';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

//   it('should pass through all the correct props', () => {
//     expect(wrapper.props()).toHaveProperty('children', 'people')
//     expect(wrapper.props()).toHaveProperty('className', 'button')
//     expect(wrapper.props()).toHaveProperty('onClick')
//   })
});
