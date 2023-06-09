import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@/slices/counterSlice';
import { todosReducer } from '@/slices/todosSlices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
