import React, { useEffect } from 'react';
import Logo from '../Logo';
import { GlobalStyle } from '../shared';

const App = () => {
  useEffect(() => {
    fetch('/api/todos')
      .then((response) => response.json())
      // eslint-disable-next-line
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Logo />
      <GlobalStyle />
    </>
  );
};

export default App;
