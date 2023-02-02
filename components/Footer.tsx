import { useRouter } from "next/router";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-black w-full h-[320px] xl:h-[400px] flex flex-col">
      <Container className="pt-20 pb-20 h-full w-full flex flex-col justify-between">
        <div>
          <Logo width={250} />
          <div className="flex flex-wrap gap-4 xl:gap-10 pt-10 pb-10 xl:pb-0">
            <Button
              onClick={() => router.push("/tutorial/1")}
              variant="secondary"
              className="w-fit bg-black"
            >
              Tutorial
            </Button>
            <Button
              onClick={() => router.push("/about")}
              variant="secondary"
              className="w-fit bg-black"
            >
              What is APTOPLAY?
            </Button>
            <Button
              onClick={() => router.push("/login")}
              variant="secondary"
              className="w-fit bg-black"
            >
              Login
            </Button>
            <Button
              onClick={() => router.push("/signup")}
              variant="secondary"
              className="w-fit bg-black"
            >
              Sign up
            </Button>
          </div>
        </div>
        <p className="text-right">© 2023 APTOPLAY. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
