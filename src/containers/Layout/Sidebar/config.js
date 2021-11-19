/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Icon } from '@material-ui/core';
import ROUTES from '@src/constants/route';

export const sidebarMenu = [
  {
    key: 'VirtualAgent',
    heading: 'autoCall',
    icon: <Icon>support_agent</Icon>,
    role: ['user'],
    subMenu: [
      {
        key: 'Campaign',
        heading: 'campaign',
        route: ROUTES.CAMPAIGN,
        role: ['user'],
      },
      {
        key: 'Script',
        heading: 'patternScript',
        route: ROUTES.CREATE_SCRIPT,
        role: ['user'],
      },
    ],
  },
  {
    key: 'Api',
    heading: 'api',
    icon: <Icon>api</Icon>,
    role: ['user'],
    subMenu: [],
  },
  {
    key: 'Payment',
    heading: 'payment',
    icon: <Icon>payments</Icon>,
    role: ['user'],
    subMenu: [
      {
        key: 'Payment',
        heading: 'recharge',
        route: ROUTES.PAYMENT,
        role: ['user'],
      },
      {
        key: 'Price',
        heading: 'quotation',
        route: ROUTES.PRICE,
        role: ['user'],
      },
      {
        key: 'Bill',
        heading: 'bill',
        route: ROUTES.BILL,
        role: ['user'],
      },
    ],
  },
];
