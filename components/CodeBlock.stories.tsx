import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import CodeBlock, { CodeBlockProps } from "./CodeBlock";

export default {
  title: "CodeBlock",
  component: CodeBlock,
} as Meta<CodeBlockProps>;

const Template: Story<CodeBlockProps> = (args) => <CodeBlock {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  code: "npm install aptoplay-core",
};
