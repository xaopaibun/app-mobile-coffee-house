---
to: src/components<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/index.stories.tsx
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import <%= h.inflection.camelize(name) %> from './';

export default {
  title: 'Components<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.changeCase.camelCase(name) %>',
  component: <%= h.inflection.camelize(name) %>,
} as ComponentMeta<typeof <%= h.inflection.camelize(name) %>>;

const Template: ComponentStory<typeof <%= h.inflection.camelize(name) %>> = (args) => <<%= h.inflection.camelize(name) %> {...args} />;

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
