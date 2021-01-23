import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import knightReducer from '../features/knight/knightSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    knight: knightReducer,
  },
});
