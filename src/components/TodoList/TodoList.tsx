import React from 'react';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { remove, selectTodos } from '@/slices/todosSlices';
import { Todo } from '@/types/todos';
import { lightBlue } from '@mui/material/colors';

const TodoList = () => {

const dispatch = useDispatch();
const list = useSelector(selectTodos).todos;
  return (
    <Stack gap={5}>
 <Stack
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: 5,
        position: 'relative',
        backgroundColor: lightBlue[900],
      }}
      gap={2}
    >
      {list.todos.map((todo:Todo) =>(<li onClick={()=>dispatch(remove(todo))} key={todo.addDate + Math.random() * 100}>{todo.text}</li>))}
    </Stack>
    </Stack>
  );
};

export default TodoList;
