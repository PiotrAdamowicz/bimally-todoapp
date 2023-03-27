import React from 'react';

import TodoList from '@/components/TodoList/TodoList';
import { Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';
import AddTodo from '@/components/todos/AddTodo';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddTodo />
        </Grid>
        <Grid item xs={12}>
          <TodoList />
        </Grid>
        <Counter />
      </Grid>
    </Container>
  );
};

export default Home;
