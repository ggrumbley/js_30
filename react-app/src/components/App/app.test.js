import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '.';

describe('App Test Suite', () => {
  let wrapper;
  beforeAll(() => { wrapper = shallow(<App />); });

  it('Should have a welcome message', () => {
    expect(wrapper.find('App__WelcomeMessage')).toExist();
  });

  it('Should have a logo', () => {
    expect(wrapper.find('App__Logo')).toExist();
  });
});
