import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from './gridContainer.style';

const useStyles = makeStyles(styles);

const GridContainer = (props) => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

export default GridContainer;

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

GridContainer.defaultProps = {
  className: '',
  children: '',
};
