import React from 'react';

//State & Validation
import { useDispatch } from 'react-redux';
import { add } from '@/slices/todosSlices';
import { Validate, ValidationGroup } from 'mui-validate';

//Componets
import Box from '@mui/material/Box';
import { InputAdornment, OutlinedInput } from '@mui/material';
import AddButton from '@/components/todos/AddButton';

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
        <>
          <Validate name="addTask" required={[true, 'Task must not be empty']}>
            <OutlinedInput
              onChange={(event) => setValue(event.target.value)}
              fullWidth
              value={value}
              endAdornment={
                <InputAdornment position="end">
                  <AddButton />
                </InputAdornment>
              }
            />
          </Validate>
        </>
      </ValidationGroup>
    </Box>
  );
};

export default AddTodo;
