import React from 'react';
import { Knight, Square } from '.';

const renderSquare = (x, y, [knightX, knightY]) => {
  const isBlack = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return <Square isBlack={isBlack}>{piece}</Square>;
};

export const Board = ({ knightPosition }) => (
  <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap' }}>
    {renderSquare(0, 0, knightPosition)}
    {renderSquare(1, 0, knightPosition)}
    {renderSquare(2, 0, knightPosition)}
  </div>
);
