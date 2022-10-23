import { pick, omit } from 'lodash';
import * as Pages from 'pages';

export const routes = {
  Login: {
    path: '/login',
    element: <Pages.LoginPage />,
  },
  Dashboard: {
    path: '/',
    index: true,
    element: <Pages.DashboardPage />,
  },
  CreateProduct: {
    path: '/create-product',
    element: <Pages.CreateProductPage />,
  },
  Category: {
    path: '/category',
    element: <Pages.CategoryPage />,
  },
  Users: {
    path: '/users',
    element: <Pages.UsersPage />,
  },
  UpdateProduct: {
    path: '/update-product/:id',
    element: <Pages.UpdateProductPage />,
  },
  OrderPage: {
    path: '/order',
    element: <Pages.OrderPage />,
  },
  UpdateOrderPage: {
    path: '/order/:id',
    element: <Pages.OrderDetailPage />,
  },
};

export type Routes = typeof routes;

export type RouteKeys = keyof Routes;

const publicKeys: RouteKeys[] = ['Login'];

export const publicRoutes = pick<Routes, RouteKeys>(routes, publicKeys);

export const privateRoutes = omit<Routes, RouteKeys>(routes, publicKeys);
