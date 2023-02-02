/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Container from "@/components/Container";
import { useRouter } from "next/router";

const CompletePage = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
        <h1 className="text-center">
          Hooray! <br />
          You’ve read all the tutorials!
        </h1>
        <img
          className="glow-effect"
          src="/assets/star.png"
          alt="star"
          width={136}
          height={154}
        />
        <p className="text-center">
          We will support more features through periodic updates.
        </p>

        <Button className="w-fit" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default CompletePage;
