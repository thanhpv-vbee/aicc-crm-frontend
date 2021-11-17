/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, matchPath } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import classNames from 'classnames';
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
} from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { sidebarMenu } from './config';
import useStyles from './index.style';

export default function Sidebar(props) {
  const { collapsed, toggle } = props;
  const [expandMenu, setExpandMenu] = useState();
  const [menuActive, setMenuActive] = useState();

  const classes = useStyles();
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
        className={classNames(classes.menuItem, {
          [classes.backgroundPrimary]: menuActive === index,
        })}
      >
        <ListItemIcon
          className={classNames(classes.menuIcon, {
            [classes.primary]: menuActive === index,
          })}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={t(item.heading)}
          className={classNames(classes.menuTitle, {
            [classes.hide]: !mobile && collapsed,
          })}
        />
        {expandMenu === index ? (
          <ExpandLess
            className={classNames(classes.menuIcon, {
              [classes.hide]: !mobile && collapsed,
            })}
          />
        ) : (
          <ExpandMore
            className={classNames(classes.menuIcon, {
              [classes.hide]: !mobile && collapsed,
            })}
          />
        )}
      </ListItem>
      {!mobile && collapsed && (
        <div className={classes.placementRightTop}>
          <List component="div" disablePadding className={classes.subMenu}>
            {item.subMenu.map((menuItem) => {
              const isSubmenuActive =
                menuActive === index && isActiveRoute(menuItem.route);
              return (
                <ListItem
                  key={uuidV4()}
                  button
                  className={classNames(classes.nested, classes.menuItem, {
                    [classes.backgroundPrimary]: isSubmenuActive,
                  })}
                  onClick={() => handleClickMenu(menuItem.route, index)}
                >
                  <ListItemIcon
                    className={classNames(classes.menuIcon, {
                      [classes.primary]: isSubmenuActive,
                    })}
                  >
                    {menuItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    className={classNames(classes.menuTitle, {
                      [classes.primary]: isSubmenuActive,
                    })}
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
                className={classNames(classes.nested, classes.menuItem, {
                  [classes.backgroundPrimary]: isSubmenuActive,
                })}
                onClick={() => handleClickMenu(menuItem.route, index)}
              >
                <ListItemIcon
                  className={classNames(classes.menuIcon, {
                    [classes.primary]: isSubmenuActive,
                  })}
                >
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText
                  className={classNames(classes.menuTitle, {
                    [classes.primary]: isSubmenuActive,
                  })}
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
        className={classNames(classes.menuItem, {
          [classes.backgroundPrimary]: menuActive === index,
        })}
      >
        <ListItemIcon
          className={classNames(classes.menuIcon, {
            [classes.primary]: menuActive === index,
          })}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={t(item.heading)}
          className={classNames(classes.menuTitle, {
            [classes.hide]: !mobile && collapsed,
            [classes.primary]: menuActive === index,
          })}
        />
      </ListItem>
    </ItemWithTooltip>
  );

  const renderSidebarWindow = () => (
    <Hidden smDown implementation="css">
      <Drawer
        open={!collapsed}
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: !collapsed,
          [classes.drawerClose]: collapsed,
        })}
        variant="permanent"
        classes={{
          paper: classNames(classes.drawer, {
            [classes.drawerOpen]: !collapsed,
            [classes.drawerClose]: collapsed,
          }),
        }}
      >
        <Toolbar
          className={classNames(classes.toolbar, {
            [classes.toolbarCollapsed]: collapsed,
          })}
        >
          <img
            className={classNames({ [classes.hide]: collapsed })}
            src="/img/logo.svg"
            alt="logo"
          />
          <Button className={classes.menuButton} onClick={toggle}>
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
        <div className={classes.content}>
          <List>
            {sidebarMenu.map((item, index) => (
              <div key={uuidV4()} className={classes.menuSubmenu}>
                {item.subMenu
                  ? renderCollapseMenuItem(item, index)
                  : renderMenuItem(item, index)}
              </div>
            ))}
          </List>
        </div>
        <div className={classes.footer}>
          <img alt="" src="/img/logo-sidebar.svg" />
          <p className={classNames({ [classes.hide]: collapsed })}>
            Powered by Vbee JSC.
          </p>
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
        <div className={classes.drawerMobile}>
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
    <div className="sidebar-container">
      {renderSidebarWindow()}
      {renderSidebarMobile()}
    </div>
  );
}
