import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import TextInput, { TextInputProps } from "./TextInput";

export default {
  title: "TextInput",
  component: TextInput,
} as Meta<TextInputProps>;

const Template: Story<TextInputProps> = (args) => {
  // Textinput is forwardRef, so we need to use React.useRef
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <TextInput {...args} ref={ref} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  placeholder: "Placeholder",
  label: "Label",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  placeholder: "Placeholder",
};

export const ErrorCase = Template.bind({});

ErrorCase.args = {
  type: "password",
  placeholder: "Placeholder",
  value: "Test Value",
  label: "password",
  error: "Invalid password",
};
