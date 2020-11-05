import { configureStore } from '@reduxjs/toolkit'

import { postsReducer } from '../features/posts';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
