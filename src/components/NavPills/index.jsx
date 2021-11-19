/* eslint-disable react/no-array-index-key */
import { AppBar, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';

import useStyles from './index.style';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const NavPills = (props) => {
  const { active: defaultActive = 0, tabs } = props;
  const [active, setActive] = useState(defaultActive);

  const handleChange = (event, value) => {
    setActive(value);
  };

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Tabs
          value={active}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator,
          }}
        >
          {tabs.map((prop, index) => (
            <Tab
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected,
              }}
              key={index}
              label={prop.tabButton}
            />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map((prop, index) => (
        <TabPanel
          key={index}
          className={classes.tabPanel}
          value={active}
          index={index}
        >
          {prop.tabContent}
        </TabPanel>
      ))}
    </div>
  );
};

export default NavPills;
