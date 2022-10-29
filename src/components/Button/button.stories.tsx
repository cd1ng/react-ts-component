import React from "react";
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button, { ButtonSize, ButtonType } from './button'
import { ButtonShape } from './button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>xxx</Button>
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  btnType: ButtonType.Default,
  disabled: false,
  shape: ButtonShape.Heterogeneous,
};

export const Primary = Template.bind({});
Primary.args = {
  btnType: ButtonType.Primary,
};

export const Danger = Template.bind({});
Danger.args = {
  btnType: ButtonType.Danger,
};

export const Large = Template.bind({});
Large.args = {
  size: ButtonSize.Large,
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSize.Small,
};
