import produce from 'immer';
import * as C from '../constants';

export const INITIAL_STATE = {
  value: 1984,
};

export const storeReducer = produce((draft, action) => {
  switch (action.type) {
    case C.INCREMENT:
      draft.value++;
      break;
    case C.DECREMENT:
      draft.value--;
      break;
    default:
      break;
  }
}, INITIAL_STATE);
