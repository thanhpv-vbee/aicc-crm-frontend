/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
} from '@material-ui/core';

import GridContainer from '@src/components/Grid/GridContainer';
import GridItem from '@src/components/Grid/GridItem';

import data from './dummy.json';
import styles, { StyledTableCell } from './index.style';

const useStyles = makeStyles(styles);

const Price = () => {
  const { t } = useTranslation(['price']);
  const classes = useStyles();

  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    setPriceList(data);
  }, []);

  return (
    <div className={classes.wrapper}>
      <GridContainer justifyContent="left">
        <GridItem xs={12} sm={12} md={12}>
          <h3 className={classes.header}>{t('quotation')}</h3>
        </GridItem>
      </GridContainer>
      <div className={classes.main}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell rowSpan={2}>{t('no')}</StyledTableCell>
                    <StyledTableCell rowSpan={2}>
                      {t('typeCall')}
                    </StyledTableCell>
                    <StyledTableCell
                      colSpan={2}
                      className={classes.tableCellHeader}
                    >
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
                      <StyledTableCell align="left">
                        {item.type}
                      </StyledTableCell>
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
          </GridItem>
        </GridContainer>
        <GridContainer justify="left" className={classes.footer}>
          <GridItem xs={12} sm={12} md={12}>
            <Typography className={classes.note} variant="paragraph">
              {t('note')}:
            </Typography>
            <ul className={classes.noteList}>
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
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default Price;
