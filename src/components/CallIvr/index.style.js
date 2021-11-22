import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  container: {
    marginTop: '20px',
    padding: '18px 20px 20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '6px',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  headerText: {
    fontSize: '14px',
    textTransform: 'uppercase',
    color: '#6E6B7B',
    marginRight: '5px',
  },
  keyContainer: {
    alignItems: 'center',
    position: 'relative',
    '&:hover': {
      '& $clearButton': {
        display: 'block',
      },
    },
  },
  keyButton: {
    height: '44px',
    width: '100%',
    borderRadius: '0px',
    backgroundColor: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#6E6B7B',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.06)',
  },
  keyButtonSelected: {
    color: '#242424',
    borderRight: '2px solid #242424',
    '&,&:hover': {
      backgroundColor: 'rgba(30, 30, 30, 0.12)',
    },
  },
  keyButtonAdd: {
    color: '#FC6634',
    '&,&:hover': {
      backgroundColor: 'rgba(252, 102, 52, 0.12)',
    },
  },
  clearButton: {
    color: '#EA5455',
    padding: '0px',
    position: 'absolute',
    top: '12px',
    right: '-20px',
    display: 'none',
  },
  paper: {
    boxShadow: '0px 4px 15px rgb(0 0 0 / 8%)',
  },
  numpadContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  numpad: {
    border: '1px solid #F3F2F7',
    borderRadius: '6px',
    width: '80px',
    height: '80px',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#6E6B7B',
    '&:hover': {
      backgroundColor: 'rgba(252, 102, 52, 0.12)',
      color: '#FC6634',
    },
  },
  deleteButton: {
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'none',
  },
}));
