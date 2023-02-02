import React, { ComponentProps } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screwen py-10 w-full">
      <div className="flex flex-col lg:flex-row gap-9 px-5 w-full justify-center items-start">
        {children}
      </div>
    </div>
  );
};

export default Layout;
