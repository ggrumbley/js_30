import React from 'react';
import { Knight, Square } from '.';

const boardStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
};
/** Styling properties applied to each square element */
const squareStyle = { width: '12.5%', height: '12.5%' };



export const Board = ({ knightPosition }) => {
  const renderSquare = (x, y, [knightX, knightY]) => {
    const isBlack = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;

    return <Square isBlack={isBlack}>{piece}</Square>;
  };

  return (
  <div style={boardStyle}>
    {renderSquare(0, 0, knightPosition)}
    {renderSquare(1, 0, knightPosition)}
    {renderSquare(2, 0, knightPosition)}
  </div>
);
};
