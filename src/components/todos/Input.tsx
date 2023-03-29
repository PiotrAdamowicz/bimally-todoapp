import React from 'react';

//State & Validation
import { useDispatch } from 'react-redux';
import { add, toggleEditById, update } from '@/slices/todosSlices';
import { Validate, ValidationGroup } from 'mui-validate';

//Componets
import Box from '@mui/material/Box';
import { InputAdornment, OutlinedInput } from '@mui/material';
import InputButton from '../utils/InputButton';

export interface AddTodoProps {
  label: string | React.ReactNode;
  text?: string;
  variant?: 'edit';
  id?: number;
}

const Input: React.FC<AddTodoProps> = ({ label, text = '', variant, id }) => {
  const [value, setValue] = React.useState(text);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (variant === 'edit') {
      dispatch(toggleEditById(id));
      dispatch(update({ value, id }));
      return;
    }
    dispatch(add(value));
    setValue('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 2, ml: 0, width: '100%' },
      }}
      autoComplete="off"
    >
      <ValidationGroup>
        <>
          <Validate name="addTask" required={[true, 'Task must not be empty']}>
            <OutlinedInput
              sx={{ fontSize: 15 }}
              onChange={(event) => setValue(event.target.value)}
              fullWidth
              value={value}
              autoFocus
              endAdornment={
                <InputAdornment position="end">
                  <InputButton edit={variant} label={label ? label : 'Button'} />
                </InputAdornment>
              }
            />
          </Validate>
        </>
      </ValidationGroup>
    </Box>
  );
};

export default Input;
