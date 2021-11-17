import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Box,
  Button,
  Typography,
  IconButton,
} from '@material-ui/core';
import SyncIcon from '@material-ui/icons/Sync';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Pagination from '@material-ui/lab/Pagination';
import CustomDatePicker from '@src/components/CustomDatePicker';
import TuneIcon from '@material-ui/icons/Tune';
import useStyles from './index.style';

import { campaigns, scripts, statuses } from './data';
import CampaignTable from './CampaignTable';

const Campaign = () => {
  const classes = useStyles();
  return (
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
            <CampaignTable campaigns={campaigns} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="space-between"
          style={{ marginTop: '15px' }}
        >
          <Typography className={classes.paginationText}>
            Hiển thị từ 1 đến 8 của 104
          </Typography>
          <Pagination
            count={10}
            color="primary"
            className={classes.pagination}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Campaign;
