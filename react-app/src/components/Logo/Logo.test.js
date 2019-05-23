import React from 'react';
import { shallow } from 'enzyme';

// Components
import Logo from '.';

describe('Logo Test Suite', () => {
  let wrapper;
  beforeAll(() => { wrapper = shallow(<Logo />); });

  it('Should have main heading', () => {
    expect(wrapper.find('h1')).toExist();
  });

  it('Should have sub-heading', () => {
    expect(wrapper.find('h2')).toExist();
  });

  it('Should have the Triangle component', () => {
    expect(wrapper.find('Triangle')).toExist();
  });
});
