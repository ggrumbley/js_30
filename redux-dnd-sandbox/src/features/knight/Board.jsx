import React from 'react';
import { Knight, Square } from '.';

const boardStyle = {
  width: 650,
  height: 650,
  display: 'flex',
  flexWrap: 'wrap',
  border: '1px solid gray',
};
/** Styling properties applied to each square element */
const squareStyle = { width: '12.5%', height: '12.5%' };

const renderSquare = (i, [knightX, knightY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = knightX === x && knightY === y;
  const isBlack = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={squareStyle}>
      <Square isBlack={isBlack}>{piece}</Square>
    </div>
  );
};

export const Board = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return <div style={boardStyle}>{squares}</div>;
};
