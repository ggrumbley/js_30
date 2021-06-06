import * as C from '../constants';

export const initialState = {
  value: 1984,
};

const increment = (state) => {
  const newState = { ...state };
  newState.value += 1;
  return Object.freeze(newState);
};

const decrement = (state) => {
  if (state.value === 0) return state;

  const newState = { ...state };
  newState.value -= 1;

  return Object.freeze(newState);
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case C.INCREMENT:
      return increment(state);
    case C.DECREMENT:
      return decrement(state);
    default:
      return state;
  }
};
