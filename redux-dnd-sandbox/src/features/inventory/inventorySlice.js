import { createSlice } from '@reduxjs/toolkit';

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    inventory: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (state.inventory.length === 12) return;

      state.inventory.push(action.payload);
    },
  },
});

export const { addItem } = inventorySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectInventory = (state) => state.inventory.inventory;

export default inventorySlice.reducer;
