import React, { useState, useEffect, createRef } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import useStyles from './index.style';

export default function Layout({ children }) {
  const classes = useStyles();
  const mainPanel = createRef();

  useEffect(() => {
    document.body.style.overflow = 'unset';
    return function cleanup() {};
  });

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prevValue) => !prevValue);
  };

  return (
    <div className={classes.container}>
      <Sidebar collapsed={collapsed} toggle={toggle} />
      <div className={classes.main} ref={mainPanel}>
        <div className={classes.navbar}>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
}
