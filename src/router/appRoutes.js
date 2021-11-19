import HomePage from '@src/pages/Home';
import LoginPage from '@src/pages/';
import DashboardPage from '@src/pages/Dashboard';
import ScriptPage from '@src/pages/Script';
import CampaignPage from '@src/pages/Campaign';
import PaymentPage from '@src/pages/Payment';
import PricePage from '@src/pages/Price';
import CreateScriptPage from '@src/pages/CreateScript';
import ROUTES from '@src/constants/route';

export default [
  {
    path: ROUTES.LOGIN,
    component: LoginPage,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: ROUTES.HOME,
    component: HomePage,
    exact: true,
    restricted: true,
    isPrivate: true,
  },
  {
    path: ROUTES.DASHBOARD,
    component: DashboardPage,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: ROUTES.SCRIPT,
    component: ScriptPage,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: ROUTES.CAMPAIGN,
    component: CampaignPage,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: ROUTES.BILL,
    component: ScriptPage,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: ROUTES.PRICE,
    component: PricePage,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: ROUTES.PAYMENT,
    component: PaymentPage,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: ROUTES.CREATE_SCRIPT,
    component: CreateScriptPage,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
];
