import styled from 'styled-components';
import { BORDER_RADIUS } from '@src/styles/config';
import { TableCell } from '@mui/material';

export const StyledTableCell = styled(TableCell)`
  &.muiTablecell-root {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    font-size: 0.9rem;
  }
  &.MuiTableCell-head {
    background-color: #f6f9fc;
    font-weight: 600;
    text-transform: uppercase;
    color: #6e6b7b;
  }
  &.MuiTableCell-body {
    font-size: 16px;
  }
`;

export const StyledPrice = styled.div`
  background: #fff;
  border-radius: ${BORDER_RADIUS};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  padding: 25px;
  min-height: 650px;
  display: flex;
  flex-direction: column;

  .header {
    margin: 0;
    padding-bottom: 50px;
    font-weight: 500;
    font-size: 18px;
  }
  .table {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }
  .tableCellHeader {
    border: none;
  }
  .footer {
    font-weight: 500;
  }
  .note {
    margin: 0;
  }
  .noteList {
    margin-top: 5px;
    list-style: square inside
      url(data:image/gif;base64;R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==);
    padding-inline-start: 0;
    &li {
      margin-bottom: 5px;
    }
    &a {
      color: #fc6634;
    }
  }
`;
