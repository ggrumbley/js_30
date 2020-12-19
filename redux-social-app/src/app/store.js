import { configureStore } from '@reduxjs/toolkit';

import { postsReducer } from '../features/posts';
import { usersReducer } from '../features/users';
import { notificationsReducer } from '../features/notifications';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  },
});
