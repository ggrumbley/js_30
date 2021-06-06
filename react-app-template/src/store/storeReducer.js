import produce from 'immer';
import * as C from '../constants';

export const INITIAL_STATE = {
  value: 1984,
};

export const storeReducer = produce((draft, action) => {
  switch (action.type) {
    case C.INCREMENT:
      return void draft.value++;
    case C.DECREMENT:
      return void draft.value--;
    default:
      return void draft;
  }
}, INITIAL_STATE);
