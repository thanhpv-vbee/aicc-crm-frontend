/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Box,
} from '@mui/material';
import data from './dummy.json';
import { StyledTableCell, StyledPrice } from './index.style';

const Price = () => {
  const { t } = useTranslation(['price']);

  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    setPriceList(data);
  }, []);

  return (
    <StyledPrice>
      <Typography className="header">{t('quotation')}</Typography>
      <div className="table">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell rowSpan={2}>{t('no')}</StyledTableCell>
                <StyledTableCell rowSpan={2}>{t('typeCall')}</StyledTableCell>
                <StyledTableCell colSpan={2} className="table-cell-header">
                  {t('unitPrice')}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>{t('excludeChargeCall')}</StyledTableCell>
                <StyledTableCell>{t('includeChargeCall')}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {priceList.map((item) => (
                <TableRow key={item.no}>
                  <StyledTableCell component="th" scope="row">
                    {item.no}
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.type}</StyledTableCell>
                  <StyledTableCell align="left">
                    {item.internal}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {item.external}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box>
          <Typography className="note" variant="paragraph">
            {t('note')}:
          </Typography>
          <ul className="note-list">
            <li>
              {t('firstDescription')}
              <a href="/" alt="/" target="_blank">
                {t('seeDetailHere')}
              </a>
            </li>
            <li>{t('secondDescription')}</li>
            <li>{t('thirdDescription')}</li>
            <li>{t('fourthDescription')}</li>
          </ul>
        </Box>
      </div>
    </StyledPrice>
  );
};

export default Price;
