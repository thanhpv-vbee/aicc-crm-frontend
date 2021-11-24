/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Grid,
  InputAdornment,
  TextField,
  Box,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SyncIcon from '@mui/icons-material/Sync';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TuneIcon from '@mui/icons-material/Tune';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';
import { useTranslation } from 'react-i18next';
import camelCase from 'camelcase';

import { STATUS_COLOR } from '@src/styles/color';
import CustomTable from '@src/components/CustomTable';
import CustomDatePicker from '@src/components/CustomDatePicker';
import Popup from '@src/components/Popup';
import { PAGINATION_LIMIT, SCRIPT_TYPES, STATUS } from '@src/constants';

import { campaigns, scriptsData, statusData } from './data';
import { StyledCampaign, StyledMenuItem } from './index.style';

const Campaign = () => {
  const { t } = useTranslation(['campaign']);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: PAGINATION_LIMIT,
    totalPages: 10,
    total: 100,
  });

  const [openDeletePopup, setOpenDeletePopup] = useState(false);

  const handleClickOpenDeletePopup = () => {
    setOpenDeletePopup(true);
  };

  const handleCloseDeletePopup = () => {
    setOpenDeletePopup(false);
  };

  const heads = [
    {
      label: 'ID',
      valueName: 'id',
      align: 'left',
    },
    {
      label: t('campaignName'),
      valueName: 'name',
      align: 'left',
    },
    {
      label: t('lastCall'),
      valueName: 'callNearest',
      align: 'left',
    },
    {
      label: t('notYetCall'),
      valueName: 'notYetCall',
      align: 'right',
    },
    {
      label: t('createdTime'),
      valueName: 'createdAt',
      align: 'left',
    },
    {
      label: t('status'),
      valueName: 'status',
      align: 'left',
    },
    {
      label: '...',
      valueName: 'actions',
      align: 'center',
    },
  ];

  const actions = [
    {
      icon: <VisibilityIcon />,
      onClick: () => {},
    },
    {
      icon: <PlayArrowIcon />,
      onClick: () => {},
    },
    {
      icon: <EditIcon />,
      onClick: () => {},
    },
    {
      icon: <DeleteIcon className="deleteIcon" />,
      onClick: handleClickOpenDeletePopup,
    },
  ];

  const renderStatusOnSelectBox = (status) => t(camelCase(STATUS[status]));

  const renderScriptType = (scriptType) =>
    t(camelCase(SCRIPT_TYPES[scriptType]));

  let color = '';
  let text = '';
  const renderStatusOnTable = (status) => {
    switch (status) {
      case STATUS.INIT:
        color = STATUS_COLOR.init;
        text = t('init');
        break;
      case STATUS.REVIEWING:
        color = STATUS_COLOR.reviewing;
        text = t('reviewing');
        break;
      case STATUS.DONE:
        color = STATUS_COLOR.done;
        text = t('done');
        break;
      case STATUS.PAUSE:
        color = STATUS_COLOR.pause;
        text = t('pause');
        break;
      case STATUS.ERROR:
        color = STATUS_COLOR.error;
        text = t('error');
        break;
      case STATUS.RUNNING:
        color = STATUS_COLOR.running;
        text = t('running');
        break;
      default:
        break;
    }

    return status === STATUS.ERROR ? (
      <Box display="flex">
        <Typography className="status" style={{ color }}>
          {text}
        </Typography>
        <WarningIcon className="warningIcon" />
      </Box>
    ) : (
      <Typography className="status" style={{ color }}>
        {text}
      </Typography>
    );
  };

  const handleChangePagination = (newPage) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <StyledCampaign>
      <Popup
        open={openDeletePopup}
        onClose={handleCloseDeletePopup}
        onOk={() => console.log('handle ok')}
        okMessage={t('confirmDeletion')}
        content={t('confirmQuestionDelete', {
          campaignName: 'Tên_chiến_dịch',
        })}
      />
      <div className="campaign">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={2} xl={3}>
              <TextField
                size="small"
                className="textField"
                variant="outlined"
                placeholder={t('search')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                className="textField"
                variant="outlined"
                select
                label={t('scriptType')}
              >
                {scriptsData.map((script) => (
                  <StyledMenuItem key={script.id} value={script.name}>
                    {renderScriptType(script.name)}
                  </StyledMenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                className="textField"
                variant="outlined"
                select
                label={t('status')}
              >
                {statusData.map((status) => (
                  <StyledMenuItem key={status.id} value={status.name}>
                    {renderStatusOnSelectBox(status.name)}
                  </StyledMenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item container xs={6} xl={5} spacing={1}>
              <Grid item xs={5}>
                <CustomDatePicker />
              </Grid>
              <Grid
                item
                xs={1}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box display="flex" alignItems="center">
                  <ArrowForwardIcon className="arrowIcon" />
                </Box>
              </Grid>
              <Grid item xs={5}>
                <CustomDatePicker />
              </Grid>
              <Grid item xs={1} style={{ display: 'flex' }}>
                <Box display="flex" alignItems="center">
                  <Button className="resetButton" variant="contained">
                    <SyncIcon />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item container xs={12} justifyContent="space-between">
              <IconButton className="iconButton">
                <TuneIcon />
              </IconButton>
              <Button variant="contained" color="primary" className="button">
                {t('createCampaign')}
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={12}>
              <CustomTable
                items={campaigns.map((campaign) => ({
                  ...campaign,
                  status: renderStatusOnTable(campaign.status),
                }))}
                heads={heads}
                actions={actions}
                pagination={pagination}
                onChangePagination={handleChangePagination}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </StyledCampaign>
  );
};

export default Campaign;
