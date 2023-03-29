import React from 'react';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const EmptyList = () => {
  return (
    <Stack justifyContent="center" alignItems="baseline" direction="row" sx={{ width: '100%' }} spacing={2}>
      <Alert severity="info">No tasks added</Alert>
    </Stack>
  );
};

export default EmptyList;
