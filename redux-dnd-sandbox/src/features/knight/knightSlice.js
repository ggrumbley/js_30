import { createSlice } from '@reduxjs/toolkit';

export const canMoveKnight = (newPosition, knightPosition) => {
  const [x, y] = knightPosition;
  const [toX, toY] = newPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
};

export const knightSlice = createSlice({
  name: 'knight',
  initialState: {
    knightPosition: [1, 7],
  },
  reducers: {
    moveRight: (state) => {
      if (state.knightPosition[0] === 7) return;
      state.knightPosition[0] += 1;
    },
    moveLeft: (state) => {
      if (state.knightPosition[0] === 0) return;
      state.knightPosition[0] -= 1;
    },
    moveDown: (state) => {
      if (state.knightPosition[1] === 7) return;
      state.knightPosition[1] += 1;
    },
    moveUp: (state) => {
      if (state.knightPosition[1] === 0) return;
      state.knightPosition[1] -= 1;
    },
    moveKnight: (state, action) => {
      if (canMoveKnight(action.payload, state.knightPosition)) {
        state.knightPosition = action.payload;
      }
    },
  },
});

export const { moveRight, moveLeft, moveDown, moveUp, moveKnight } = knightSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectKnightPosition = (state) => state.knight.knightPosition;

export default knightSlice.reducer;
