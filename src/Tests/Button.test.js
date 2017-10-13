import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
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

});
