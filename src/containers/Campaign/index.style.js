import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  campaign: {
    background: '#fff',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
    padding: '25px',
  },
  textField: {
    backgroundColor: 'white',
    width: '100%',
    height: 'fit-content',
    borderRadius: theme.shape.borderRadius,

    input: {
      height: '9px',
      fontSize: '14px',
      padding: '10.5px',
    },
  },
  resetButton: {
    minWidth: '50px',
    padding: '6px',
    boxShadow: 'none',
  },
  button: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: 'none',
  },
  pagination: {
    '& .Mui-selected': {
      color: 'white',
    },
  },
  paginationText: {
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
  },
  iconButton: {
    padding: '5px',
  },
}));
