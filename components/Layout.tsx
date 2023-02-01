import { ComponentProps } from "react";
import Menu from "./Menu";

interface LayoutProps extends ComponentProps<"div"> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Menu />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
