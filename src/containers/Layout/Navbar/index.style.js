import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  container: {
    padding: '12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  menu: {
    transform: 'translateX(10px) translateY(50px)',
  },
  button: {
    color: '#fff',
    fontWeight: 'bold',
  },
  langBtn: {
    color: '#000',
    minWidth: 0,
  },
  langText: {
    fontSize: '14px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContainer: {
    gap: '20px',
    marginRight: '20px',
  },
  balanceBox: {
    marginLeft: '30px',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: '#323232',
    size: '14px',
  },
  titleText: {
    marginRight: '5px',
  },
  valueText: {
    fontWeight: 'bold',
  },
  nameText: {
    fontWeight: 'bold',
  },
  phone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneImage: {
    width: '18px',
    height: '18px',
  },
  avatarBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    position: 'relative',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    position: 'absolute',
    right: 0,
    bottom: 0,
    background: '#28C76F',
    borderRadius: '50%',
    border: '2px solid #fff',
  },
  avatar: {
    width: '40px',
    height: '40px',
  },
  profileText: {
    color: '#6E6B7B',
  },
  badge: {
    color: '#fff',
    backgroundColor: '#EA5455',
    width: '14px',
    height: '18px',
    borderRadius: '50%',
    top: '0px',
    right: '0px',
  },
  account: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemIcon: {
    marginRight: '5px',
    minWidth: 0,
  },
}));
