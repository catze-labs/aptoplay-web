import clsx from "clsx";
import { ComponentProps } from "react";

const Container: React.FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(["px-5 max-w-[1200px] mx-auto", className])}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
