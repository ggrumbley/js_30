import React from 'react';
import { Knight, BoardSquare } from '.';

const renderPiece = (x, y, [knightX, knightY]) => (x === knightX && y === knightY ? <Knight /> : null);

const renderSquare = (i, knightPosition) => {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div key={i} className="square-container">
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
};

export const Board = ({ knightPosition }) => {
  const squares = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return <div className="board">{squares}</div>;
};
