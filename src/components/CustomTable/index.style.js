import styled from 'styled-components';
import { TableCell } from '@mui/material';
import { COLOR } from '@src/styles/color';

export const StyledTableCell = styled(TableCell)`
  &.MuiTableCell-head {
    background-color: #f6f9fc;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    color: #6e6b7b;
  }
  &.MuiTableCell-body {
    font-size: 16px;
  }
  .icon-button {
    padding: 5px;
    background: #ffffff;
    color: #babfc7;
    :hover {
      color: #6e6b7b;
      background: none;
    }
  }
`;

export const StyledCustomTable = styled.div`
  .pagination-text {
    color: ${COLOR.light};
    font-weight: 600;
  }
  .pagination {
    .Mui-selected {
      color: #fff;
    }
  }
  .table-cell {
    font-weight: 500;
    font-size: 16px;
  }
`;
