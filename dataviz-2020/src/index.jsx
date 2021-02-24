import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { StoreProvider } from './store';

import './index.css';

const NewWaveApp = () => (
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

export default NewWaveApp;

ReactDOM.render(<NewWaveApp />, document.getElementById('app'));

module.hot.accept();
