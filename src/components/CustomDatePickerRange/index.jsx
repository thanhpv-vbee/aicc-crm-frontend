import React from 'react';
import { Box, IconButton, Icon, TextField } from '@mui/material';
import { DatePicker, DateTimePicker, TimePicker } from '@mui/lab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DATE_TIME_PICKER_TYPES } from '@src/constants';
import {
  StyledCustomDatePickerRange,
  StyledCustomDatePicker,
} from './index.style';

const CustomDatePicker = ({ type, selectedDate, handleChangeDate }) => (
  <StyledCustomDatePicker>
    {type === DATE_TIME_PICKER_TYPES.DATE && (
      <DatePicker
        value={selectedDate}
        onChange={handleChangeDate}
        renderInput={(params) => <TextField {...params} size="small" />}
        InputAdornmentProps={{ position: 'start' }}
      />
    )}
    {type === DATE_TIME_PICKER_TYPES.TIME && (
      <TimePicker
        value={selectedDate}
        onChange={handleChangeDate}
        renderInput={(params) => <TextField {...params} size="small" />}
        InputAdornmentProps={{ position: 'start' }}
      />
    )}
    {type === DATE_TIME_PICKER_TYPES.DATE_TIME && (
      <DateTimePicker
        value={selectedDate}
        onChange={handleChangeDate}
        renderInput={(props) => <TextField {...props} />}
        InputAdornmentProps={{ position: 'start' }}
      />
    )}
  </StyledCustomDatePicker>
);

const CustomDatePickerRange = ({
  isRefresh = true,
  type = DATE_TIME_PICKER_TYPES.DATE_TIME,
  startDate = new Date(),
  endDate = new Date(),
  handleChangeStartDate,
  handleChangeEndDate,
  handleRefresh,
}) => (
  <StyledCustomDatePickerRange>
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
      <ArrowForwardIosIcon className="arrow-icon" />
      <CustomDatePicker
        type={type}
        selectedDate={endDate}
        handleChangeDate={handleChangeEndDate}
      />
      {isRefresh && (
        <IconButton
          aria-label="refresh"
          className="reset-button"
          onClick={handleRefresh}
        >
          <Icon>sync</Icon>
        </IconButton>
      )}
    </Box>
  </StyledCustomDatePickerRange>
);
export default CustomDatePickerRange;
