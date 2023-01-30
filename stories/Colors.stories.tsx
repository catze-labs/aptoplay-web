// Basic story : typo, colors

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

export default {
  title: "Colors",
} as Meta;

const ColorBox: React.FC<ComponentProps<"div">> = ({ className, ...props }) => (
  <div className="flex gap-4 items-center">
    <div
      className={`w-12 h-12 border border-white ${className}`}
      {...props}
    ></div>
    <p>{className}</p>
  </div>
);

export const Colors: Story = () => (
  <div className="flex gap-12 items-start">
    <div className="flex flex-col gap-2">
      <ColorBox className="bg-primary-100" />
      <ColorBox className="bg-primary-200" />
      <ColorBox className="bg-primary-300" />
      <ColorBox className="bg-primary-400" />
    </div>
    <div className="flex flex-col gap-2">
      <ColorBox className="bg-black" />
      <ColorBox className="bg-gray" />
      <ColorBox className="bg-gray-dark" />
    </div>
    <div className="flex flex-col gap-2">
      <ColorBox className="bg-red" />
      <ColorBox className="bg-yellow-400" />
      <ColorBox className="bg-green-400" />
      <ColorBox className="bg-blue-400" />
    </div>
  </div>
);
