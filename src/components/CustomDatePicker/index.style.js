import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  dateTimePicker: {
    '& .MuiTextField-root': {
      width: '100%',
    },
    '& .MuiOutlinedInput-root': {
      width: '100%',
      paddingLeft: '0px',
      '& input': {
        padding: '10.5px 0',
        height: 'fit-content',
      },
    },
  },
}));
