import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Validate, ValidationGroup } from 'mui-validate';

const AddTodo = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, ml: 0, width: '100%' },
      }}
      autoComplete="off"
    >
      <ValidationGroup>
        <Validate name="addTask" required={[true, 'Task must not be empty']}>
          <TextField fullWidth />
        </Validate>
      </ValidationGroup>
    </Box>
  );
};

export default AddTodo;
