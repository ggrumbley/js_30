import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { knightReducer } from '../features/knight';
import { inventoryReducer } from '../features/inventory';

export default configureStore({
  reducer: {
    counter: counterReducer,
    knight: knightReducer,
    inventory: inventoryReducer,
  },
});
