import React from 'react';

export const Square = ({ children, isBlack }) => {
  const fill = isBlack ? 'black' : 'white';
  const stroke = isBlack ? 'white' : 'black';
  const style = {
    color: stroke,
    backgroundColor: fill,
    width: '12.5%',
    height: '12.5%',
  };
  return <div style={style}>{children}</div>;
};
