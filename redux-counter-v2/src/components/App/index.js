import React from 'react';
import styled from 'styled-components';

import Counter from '../Counter';
import GlobalStyle from './globalStyle';

const title = 'Redux Counter';

const StyledApp = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const App = () => (
  <StyledApp>
    <h1>{title}</h1>
    <Counter />
    <GlobalStyle />
  </StyledApp>
);

export default App;
