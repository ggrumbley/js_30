import React from 'react';
import App from './components/App';
import { StoreProvider } from './store';

const NewWaveApp = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);

export default NewWaveApp;

module.hot.accept();
