import React from 'react';
import TodoList from '@/components/TodoList/TodoList';
import { Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <TodoList />
      <Counter />
    </Container>
  );
};

export default Home;
