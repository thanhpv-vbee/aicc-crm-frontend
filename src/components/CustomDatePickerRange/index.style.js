import { makeStyles } from '@material-ui/core';
import { COLOR } from '@src/styles/color';

export default makeStyles(() => ({
  dateTimePicker: {
    color: COLOR.light,
    '& .MuiTextField-root': {
      width: '100%',
    },
    '& .MuiOutlinedInput-root': {
      width: '100%',
      paddingLeft: '0px',
      '& input': {
        padding: '10.5px 0',
        height: 'fit-content',
        color: '#BABFC7',
      },
    },
    '& .MuiIconButton-label': {
      color: '#BABFC7',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderStyle: 'dotted',
    },
  },
  resetButton: {
    color: COLOR.light,
  },
  toText: {
    color: COLOR.light,
    margin: '0 10px',
  },
}));
