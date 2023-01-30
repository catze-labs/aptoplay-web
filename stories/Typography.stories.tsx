// Basic story : typo, colors

import React from "react";

import { Story, Meta } from "@storybook/react";

export default {
  title: "Typography",
} as Meta;

const codeExample = JSON.stringify(
  {
    name: "storybook",
    version: "6.0.0-alpha.37",
    description: "Storybook",
    main: "lib/index.js",
    types: "lib/index.d.ts",
    scripts: {
      build: "node ./scripts/build.js",
      "build:watch": "node ./scripts/build.js --watch",
      "build:release": "node ./scripts/build.js --release",
    },
  },
  null,
  2
);

export const Typography: Story = () => (
  <div className="flex flex-col gap-2">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <p className="subtitle-big">Subtitle Big</p>
    <p className="subtitle">Subtitle Regular</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
      nec ultricies tincidunt, nisl nisl aliquet nisl, nec aliquet nisl nisl sit
      amet nisl. Sed euismod, nisl nec ultricies tincidunt, nisl nisl aliquet
      nisl, nec aliquet nisl nisl sit amet nisl.
    </p>
    <p>
      Code snippet: <code>npm install @storybook/react</code>
    </p>
    <pre>{codeExample}</pre>
  </div>
);
