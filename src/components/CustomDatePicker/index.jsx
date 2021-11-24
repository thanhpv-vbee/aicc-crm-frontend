import React from 'react';
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/lab';
import { StyledCustomDatePicker } from './index.style';

function CustomDatePicker(props) {
  return (
    <StyledCustomDatePicker>
      <DateTimePicker
        renderInput={(params) => <TextField {...params} size="small" />}
        InputAdornmentProps={{ position: 'start' }}
        {...props}
      />
    </StyledCustomDatePicker>
  );
}

export default CustomDatePicker;
