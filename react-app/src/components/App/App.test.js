import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '.';

describe('App Test Suite', () => {
  let wrapper;
  beforeAll(() => { wrapper = shallow(<App />); });

  it('Should have a global styled component', () => {
    expect(wrapper.find('GlobalStyleComponent')).toExist();
  });

  it('Should have a logo component', () => {
    expect(wrapper.find('Logo')).toExist();
  });
});
