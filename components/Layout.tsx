import { ComponentProps } from "react";
import Menu from "./Menu";

interface LayoutProps extends ComponentProps<"div"> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Menu />
      <div
        style={{
          minHeight: "calc(100vh - 100px)",
          padding: "20px 0",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
