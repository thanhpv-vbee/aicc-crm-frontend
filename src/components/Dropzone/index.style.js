import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    border: '1px dashed transparent',
  },
  dragActive: {
    opacity: 0.5,
    border: '1px dashed #B9B9C3',
    boxSizing: 'border-box',
  },
}));
