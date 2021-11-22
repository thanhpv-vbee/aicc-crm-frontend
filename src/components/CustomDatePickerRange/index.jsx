import React from 'react';
import { Box, IconButton, Icon, Typography } from '@material-ui/core';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import { useTranslation } from 'react-i18next';
import { DATE_TIME_PICKER_TYPES } from '@src/constants';
import useStyles from './index.style';

const CustomDatePicker = ({ type, selectedDate, handleChangeDate }) => {
  const classes = useStyles();
  return (
    <div className={classes.dateTimePicker}>
      {type === DATE_TIME_PICKER_TYPES.DATE && (
        <KeyboardDatePicker
          variant="inline"
          inputVariant="outlined"
          value={selectedDate}
          onChange={(date) => handleChangeDate(date)}
          minDate={new Date()}
          format="dd/MM/yyyy"
          InputAdornmentProps={{ position: 'start' }}
        />
      )}
      {type === DATE_TIME_PICKER_TYPES.TIME && (
        <KeyboardTimePicker
          variant="inline"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleChangeDate}
          InputAdornmentProps={{ position: 'start' }}
        />
      )}
      {type === DATE_TIME_PICKER_TYPES.DATE_TIME && (
        <KeyboardDateTimePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="hh:mm - dd/MM/yyyy"
          InputAdornmentProps={{ position: 'start' }}
          placeholder="--/--/----"
          mask="--/--/----"
          maskChar="-"
          onChange={handleChangeDate}
          value={selectedDate}
        />
      )}
    </div>
  );
};

const CustomDatePickerRange = ({
  isRefresh = true,
  type = DATE_TIME_PICKER_TYPES.DATE,
  startDate = new Date(),
  endDate = new Date(),
  handleChangeStartDate,
  handleChangeEndDate,
  handleRefresh,
}) => {
  const { t } = useTranslation(['common']);
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <CustomDatePicker
        type={type}
        selectedDate={startDate}
        handleChangeDate={handleChangeStartDate}
      />
      <Typography className={classes.toText}>{t('to')}</Typography>
      <CustomDatePicker
        type={type}
        selectedDate={endDate}
        handleChangeDate={handleChangeEndDate}
      />
      {isRefresh && (
        <IconButton
          aria-label="refresh"
          className={classes.resetButton}
          onClick={handleRefresh}
        >
          <Icon>sync</Icon>
        </IconButton>
      )}
    </Box>
  );
};

export default CustomDatePickerRange;
