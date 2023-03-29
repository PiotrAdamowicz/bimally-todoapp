import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '@/types/todos';
import { DateFormatter } from '@/helpers/date';

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export interface updateProps {
  value: string;
  id?: number;
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const id = Math.random() * 100;
      state.todos.push({
        text: action.payload,
        addDate: DateFormatter(),
        isDone: false,
        id,
        editActive: false,
      });
    },

    remove: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;

      const res = state.todos.filter((todo) => todo.id !== id);
      state.todos = [...res];
    },
    update: (state, action: PayloadAction<updateProps>) => {
      const isEqual = (el: Todo): boolean => el.id === action.payload.id;
      const id = state.todos.findIndex(isEqual);
      console.log(id);
      state.todos[id].text = action.payload.value;
    },
    toggleStateById: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      const isEqual = (el: Todo): boolean => el.id === id;
      const index = state.todos.findIndex(isEqual);

      state.todos[index].isDone = !state.todos[index].isDone;
    },
    toggleEditById: (state, action: PayloadAction<number | undefined>) => {
      const id = action.payload;
      const isEqual = (el: Todo): boolean => el.id === id;
      const index = state.todos.findIndex(isEqual);

      state.todos[index].editActive = !state.todos[index].editActive;
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

export const selectTodos = (state: TodosState) => state;

export const { add, remove, toggleStateById, toggleEditById, toggleEdit, update } = todosSlice.actions;
