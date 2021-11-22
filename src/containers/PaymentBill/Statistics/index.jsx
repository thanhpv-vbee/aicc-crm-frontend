import React from 'react';
import classNames from 'classnames';
import { Box, Typography, Grid, Icon } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '@src/utils/formatCurrency';
import useStyles from './index.style';

const IconCustom = ({ iconName, bgColor }) => {
  const classes = useStyles({ bgColor });
  return (
    <Box className={classes.iconBox}>
      <Icon className={classes.icon}>{iconName}</Icon>
    </Box>
  );
};

const Statistics = ({ items, col }) => {
  const { t } = useTranslation(['paymentBill']);
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={Math.floor(12 / col)}>
          <div className={classes.analystItem}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <Box>
                <Typography className={classes.analystLabel}>
                  {t(item.label)}
                </Typography>
                <Typography className={classes.analystValue}>
                  {formatNumber(item.value)}
                </Typography>
              </Box>
              <IconCustom iconName={item.iconName} bgColor={item.iconBgColor} />
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                mr={2}
              >
                {item.up && (
                  <Icon
                    className={classNames(classes.upColor, classes.statusIcon)}
                  >
                    arrow_upward
                  </Icon>
                )}
                {!item.up && (
                  <Icon
                    className={classNames(
                      classes.downColor,
                      classes.statusIcon,
                    )}
                  >
                    arrow_downward
                  </Icon>
                )}
                <Typography
                  className={classNames(
                    item.up ? classes.upColor : classes.downColor,
                    classes.percentage,
                  )}
                >
                  {item.percentage}%
                </Typography>
              </Box>
              <Typography className={classes.compareTime}>
                {t(item.compareTime)}
              </Typography>
            </Box>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Statistics;
