import React from "react";
import { Story, Meta } from "@storybook/react";

import Phase, { PhaseProps } from "./Phase";

export default {
  title: "Phase",
  component: Phase,
} as Meta<PhaseProps>;

const Template: Story<PhaseProps> = (args) => <Phase {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPhase: 0,
  phases: [
    {
      name: "Phase 1",
    },
    {
      name: "Phase 2",
    },
    {
      name: "Phase 3",
    },
  ],
};
