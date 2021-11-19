import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  popup: {
    '& .MuiPaper-root': {
      borderRadius: '0px',
      maxWidth: '659px',
    },
    '& .MuiDialogTitle-root': {
      padding: '16px 24px 5px',
      '& .MuiTypography-root': {
        color: '#5E5873',
        fontWeight: 'bold',
      },
    },
  },
  contentContainer: {
    marginTop: '-10px',
  },
  closeIcon: {
    padding: '2px 2px 0 0',
  },
  cancelButton: {
    color: theme.palette.primary.main,
    marginRight: '20px',
  },
  closeButton: {
    padding: '0',
  },
  content: {
    fontSize: '21px',
    fontWeight: '500',
    lineHeight: '30px',
    color: '#5E5873',
  },
}));
