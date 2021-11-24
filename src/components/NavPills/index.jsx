/* eslint-disable react/no-array-index-key */
import { AppBar, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

import { StyledNavPills } from './index.style';

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

  return (
    <StyledNavPills>
      <AppBar position="static" className="app-bar" elevation={0}>
        <Tabs
          value={active}
          onChange={handleChange}
          classes={{
            indicator: 'indicator',
          }}
        >
          {tabs.map((prop, index) => (
            <Tab
              classes={{
                root: 'tab-root',
                selected: 'tab-selected',
              }}
              key={index}
              label={prop.tabButton}
            />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map((prop, index) => (
        <TabPanel key={index} className="tabPanel" value={active} index={index}>
          {prop.tabContent}
        </TabPanel>
      ))}
    </StyledNavPills>
  );
};

export default NavPills;
