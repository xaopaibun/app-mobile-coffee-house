import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './';

export default {
  title: 'Components/Forms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'default';
Primary.args = { name: '', value: '' };
