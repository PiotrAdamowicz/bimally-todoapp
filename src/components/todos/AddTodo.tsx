import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddTodo = () => {
  const valid = false;

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, ml: 0, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        error={valid}
        id="outlined-multiline-flexible"
        label="Add task"
        defaultValue=""
        helperText={`${valid ? 'Incorrect entry.' : ''}`}
        fullWidth
      />
    </Box>
  );
};

export default AddTodo;
