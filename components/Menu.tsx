import { authState } from "@/states/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentProps } from "react";
import { useRecoilState } from "recoil";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

interface MenuProps extends ComponentProps<"nav"> {}
const Menu: React.FC<MenuProps> = () => {
  const router = useRouter();

  const [auth, setAuth] = useRecoilState(authState);

  console.log("auth", auth);

  return (
    <nav className="h-[100px] bg-black w-full flex justify-center items-center fixed top-0 z-50 border-b border-gray">
      <Container className="flex-1 flex justify-between items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div>
          {!auth.sessionTicket ? (
            <Button
              onClick={() => router.push("/login")}
              variant="secondary"
              className="bg-transparent border-primary-100"
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={() => {
                setAuth({ sessionTicket: "" });
              }}
              variant="secondary"
              className="bg-transparent border-primary-100"
            >
              Logout
            </Button>
          )}
        </div>
      </Container>
    </nav>
  );
};
export default Menu;
