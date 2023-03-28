import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '@/types/todos';
import { todos } from '@/fixtures/todos';

interface TodosState {
  todos: Todo[];
}

const initialState = {
  todos: [...todos], //TODO: remove after dev
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.push({
        text: action.payload.text,
        addDate: new Date(),
        isDone: false,
        id: Math.random() * 100,
        editActive: action.payload.editActive,
      });
    },
    remove: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;

      const res = state.todos.filter((todo) => todo.id !== id);
      state.todos = [...res];
    },
    toggleState: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      const isEqual = (el: Todo): boolean => el.id === id;
      const index = state.todos.findIndex(isEqual);

      state.todos[index].isDone = !state.todos[index].isDone;
    },
    toggleEdit: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      const isEqual = (el: Todo): boolean => el.id === id;
      const index = state.todos.findIndex(isEqual);

      state.todos[index].editActive = !state.todos[index].editActive;
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const selectTodos = (state: TodosState) => state.todos;

export const { add, remove, toggleState, toggleEdit } = todosSlice.actions;
