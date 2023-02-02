import clsx from "clsx";
import { ComponentProps } from "react";

const Section: React.FC<ComponentProps<"article">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <article
      className={clsx(["pt-[250px] pb-[120px] snap-center", className])}
      {...props}
    >
      {children}
    </article>
  );
};

export default Section;
