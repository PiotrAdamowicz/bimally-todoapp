import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@/slices/counterSlice';
import { todosReducer } from '@/slices/todosSlices';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
    todos: todosReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
