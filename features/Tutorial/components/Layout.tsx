import React, { ComponentProps } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screwen py-10 w-full">
      <div className="flex flex-col md:flex-row gap-9 px-5 w-full justify-center items-start py-8 mt-[100px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
