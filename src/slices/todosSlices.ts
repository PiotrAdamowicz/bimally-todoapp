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
    add: (state, action: PayloadAction<string>) => {
      console.log(action.payload);

      state.todos.push({
        text: action.payload,
        addDate: new Date().toString(),
        isDone: false,
        id: Math.random() * 100,
      });
    },
    remove: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;

      const res = state.todos.filter((todo) => todo.id !== id);
      state.todos = [...res];
    },
    toggleState: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;

      state.todos.map((todo) => {
        if (todo.id !== id && todo.isDone) {
          state.todos[id].isDone = false;
        } else {
          todo.isDone = true;
        }
      });
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const selectTodos = (state: { todos: TodosState }) => state;

export const { add, remove, toggleState } = todosSlice.actions;
