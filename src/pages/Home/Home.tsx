import React from 'react';

import TodoList from '@/components/todos/TodoList';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Input from '@/components/todos/Input';

const Home = () => {
  return (
    <Container sx={{ width: '100%', py: 2, position: 'relative' }}>
      <Grid container spacing={2} rowSpacing={4}>
        <Grid item xs={12}>
          <Input label="Add task" />
        </Grid>
        <Grid item xs={12}>
          <TodoList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
