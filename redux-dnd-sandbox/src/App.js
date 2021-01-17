import React from 'react';

import { Board } from './features/knight';

const containerStyle = {
  width: 500,
  height: 500,
  border: '1px solid gray',
};

const App = () => {
  return <div style={containerStyle}><Board knightPosition={[1, 0]} /></div>;
};

export default App;
