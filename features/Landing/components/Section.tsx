import clsx from "clsx";
import { ComponentProps } from "react";

const Section: React.FC<ComponentProps<"article">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <article className={clsx(["min-h-screen", className])} {...props}>
      {children}
    </article>
  );
};

export default Section;
