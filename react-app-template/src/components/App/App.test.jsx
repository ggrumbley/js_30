import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from '.';
import { StoreProvider } from '../../store';

global.fetch = require('node-fetch');

describe('App Test Suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <StoreProvider>
        <App />
      </StoreProvider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
