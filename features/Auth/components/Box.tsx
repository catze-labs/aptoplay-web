import clsx from "clsx";
import { ComponentProps } from "react";

const Box: React.FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx([
        "bg-black w-full md:w-[500px] md:min-h-[500px] p-8 md:p-16",
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
