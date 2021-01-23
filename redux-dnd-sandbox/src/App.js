import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Board } from './features/knight';
import { moveDown, moveUp, moveRight, moveLeft, selectKnightPosition } from './features/knight/knightSlice';

import './App.css';
import './reset.css';

const App = () => {
  const dispatch = useDispatch();
  const knightPosition = useSelector(selectKnightPosition);

  return (
    <>
      <div className="button-container">
        <button aria-label="Move Right" onClick={() => dispatch(moveRight())}>
          Move Right
        </button>
        <button aria-label="Move Left" onClick={() => dispatch(moveLeft())}>
          Move Left
        </button>
        <button aria-label="Move Down" onClick={() => dispatch(moveDown())}>
          Move Down
        </button>
        <button aria-label="Move Up" onClick={() => dispatch(moveUp())}>
          Move Up
        </button>
      </div>
      <div className="board-container">
        <Board knightPosition={knightPosition} />
      </div>
    </>
  );
};

export default App;
