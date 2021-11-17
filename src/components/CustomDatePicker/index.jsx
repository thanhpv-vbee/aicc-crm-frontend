import React from 'react';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import useStyles from './index.style';

function CustomDatePicker(props) {
  const classes = useStyles();
  return (
    <div className={classes.dateTimePicker}>
      <KeyboardDateTimePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        format="hh:mm - dd/MM/yyyy"
        InputAdornmentProps={{ position: 'start' }}
        placeholder="--/--/----"
        mask="--/--/----"
        maskChar="-"
        {...props}
      />
    </div>
  );
}

export default CustomDatePicker;
