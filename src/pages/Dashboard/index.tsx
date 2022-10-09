import { FC } from 'react';
// import { useAppDispatch } from 'hooks';
import { useSelector } from 'react-redux';
import { dashboardSelector } from './selectors';

import DashboardStyled from './styles';

const Dashboard: FC = () => {
  // const dispatch = useAppDispatch();
  const dashboard = useSelector(dashboardSelector);
  console.log(dashboard);
  return <DashboardStyled>code here</DashboardStyled>;
};

export default Dashboard;
