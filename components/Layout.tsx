import { ComponentProps } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

interface LayoutProps extends ComponentProps<"div"> {
  snap?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ snap, children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Menu />
      <div
        className={snap ? "snap-y snap-mandatory" : ""}
        style={{
          minHeight: "100vh",
          padding: "20px 0",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
