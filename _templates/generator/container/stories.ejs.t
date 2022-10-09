---
to: src/containers<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/index.stories.tsx
---
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InitialState } from './slice';
import <%= h.inflection.camelize(name) %> from './';

export default {
  title: 'Containers<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>',
  component: <%= h.inflection.camelize(name) %>,
} as ComponentMeta<typeof <%= h.inflection.camelize(name) %>>;

const initialState: InitialState = {};
const store = configureStore([])({ <%= h.changeCase.camel(name) %>: initialState });

const Template: ComponentStory<typeof <%= h.inflection.camelize(name) %>> = (args) => (
  <Provider store={store}>
    <<%= h.inflection.camelize(name) %> {...args} />
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
