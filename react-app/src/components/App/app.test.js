import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '.';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<App />);
  return { wrapper, props };
}

describe('App Test Suite', () => {
  it('Should have a welcome message', () => {
    const { wrapper } = setup();
    expect(wrapper.find('App__WelcomeMessage').exists()).toBe(true);
  });
});
