import React from 'react';

//Components
import { Button } from '@mui/material';

//CSS
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const StyledButton = styled(Button)(({ theme }) => ({
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
    boxShadow: 'none',
    backgroundColor: green[400],
    borderColor: green[400],
    boxShadowColor: green[300],
  },
}));

export interface Label {
  label: string | React.ReactNode;
  edit: boolean | undefined;
}

const InputButton: React.FC<Label> = (props) => {
  return (
    <StyledButton
      sx={
        props.edit
          ? {
              backgroundColor: 'transparent',
              border: 0,
              color: 'white',
              minWidth: '20px',
              m: 0,
              px: 1,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }
          : undefined
      }
      type="submit"
      variant="contained"
      {...props}
    >
      {props.label}
    </StyledButton>
  );
};

export default InputButton;
