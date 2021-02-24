import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('/api/todos')
      .then((response) => response.json())
      // eslint-disable-next-line
      .then((data) => console.log(data));
  }, []);
  return <>I am an APP!</>;
};

export default App;
