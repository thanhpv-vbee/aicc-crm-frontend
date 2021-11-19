import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from './gridItem.style';

const useStyles = makeStyles(styles);

const GridItem = (props) => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

export default GridItem;

GridItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

GridItem.defaultProps = {
  className: '',
  children: '',
};
