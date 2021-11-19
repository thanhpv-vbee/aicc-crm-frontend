import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  backButton: {
    color: '#6E6B7B',
    fontSize: '16px',
  },
  createButton: {
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      color: '#6E6B7B',
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '21px',
      textTransform: 'uppercase',
      marginRight: '4px',
    },
  },
  nameInput: {
    '&,&::placeholder': {
      fontSize: '18px',
      fontWeight: 'bold',
      opacity: 1,
    },
    '&::placeholder': {
      color: '#B9B9C3',
    },
  },
  createIcon: {
    color: '#B9B9C3',
  },
  mt10: {
    marginTop: 10,
  },
}));
