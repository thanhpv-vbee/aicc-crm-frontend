/* eslint-disable no-unused-vars */

import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  Typography,
  Box,
  useTheme,
  TableCell,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { STATUSES } from '@src/constants';
import WarningIcon from '@material-ui/icons/Warning';
import useStyle, { StyledTableCell } from './index.style';

const CampaignTable = ({ campaigns }) => {
  const theme = useTheme();
  let classes = useStyle();

  const primaryColor = theme.palette.text.primary;
  let color = '';
  const renderStatus = (status) => {
    switch (status) {
      case STATUSES.KHOI_TAO:
        color = primaryColor;
        break;
      case STATUSES.DANG_DANH_GIA:
        color = '#6E6B7B';
        break;
      case STATUSES.DA_XONG:
        color = '#28C76F';
        break;
      case STATUSES.TAM_DUNG:
        color = '#6E6B7B';
        break;
      case STATUSES.LOI:
        color = '#EA5455';
        break;
      case STATUSES.DANG_CHAY:
        color = '#FC6634';
        break;
      default:
        break;
    }
    classes = useStyle({ color });
    return status === STATUSES.LOI ? (
      <Box display="flex">
        <Typography className={classes.status} color={color}>
          {status}
        </Typography>
        <WarningIcon className={classes.warningIcon} />
      </Box>
    ) : (
      <Typography className={classes.status} color={color}>
        {status}
      </Typography>
    );
  };
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Tên chiến dịch</StyledTableCell>
            <StyledTableCell align="left">Cuộc gọi gần nhất</StyledTableCell>
            <StyledTableCell align="right">Số KH chưa gọi</StyledTableCell>
            <StyledTableCell align="left">Ngày tạo</StyledTableCell>
            <StyledTableCell align="left">Trạng thái</StyledTableCell>
            <StyledTableCell align="center">...</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <StyledTableCell component="th" scope="row">
                {campaign.id}
              </StyledTableCell>
              <StyledTableCell align="left">{campaign.name}</StyledTableCell>
              <StyledTableCell align="left">
                {campaign.callNearest}
              </StyledTableCell>
              <StyledTableCell align="right">
                {campaign.phoneNumber}
              </StyledTableCell>
              <StyledTableCell align="left">
                {campaign.createdAt}
              </StyledTableCell>
              <StyledTableCell align="left">
                {renderStatus(campaign.status)}
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton className={classes.iconButton}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <PlayArrowIcon />
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <EditIcon />
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CampaignTable;
