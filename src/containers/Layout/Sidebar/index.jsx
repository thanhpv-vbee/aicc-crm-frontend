/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, matchPath } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import {
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Hidden,
  Tooltip,
  Button,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { sidebarMenu } from './config';
import { StyledSidebar } from './index.style';

export default function Sidebar(props) {
  const { collapsed, toggle } = props;
  const [expandMenu, setExpandMenu] = useState();
  const [menuActive, setMenuActive] = useState();

  const { t } = useTranslation();
  const { pathname } = useLocation();
  const history = useHistory();

  const isActiveRoute = (route) =>
    matchPath(pathname, { path: route, exact: true });

  useEffect(() => {
    sidebarMenu.every((menu, index) => {
      const checked = isActiveRoute(menu.route);
      if (checked) {
        setExpandMenu(index);
        setMenuActive(index);
        return false;
      }
      if (menu.subMenu) {
        const checkedNestedMenu = menu.subMenu.every((menuItem) => {
          const checkedSubMenu = isActiveRoute(menuItem.route);
          if (checkedSubMenu) {
            setExpandMenu(index);
            setMenuActive(index);
            return false;
          }
          return true;
        });
        if (!checkedNestedMenu) return false;
      }
      return true;
    });
  }, [pathname]);

  const handleCollapseMenu = (index) => {
    if (expandMenu === index) {
      setExpandMenu('');
      return;
    }
    setExpandMenu(index);
  };

  const handleClickMenu = (route, menuIndex) => {
    history.push(route);
    setExpandMenu(menuIndex);
  };

  const renderCollapseMenuItem = (item, index, mobile) => (
    <>
      <ListItem
        button
        onClick={() => handleCollapseMenu(index)}
        className={`menuItem ${menuActive === index && 'backgroundPrimary'}`}
      >
        <ListItemIcon
          className={`menuIcon ${menuActive === index && 'primary'}`}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={t(item.heading)}
          className={`menuTitle ${!mobile && collapsed && 'hide'}`}
        />
        {expandMenu === index ? (
          <ExpandLess
            className={`menuIcon ${!mobile && collapsed && 'hide'}`}
          />
        ) : (
          <ExpandMore
            className={`menuIcon ${!mobile && collapsed && 'hide'}`}
          />
        )}
      </ListItem>
      {!mobile && collapsed && (
        <div className="placementRightTop">
          <List component="div" disablePadding className="subMenu">
            {item.subMenu.map((menuItem) => {
              const isSubmenuActive =
                menuActive === index && isActiveRoute(menuItem.route);
              return (
                <ListItem
                  key={uuidV4()}
                  button
                  className={`nested menuItem ${
                    isSubmenuActive && 'backgroundPrimary'
                  }`}
                  onClick={() => handleClickMenu(menuItem.route, index)}
                >
                  <ListItemIcon
                    className={`menuIcon ${isSubmenuActive && 'primary'}`}
                  >
                    {menuItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    className={`menuTitle ${isSubmenuActive && 'primary'}`}
                    primary={t(menuItem.heading)}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      )}
      <Collapse
        in={(mobile || !collapsed) && expandMenu === index}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {item.subMenu.map((menuItem) => {
            const isSubmenuActive =
              menuActive === index && isActiveRoute(menuItem.route);
            return (
              <ListItem
                key={uuidV4()}
                button
                className={`nested menuItem ${
                  isSubmenuActive && 'backgroundPrimary'
                }`}
                onClick={() => handleClickMenu(menuItem.route, index)}
              >
                <ListItemIcon
                  className={`menuIcon ${isSubmenuActive && 'primary'}`}
                >
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText
                  className={`menuTitle ${isSubmenuActive && 'primary'}`}
                  primary={t(menuItem.heading)}
                />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );

  const ItemWithTooltip = ({ children, title, mobile }) => {
    if (!mobile && collapsed)
      return <Tooltip title={title}>{children}</Tooltip>;
    return children;
  };

  const renderMenuItem = (item, index, mobile) => (
    <ItemWithTooltip title={t(item.heading)} mobile={mobile}>
      <ListItem
        key={uuidV4()}
        button
        onClick={() => handleClickMenu(item.route, index)}
        className={`menuItem ${menuActive === index && 'backgroundPrimary'}`}
      >
        <ListItemIcon
          className={`menuIcon ${menuActive === index && 'primary'}`}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={t(item.heading)}
          className={`menuTitle ${!mobile && collapsed && 'hide'} ${
            menuActive === index && 'primary'
          }`}
        />
      </ListItem>
    </ItemWithTooltip>
  );

  const renderSidebarWindow = () => (
    <Hidden smDown implementation="css">
      <Drawer
        open={!collapsed}
        className={`drawer ${!collapsed && 'drawerOpen'} ${
          collapsed && 'drawerClose'
        }`}
        variant="permanent"
        classes={{
          paper: `drawer ${!collapsed && 'drawerOpen'} ${
            collapsed && 'drawerClose'
          }`,
        }}
      >
        <Toolbar className={`toolbar ${collapsed && 'toolbarCollapsed'} }`}>
          <img
            className={`${collapsed && 'hide'} }`}
            src="/img/logo.svg"
            alt="logo"
          />
          <Button className="menuButton" onClick={toggle}>
            <img
              src={
                collapsed
                  ? '/img/collapsed-menu-icon.svg'
                  : '/img/menu-icon.svg'
              }
              alt="menu-icon"
            />
          </Button>
        </Toolbar>
        <div className="content">
          <List>
            {sidebarMenu.map((item, index) => (
              <div key={uuidV4()} className="menuSubmenu">
                {item.subMenu
                  ? renderCollapseMenuItem(item, index)
                  : renderMenuItem(item, index)}
              </div>
            ))}
          </List>
        </div>
        <div className="footer">
          <img alt="" src="/img/logo-sidebar.svg" />
          <p className={`${collapsed && 'hide'} }`}>Powered by Vbee JSC.</p>
        </div>
      </Drawer>
    </Hidden>
  );

  const renderSidebarMobile = () => (
    <Hidden mdUp implementation="css">
      <Drawer
        variant="temporary"
        anchor="right"
        open={false}
        //   onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className="drawerMobile">
          <List>
            {sidebarMenu.map((item, index) => (
              <div key={uuidV4()}>
                {item.subMenu
                  ? renderCollapseMenuItem(item, index, true)
                  : renderMenuItem(item, index, true)}
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    </Hidden>
  );

  return (
    <StyledSidebar>
      {renderSidebarWindow()}
      {renderSidebarMobile()}
    </StyledSidebar>
  );
}
