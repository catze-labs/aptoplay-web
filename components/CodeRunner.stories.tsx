import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import CodeRunner, { CodeRunnerProps } from "./CodeRunner";

export default {
  title: "CodeRunner",
  component: CodeRunner,
} as Meta<CodeRunnerProps>;

const Template: Story<CodeRunnerProps> = (args) => <CodeRunner {...args} />;

export const Json = Template.bind({});

Json.args = {
  title: "Parameter",
  language: "json",
  code: JSON.stringify(
    {
      name: "AptoPlay",
      version: "1.0.0",
      description: "AptoPlay",
    },
    null,
    2
  ),
};

export const Javascript = Template.bind({});

Javascript.args = {
  title: "Javascript",
  language: "javascript",
  code: `const a = 1;\nconst b = 2;\nconst c = a + b;\nconsole.log(c);`,
};
