import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomDatePickerRange from '@src/components/CustomDatePickerRange';
import { DATE_TIME_PICKER_TYPES } from '@src/constants';
import Statistics from './Statistics';
import { statistics } from './data';
import { StyledPaymentBill } from './index.style';

const PaymentBill = () => {
  const { t } = useTranslation(['paymentBill']);
  const [filter, setFilter] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleChangeStartDate = (startDate) => {
    setFilter({
      ...filter,
      startDate,
    });
  };

  const handleChangeEndDate = (endDate) => {
    setFilter({
      ...filter,
      endDate,
    });
  };

  const handleRefresh = () => {
    setFilter({
      startDate: new Date(),
      endDate: new Date(),
    });
  };

  return (
    <StyledPaymentBill>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography className="headerTitle">{t('billList')}</Typography>
        <CustomDatePickerRange
          type={DATE_TIME_PICKER_TYPES.DATE}
          isRefresh
          startDate={filter.startDate}
          endDate={filter.endDate}
          handleChangeStartDate={handleChangeStartDate}
          handleChangeEndDate={handleChangeEndDate}
          handleRefresh={handleRefresh}
        />
      </Box>
      <div className="analystContainer">
        <Statistics items={statistics} col={3} />
      </div>
    </StyledPaymentBill>
  );
};

export default PaymentBill;
