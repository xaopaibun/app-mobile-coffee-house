import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginPage from './';

export default {
  title: 'Pages/Login',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const store = configureStore([])({ auth: {} });

const Template: ComponentStory<typeof LoginPage> = (args) => (
  <Provider store={store}>
    <LoginPage {...args} />
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
