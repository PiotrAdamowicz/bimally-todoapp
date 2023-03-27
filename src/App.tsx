import { BrowserRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Routing from './routes/Routing';
import React from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routing />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
