/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import CodeBlock from "@/components/CodeBlock";
import Container from "@/components/Container";
import clsx from "clsx";
import { useRouter } from "next/router";

import Section from "./Section";

const HowToSection = () => {
  const router = useRouter();

  return (
    <Section>
      <Container className="min-h-screen flex flex-col justify-center items-center">
        <div className=" w-full flex flex-col gap-5 items-center pb-10 border-b">
          <h2 className="text-primary-200">
            Try App-To-Play powered by AptoPlay
          </h2>
          <p className="subtitle-big">How to play AptoPlay demo</p>
          <p>NOTICE : Sign-up must be necessary before playing demo.</p>
          <div className="flex justify-center gap-10 pt-5">
            <Button className="w-fit" onClick={() => router.push("/login")}>
              Login
            </Button>
            <Button className="w-fit" onClick={() => router.push("/signup")}>
              Sign up
            </Button>
          </div>
        </div>
        <div className="p-2.5 flex justify-center xl:justify-between xl:w-full gap-5 mt-10 flex-wrap xl:flex-nowrap w-[320px]">
          <div className="xl:flex-1 w-full flex flex-col p-5 bg-gray rounded gap-5">
            <img
              className="mx-auto"
              src="/assets/howto/step1.png"
              alt="step1"
              width={240}
              height={140}
            />
            <h3 className="subtitle">Download</h3>
            <p className="min-h-[58px]">You can download Game Demo below:</p>
            <div className="flex gap-2">
              <Button
                as="a"
                href="https://nyc3.digitaloceanspaces.com/aptoplay/build/mac/aptoplay-unity-build-mac.zip"
              >
                Mac
              </Button>
              <Button
                as="a"
                href="https://nyc3.digitaloceanspaces.com/aptoplay/build/win/aptoplay-unity-build-win.zip"
              >
                Window
              </Button>
            </div>
          </div>
          <div className="xl:flex-1 w-fit flex flex-col p-5 bg-gray rounded gap-5">
            <img
              className="mx-auto"
              src="/assets/howto/step2.png"
              alt="step2"
              width={240}
              height={140}
            />
            <h3 className="subtitle">Access</h3>
            <p className="min-h-[58px]">
              Please sign up before trying demo.Our demo requires registered
              account stored in game backend.
            </p>
            <Button onClick={() => router.push("/signup")}>Sign up</Button>
          </div>
          <div className="xl:flex-1 w-fit flex flex-col p-5 bg-gray rounded gap-5">
            <img
              className="mx-auto"
              src="/assets/howto/step3.png"
              alt="step3"
              width={240}
              height={140}
            />
            <h3 className="subtitle">Hunt</h3>
            <p className="min-h-[58px]">
              You can hunt monster in this game demo. Your kill count will be
              saved in game backend automatically.
            </p>
          </div>
          <div className="xl:flex-1 w-fit flex flex-col p-5 bg-gray rounded gap-5">
            <img
              className="mx-auto"
              src="/assets/howto/step4.png"
              alt="step4"
              width={240}
              height={140}
            />
            <h3 className="subtitle">Finish Tutorial</h3>
            <p className="min-h-[58px] tracking-tight">
              Try tutorial after playing game demo. You can mint your game data
              to APTOS ecosystem through AptoPlay.
            </p>
            <Button onClick={() => router.push("/tutorial")}>
              Try tutorial
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HowToSection;
