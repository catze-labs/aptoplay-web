import Link from "next/link";
import { ComponentProps } from "react";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

interface MenuProps extends ComponentProps<"nav"> {}
const Menu: React.FC<MenuProps> = () => {
  return (
    <nav className="h-[100px] bg-black w-full flex justify-center items-center sticky top-0 z-50">
      <Container className="flex-1 flex justify-between items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div>
          <Button
            variant="secondary"
            className="bg-transparent border-primary-100"
          >
            Login
          </Button>
        </div>
      </Container>
    </nav>
  );
};
export default Menu;
