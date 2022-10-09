import { pick, omit } from 'lodash';
import * as Pages from 'pages';

export const routes = {
  Login: {
    path: 'login',
    element: <Pages.LoginPage />,
  },
  Dashboard: {
    index: true,
    element: <Pages.DashboardPage />,
    route: {},
  },
};

export type Routes = typeof routes;

export type RouteKeys = keyof Routes;

const publicKeys: RouteKeys[] = ['Login'];

export const publicRoutes = pick<Routes, RouteKeys>(routes, publicKeys);

export const privateRoutes = omit<Routes, RouteKeys>(routes, publicKeys);
