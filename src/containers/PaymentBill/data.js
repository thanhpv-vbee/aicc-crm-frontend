import { COLOR } from '@src/styles/color';

export const statistics = [
  {
    label: 'totalCall',
    valueName: 'totalCall',
    value: 3500,
    iconName: 'support_agent',
    percentage: '3.85',
    up: true,
    compareTime: 'prevMonth',
    iconBgColor: '#117EEF',
  },
  {
    label: 'totalBlock',
    valueName: 'totalBlock',
    value: 5000,
    iconName: 'dialpad',
    percentage: '3.85',
    up: true,
    compareTime: 'prevMonth',
    iconBgColor: COLOR.success,
  },
  {
    label: 'totalMoney',
    valueName: 'totalMoney',
    value: 2950000,
    iconName: '',
    percentage: '3.85',
    up: true,
    compareTime: 'prevMonth',
    iconBgColor: COLOR.primary,
  },
];
