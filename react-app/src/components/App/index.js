import React, { Fragment } from 'react';
import styled from 'styled-components';

import GlobalStyle from './globalStyle';
import logo from '../../assets/logo.svg';

const title = 'React App';

const WelcomeMessage = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const App = () => (
  <Fragment>
    <WelcomeMessage>
      <Logo src={logo} alt="app logo" />
      <h1>{title}</h1>
    </WelcomeMessage>
    <GlobalStyle />
  </Fragment>
);

export default App;
