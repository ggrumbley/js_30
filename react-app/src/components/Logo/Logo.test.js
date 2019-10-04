import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Logo from '.';

describe('Logo Test Suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
