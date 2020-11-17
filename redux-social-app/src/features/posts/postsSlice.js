import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '0',
    title: 'First Post!',
    user: '2',
    content: 'Hello!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '1',
    title: 'Second Post!',
    user: '5',
    content: 'More witty text',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: '2',
    title: 'Social media is tearing us apart.',
    user: '1',
    content: 'More witty text forecasting the impeding implosion of our most cherished democracy.',
    date: sub(new Date(), { minutes: 67 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      // Can turn reducer into a named object with reducer
      // and a prepare method that runs before the reducer
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
