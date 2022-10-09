import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InitialState } from './slice';
import DashboardPage from './';

export default {
  title: 'Pages/Dashboard',
  component: DashboardPage,
} as ComponentMeta<typeof DashboardPage>;

const initialState: InitialState = {};
const store = configureStore([])({ dashboard: initialState });

const Template: ComponentStory<typeof DashboardPage> = (args) => (
  <Provider store={store}>
    <DashboardPage {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.storyName = 'default';
Primary.args = {};
// https://storybook.js.org/addons/storybook-addon-mock
// Primary.parameters = {
//   mockData: [
//     {
//       url: 'https://jsonplaceholder.typicode.com/todos/1',
//       method: 'GET',
//       status: 200,
//       response: {
//         data: 'Hello storybook-addon-mock!',
//       },
//     },
//   ],
// };
