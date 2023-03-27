import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '@/types/todos';
import { todos } from '@/fixtures/todos';

interface TodosState {
  todos: Todo[];
}

const initialState= {
  todos: [...todos], //TODO: remove after dev
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
        const {text, addDate, isDone } = action.payload; 
      state.todos.push(
        {
            text,
            addDate,
            isDone
        }
      )
    },
    remove: (state, action: PayloadAction<Todo>) => {
        const { addDate } = action.payload; 
      const res = state.todos.filter(todo => todo.addDate === addDate)
      state.todos = [...res]
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const selectTodos = (state: {todos:TodosState}) => state;

export const { add, remove } = todosSlice.actions;
