import { makeStyles, TableCell, withStyles } from '@material-ui/core';
import { COLOR } from '@src/styles/color';

export const StyledTableCell = withStyles(() => ({
  root: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    color: COLOR.bodyText,
  },
  head: {
    backgroundColor: '#F6F9FC',
    fontWeight: '600',
    fontSize: '15px',
    textTransform: 'uppercase',
    color: '#6E6B7B',
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

export default makeStyles(() => ({
  iconButton: {
    padding: '5px',
    background: '#FFFFFF',
    color: '#BABFC7',
    '&:hover': {
      color: '#6E6B7B',
      background: 'none',
    },
  },
  paginationText: {
    color: COLOR.light,
    fontWeight: 600,
  },
  pagination: {
    '& .Mui-selected': {
      color: '#FFFFFF',
    },
  },
  tableCell: {
    fontWeight: '500',
    fontSize: '16px',
  },
}));
