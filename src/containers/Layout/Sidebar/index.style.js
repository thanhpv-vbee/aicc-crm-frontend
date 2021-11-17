import { makeStyles } from '@material-ui/core';

const sidebarWidth = 260;

export default makeStyles(() => ({
  toolbar: {
    padding: '10px 19px 10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbarCollapsed: {
    justifyContent: 'center',
    padding: '0px',
  },
  drawer: {
    width: sidebarWidth,
    flexShrink: 0,
    height: '100vh',
    whiteSpace: 'nowrap',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
    borderRadius: '0px 12px 12px 0px',
    transition: 'all 0.25s',
    transitionDuration: 400,
  },
  drawerMobile: {
    width: sidebarWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: sidebarWidth,
  },
  drawerClose: {
    overflow: 'visible',
    width: '64px',
  },
  header: {
    height: '48px',
  },
  nested: {
    paddingLeft: '32px',
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    padding: '12px',
    minWidth: 'unset',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'none',
    justifyContent: 'center',
  },
  menuIcon: {
    minWidth: '24px',
    height: '30px',
    fontSize: '24px',
    lineHeight: '30px',
    alignItems: 'center',
    verticalAlign: 'middle',
    color: '#C9D5E4',
  },
  menuTitle: {
    paddingLeft: '10px',
    margin: '0px',
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1) 0s',
    color: '#6E6B7B',
  },
  primary: {
    color: '#FC6634',
  },
  backgroundPrimary: {
    backgroundColor: '#F5F5F5',
  },
  menuSubmenu: {
    position: 'relative',
    '&:hover': {
      '& $placementRightTop': {
        display: 'block',
      },
    },
  },
  placementRightTop: {
    backgroundColor: 'transparent',
    position: 'absolute',
    display: 'none',
    top: '0px',
    right: `${-sidebarWidth - 8}px`,
    width: `${sidebarWidth}px`,
    paddingLeft: '8px',
  },
  subMenu: {
    padding: '4px 0px',
    borderRadius: '4px',
    backgroundColor: '#ffffff',
    boxShadow: `-4px -4px 4px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12)`,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    '& ul': {
      padding: '8px',
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 0',
    '& img': {
      height: '30px',
      width: 'auto',
    },
    '& p': {
      marginLeft: '10px',
      marginBottom: '0px',
      fontSize: '14px',
      lineHeight: '14px',
      color: '#BABFC7',
      fontWeight: 'bold',
    },
  },
}));
