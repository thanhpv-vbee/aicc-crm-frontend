import { makeStyles } from '@material-ui/core';
import { COLOR } from '@src/styles/color';

export default makeStyles((theme) => ({
  analystItem: {
    padding: '12px 12px 12px 25px',
    background: '#fff',
    boxShadow: '0px 0px 32px rgba(136, 152, 170, 0.15)',
    borderRadius: theme.shape.borderRadius,
  },
  analystLabel: {
    color: '#8898AA',
    fontWeight: '500',
  },
  analystValue: {
    color: '#32325D',
    fontSize: '22px',
    fontWeight: '500',
  },
  upColor: {
    color: '#28C76F',
  },
  downColor: {
    color: 'red',
  },
  compareTime: {
    color: '#525F7F',
  },
  iconBox: {
    background: (props) => props.bgColor,
    color: COLOR.white,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    fontSize: '14px',
  },
  icon: {
    fontSize: '22px',
  },
}));
