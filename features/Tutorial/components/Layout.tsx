import React, { ComponentProps } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-[100px] py-8">
      <div className="flex flex-col lg:flex-row gap-9 px-5">{children}</div>
    </div>
  );
};

export default Layout;
