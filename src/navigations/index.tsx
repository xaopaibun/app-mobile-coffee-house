import { FC, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { values } from 'lodash';
import { useSelector } from 'react-redux';
import { authSelector } from 'containers/Auth/selectors';
import { privateRoutes, publicRoutes, routes } from './routes';

type GuardRouteProps = {
  isLogin: boolean;
  isPrivate: boolean;
  redirectPath: string;
  children: JSX.Element;
};

export const Navigations: FC = () => {
  const { isLogin } = useSelector(authSelector);

  const renderRoute = useCallback(
    (route, isPrivate?: boolean) => {
      if (!route || !values(route)) {
        return undefined;
      }
      return values(route)?.map(({ route: subRoute, element, ...props }) => (
        <Route
          {...props}
          element={
            <GuardRoute
              isLogin={isLogin}
              isPrivate={!!isPrivate}
              redirectPath={isPrivate ? routes.Login.path : '/'}
            >
              {element}
            </GuardRoute>
          }
          children={renderRoute(subRoute)}
        />
      ));
    },
    [isLogin]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {renderRoute(publicRoutes)}
          {renderRoute(privateRoutes, true)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const GuardRoute = ({ children, isLogin, isPrivate, redirectPath }: GuardRouteProps) => {
  const location = useLocation();

  if ((isPrivate && isLogin) || (!isPrivate && !isLogin)) {
    return children;
  }
  return <Navigate to={redirectPath} state={{ from: location }} replace />;
};
