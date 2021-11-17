import { makeStyles, TableCell, withStyles } from '@material-ui/core';

export const StyledTableCell = withStyles(() => ({
  root: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
  },
  head: {
    backgroundColor: '#F6F9FC',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#6E6B7B',
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

export default makeStyles(() => ({
  status: {
    color: (props) => props.color,
    fontWeight: 'bold',
    marginRight: '5px',
  },
  warningIcon: {
    color: '#EA5455',
  },
  iconButton: {
    padding: '5px',
  },
}));
