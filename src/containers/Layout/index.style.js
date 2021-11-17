import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  main: {
    flex: 1,
    padding: '15px 30px',
  },
  navbar: {
    marginBottom: '20px',
    background: '#fff',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
  },
}));
