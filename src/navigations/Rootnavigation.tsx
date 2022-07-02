import React from 'react';
import {useSelector} from 'react-redux';
import {authSelectors} from 'containers/App/selector';
import PrivateNavigation from './PrivateNavigation';
import PublicNavigation from './PublicNavigation';

const RootNavigation = () => {
  const auth = useSelector(authSelectors);
  if (auth.isLogin) {
    return <PrivateNavigation />;
  }
  return <PublicNavigation />;
};

export default RootNavigation;
