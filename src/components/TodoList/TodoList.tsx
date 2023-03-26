import React from 'react';
import { Stack } from '@mui/material';
import { todos } from '@/fixtures/todos';

const TodoList = () => {

  return (
    <Stack gap={5}>
 <Stack
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: 5,
        position: 'relative',
        backgroundColor: 'grey.100',
      }}
      gap={2}
    >
      {todos.map((todo) =>(<li key={todo.addDate.toString()}>{todo.text}</li>))}
    </Stack>
    </Stack>
  );
};

export default TodoList;
