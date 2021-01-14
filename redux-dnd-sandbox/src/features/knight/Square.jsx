import React from 'react';

export const Square = ({ children, isBlack }) => {
  const fill = isBlack ? 'black' : 'white';
  const stroke = isBlack ? 'white' : 'black';
  const style = {
    color: stroke,
    backgroundColor: fill,
    width: '100%',
    height: '100%',
  };
  return <div style={style}>{children}</div>;
};
