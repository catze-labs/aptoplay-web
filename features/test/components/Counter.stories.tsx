import { Story, Meta } from "@storybook/react";
import Counter from "./Counter";

export default {
  title: "Test/Counter",
  component: Counter,
} as Meta;

const Template: Story = (args) => (
  <div className="w-64">
    <Counter {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {};
