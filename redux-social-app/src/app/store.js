import { configureStore } from '@reduxjs/toolkit'

import { postsReducer } from '../features/posts';
import { usersReducer } from '../features/users';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
