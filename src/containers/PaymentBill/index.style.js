import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  container: {
    padding: '25px',
    background: '#fff',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '500',
  },
  analystContainer: {
    flexGrow: 1,
  },
  statusIcon: {
    fontWeight: 'bold',
  },
  exportBtn: {
    textTransform: 'none',
    color: '#8898AA',
    margin: '10px 0px',
  },
}));
