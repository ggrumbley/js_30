import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';

import { KNIGHT } from '../../constants';
import { moveKnight, canMoveKnight, selectKnightPosition } from '.';

export const Overlay = ({ color }) => <div className="overlay" style={{ backgroundColor: color }} />;

export const BoardSquare = ({ x, y, children }) => {
  const dispatch = useDispatch();
  const knightPosition = useSelector(selectKnightPosition);

  const backgroundColor = (x + y) % 2 === 1 ? 'black' : 'white';
  const color = (x + y) % 2 === 1 ? 'white' : 'black';

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: KNIGHT,
    canDrop: () => canMoveKnight([x, y], knightPosition),
    drop: () => dispatch(moveKnight([x, y])),
    collect: (monitor) => ({ isOver: !!monitor.isOver(), canDrop: !!monitor.canDrop() }),
  });

  return (
    <div ref={drop} className="board-square" onClick={() => dispatch(moveKnight([x, y]))}>
      <div className="square" style={{ color, backgroundColor }}>
        {children}
      </div>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
};
