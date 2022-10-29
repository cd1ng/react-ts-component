import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DoughnutChart from "./DoughnutChart"

export default {
  title: "DoughnutChart",
  component: DoughnutChart,
  parameters: {
    layout: 'fullscreen'
  },
} as ComponentMeta<typeof DoughnutChart>

const Template: ComponentStory<typeof DoughnutChart> = (args) => <DoughnutChart {...args} />;

export const Start = Template.bind({});
Start.args = {
  width: 100,
  height: 100,
  progress: 0,
  onlyImage: false
};
