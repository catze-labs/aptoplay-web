import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import DocumentBox, { DocumentBoxProps } from "./DocumentBox";

export default {
  title: "DocumentBox",
  component: DocumentBox,
} as Meta<DocumentBoxProps>;

const Template: Story<DocumentBoxProps> = (args) => <DocumentBox {...args} />;

const markdown = `
# Hello, world!
## This is a markdown document
### This is a subheading

This is a paragraph with some \`inline code\`.


### List

- Item 1
  + Item 1-1
  + Item 1-2
- Item 2
- Item 3

1. Item 1
2. Item 2
3. Item 3

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | \`Text\` |

### Code block

\`\`\`js
const foo = 'bar';

// This is a comment
function baz() {
  return foo;
}
\`\`\`

### Link

[Visit GitHub!](https://github.com)

### Image

![Image of Logo](https://user-images.githubusercontent.com/65929678/215364977-77d5725b-6786-48e2-ad2d-a3f64135da4f.png)  
`;

export const Default = Template.bind({});

Default.args = {
  style: { width: "100%", maxWidth: "600px" },
  children: markdown,
};
