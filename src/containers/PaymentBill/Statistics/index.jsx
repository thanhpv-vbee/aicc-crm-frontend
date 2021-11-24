import React from 'react';
import { Box, Typography, Grid, Icon } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '@src/utils/formatNumber';
import { StyledStatistics, StyledIconCustom } from './index.style';

const IconCustom = ({ iconName, bgColor }) => (
  <StyledIconCustom bgColor={bgColor}>
    <Box className="iconBox">
      <Icon className="icon">{iconName}</Icon>
    </Box>
  </StyledIconCustom>
);

const Statistics = ({ items, col }) => {
  const { t } = useTranslation(['paymentBill']);

  return (
    <StyledStatistics>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={Math.floor(12 / col)}>
            <div className="analystItem">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Box>
                  <Typography className="analystLabel">
                    {t(item.label)}
                  </Typography>
                  <Typography className="analystValue">
                    {formatNumber(item.value)}
                  </Typography>
                </Box>
                <IconCustom
                  iconName={item.iconName}
                  bgColor={item.iconBgColor}
                />
              </Box>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  mr={2}
                >
                  {item.up && (
                    <Icon className="upColor statusIcon">arrow_upward</Icon>
                  )}
                  {!item.up && (
                    <Icon className="downColor statusIcon">arrow_downward</Icon>
                  )}
                  <Typography
                    className={`${
                      item.up ? 'upColor' : 'downColor'
                    } percentage`}
                  >
                    {item.percentage}%
                  </Typography>
                </Box>
                <Typography className="compareTime">
                  {t(item.compareTime)}
                </Typography>
              </Box>
            </div>
          </Grid>
        ))}
      </Grid>
    </StyledStatistics>
  );
};

export default Statistics;
