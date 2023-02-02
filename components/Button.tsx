import clsx from "clsx";
import React, { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> &
  ComponentProps<"a"> & {
    variant?: "primary" | "secondary" | "ghost" | "icon";
    icon?: React.ReactNode;
    as?: "button" | "a";
    className?: string;
  };

const Button: React.FC<ButtonProps> = ({
  as = "button",
  variant = "primary",
  icon,
  className,
  children,
  ...props
}) =>
  React.createElement(
    as,
    {
      className: clsx([
        "flex items-center justify-center w-full cursor-pointer ",
        variant === "primary" &&
          `bg-primary-300 px-5 py-2.5 text-white hover:bg-primary-200`,
        variant === "secondary" &&
          `bg-transparent px-5 py-2.5 border border-white text-primary-400 hover:border-primary-200 hover:text-primary-200`,
        variant === "ghost" &&
          `bg-transparent px-5 py-2.5 text-white hover:bg-[rgba(255,255,255,0.1)] hover:text-primary-200`,
        variant === "icon" &&
          `bg-transparent p-1.5 aspect-square hover:bg-[rgba(255,255,255,0.1)] text-primary-100`,
        "disabled:cursor-not-allowed disabled:bg-gray",
        className,
      ]),
      ...props,
    },
    icon,
    <span className="text-sm leading-tight">{children}</span>
  );

export default Button;
