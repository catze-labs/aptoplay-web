import React from "react";

import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";

export default {
  title: "Button",
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => (
  <div className="w-1/4">
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  children: "Ghost",
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "icon",
  icon: <ClipboardDocumentIcon className="w-5" />,
  style: {
    width: "2rem",
    height: "2rem",
  },
};
