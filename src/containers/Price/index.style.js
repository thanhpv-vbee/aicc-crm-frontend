import { TableCell, withStyles } from '@material-ui/core';

export const StyledTableCell = withStyles(() => ({
  root: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    fontSize: '0.9rem',
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

const priceStyle = (theme) => ({
  wrapper: {
    background: '#fff',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
    padding: '25px',
    minHeight: '650px',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: 0,
    paddingBottom: '50px',
    fontWeight: 500,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  tableCellHeader: {
    border: 'none',
  },
  footer: {
    fontWeight: 500,
  },
  note: {
    margin: 0,
  },
  noteList: {
    marginTop: '5px',
    listStyle: `square inside url('data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==')`,
    paddingInlineStart: 0,

    '& li': {
      marginBottom: '5px',
    },
    '& a': {
      color: '#FC6634',
    },
  },
});

export default priceStyle;
