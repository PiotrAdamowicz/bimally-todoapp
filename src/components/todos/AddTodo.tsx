import React from 'react';

//State & Validation
import { useDispatch } from 'react-redux';
import { add } from '@/slices/todosSlices';
import { Validate, ValidationGroup } from 'mui-validate';

//Componets
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddTodo = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  return (
    <Box
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(add(value));
        setValue('');
      }}
      sx={{
        '& .MuiTextField-root': { m: 2, ml: 0, width: '100%' },
      }}
      autoComplete="off"
    >
      <ValidationGroup>
        <Validate name="addTask" required={[true, 'Task must not be empty']}>
          <TextField onChange={(event) => setValue(event.target.value)} fullWidth value={value} />
        </Validate>
      </ValidationGroup>
    </Box>
  );
};

export default AddTodo;
