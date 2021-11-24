/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  Box,
  Typography,
  TableCell,
  Pagination,
} from '@mui/material';
import { StyledCustomTable, StyledTableCell } from './index.style';

const CustomTableRow = ({ item, heads, actions, index }) => (
  <TableRow key={item.id}>
    {heads.map((head) => {
      if (item.id === 'totalRow') {
        return (
          <TableCell className="tableCell" align={head.align}>
            {(head.valueName !== 'actions' &&
              head.valueName !== 'no' &&
              item[head.valueName]) ||
              ' '}
          </TableCell>
        );
      }
      return (
        <StyledTableCell align={head.align}>
          {head.valueName === 'no' && index}
          {head.valueName === 'actions' &&
            actions.length &&
            actions.map((action) => (
              <IconButton
                className="iconButton"
                onClick={() => action.onClick(item.id)}
              >
                {action.icon}
              </IconButton>
            ))}
          {head.valueName !== 'actions' &&
            head.valueName !== 'no' &&
            item[head.valueName]}
        </StyledTableCell>
      );
    })}
  </TableRow>
);

const CustomTable = ({
  heads,
  items,
  actions,
  pagination,
  onChangePagination,
}) => {
  const { t } = useTranslation('common');

  return (
    <StyledCustomTable>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {heads.map((head) => (
                <StyledTableCell align={head.align}>
                  {head.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <CustomTableRow
                item={item}
                heads={heads}
                actions={actions}
                index={index + 1}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mt={2}
      >
        <Typography className="paginationText">
          {t('paginationText', {
            start: (pagination.page - 1) * pagination.limit + 1,
            end: pagination.page * pagination.limit,
            total: pagination.total,
          })}
        </Typography>
        <Pagination
          color="primary"
          className="pagination"
          page={pagination.page}
          count={pagination.totalPages}
          onChange={(e, page) => onChangePagination(page)}
        />
      </Box>
    </StyledCustomTable>
  );
};

export default CustomTable;
