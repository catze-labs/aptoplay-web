import React from "react";

import { Story, Meta } from "@storybook/react";
import Logo from "./Logo";

export default {
  title: "Logo",
  component: Logo,
} as Meta;

export const Primary: Story = () => <Logo />;

export const Grayscale: Story = () => <Logo className="fill-gray" />;

export const Size: Story = () => <Logo width={500} />;
