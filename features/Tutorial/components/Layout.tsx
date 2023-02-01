import React, { ComponentProps } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-content">
      <div className="flex flex-col lg:flex-row gap-9">{children}</div>
    </div>
  );
};

export default Layout;
