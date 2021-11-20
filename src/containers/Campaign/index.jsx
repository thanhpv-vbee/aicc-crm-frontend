import React, { useState } from 'react';
import {
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Box,
  Button,
  IconButton,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SyncIcon from '@material-ui/icons/Sync';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TuneIcon from '@material-ui/icons/Tune';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from '@material-ui/icons/Warning';
import { useTranslation } from 'react-i18next';

import { PAGINATION_LIMIT, STATUS } from '@src/constants';
import { STATUS_COLOR } from '@src/styles/color';
import CustomTable from '@src/components/CustomTable';
import CustomDatePicker from '@src/components/CustomDatePicker';
import Popup from '@src/components/Popup';
import useStyles from './index.style';

import { campaigns, scripts, statuses } from './data';

const Campaign = () => {
  const classes = useStyles();
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
      icon: <DeleteIcon className={classes.deleteIcon} />,
      onClick: handleClickOpenDeletePopup,
    },
  ];

  let color = '';
  let text = '';
  const renderStatus = (status) => {
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
        <Typography className={classes.status} style={{ color }}>
          {text}
        </Typography>
        <WarningIcon className={classes.warningIcon} />
      </Box>
    ) : (
      <Typography className={classes.status} style={{ color }}>
        {text}
      </Typography>
    );
  };

  const handleChangePagination = (newPage) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <>
      <Popup
        open={openDeletePopup}
        onClose={handleCloseDeletePopup}
        onOk={() => console.log('handle ok')}
        okMessage={t('confirmDeletion')}
        content={t('confirmQuestionDelete', {
          campaignName: 'Tên_chiến_dịch',
        })}
      />
      <div className={classes.campaign}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={2} xl={3}>
              <TextField
                size="small"
                className={classes.textField}
                variant="outlined"
                placeholder="Tìm kiếm"
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
                className={classes.textField}
                variant="outlined"
                select
                label="Loại kịch bản"
              >
                {scripts.map((script) => (
                  <MenuItem key={script.id} value={script.name}>
                    {script.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                className={classes.textField}
                variant="outlined"
                select
                label="Trạng thái"
              >
                {statuses.map((status) => (
                  <MenuItem key={status.id} value={status.name}>
                    {status.name}
                  </MenuItem>
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
                  <ArrowForwardIcon />
                </Box>
              </Grid>
              <Grid item xs={5}>
                <CustomDatePicker />
              </Grid>
              <Grid item xs={1} style={{ display: 'flex' }}>
                <Box display="flex" alignItems="center">
                  <Button className={classes.resetButton} variant="contained">
                    <SyncIcon />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item container xs={12} justifyContent="space-between">
              <IconButton className={classes.iconButton}>
                <TuneIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Tạo chiến dịch mới
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={12}>
              <CustomTable
                items={campaigns.map((campaign) => ({
                  ...campaign,
                  status: renderStatus(campaign.status),
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
    </>
  );
};

export default Campaign;
