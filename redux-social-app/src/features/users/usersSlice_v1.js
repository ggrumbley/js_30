import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Bob Dole' },
  { id: '1', name: 'Joe Biden' },
  { id: '2', name: 'Barack Obama' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
