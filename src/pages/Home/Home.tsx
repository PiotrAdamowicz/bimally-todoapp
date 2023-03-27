import React from 'react';

import TodoList from '@/components/TodoList/TodoList';
import { Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';
import AddTodo from '@/components/todos/AddTodo';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <Container sx={{ width: '100%', py: 2, position: 'relative' }}>
      <Grid container spacing={12}>
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
