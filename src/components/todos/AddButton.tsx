import React from 'react';

//Components
import { Button } from '@mui/material';

//CSS
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const StyledButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: green[500],
  borderColor: green[500],
  borderWidth: '4px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: green[400],
    borderColor: green[300],
    boxShadow: 'none',
  },
});

const AddButton = () => {
  return (
    <StyledButton type="submit" variant="contained">
      Add Task
    </StyledButton>
  );
};

export default AddButton;
