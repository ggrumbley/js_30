import React from 'react';

export const Square = ({ children, isBlack }) => {
  const backgroundColor = isBlack ? 'black' : 'white';
  const color = isBlack ? 'white' : 'black';
  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color,
    backgroundColor,
  };

  return <div style={style}>{children}</div>;
};
