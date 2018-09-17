import React from 'react';
import ReactDOM from 'react-dom';
import App from './views';
import registerServiceWorker from './registerServiceWorker';
import { GlobalStyle } from './globalStyle';

ReactDOM.render(
  <div>
    <App />
    <GlobalStyle />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
