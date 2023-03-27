import React from 'react';

import TodoList from '@/components/todos/TodoList';
import { Container } from '@mui/material';
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
      </Grid>
    </Container>
  );
};

export default Home;
