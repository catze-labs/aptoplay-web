import Button from "@/components/Button";
import CodeBlock from "@/components/CodeBlock";
import Container from "@/components/Container";
import clsx from "clsx";
import { useRouter } from "next/router";

import Section from "./Section";

const LibrarySection = () => {
  const router = useRouter();

  return (
    <Section>
      <Container className="min-h-screen flex flex-col justify-center items-center gap-[50px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-primary-200 text-left xl:text-center">
            AptoPlay offers a user-friendly interface, <br />
            created by developers for developers
          </h1>
          <p className="subtitle-big text-left xl:text-center">
            We provide Our library through NPM. <br />
            Join your project into the Aptos ecosystem using this following
            command line:
          </p>
          <div className="flex flex-col w-full max-w-[370px] mx-auto mt-8 xl:mt-0 gap-2">
            <CodeBlock code={"$ npm install aptoplay-core"} />
            <CodeBlock code={"$ yarn add aptoplay-core"} />
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <Button
            variant="primary"
            className="w-fit"
            onClick={() => router.push("/tutorial")}
          >
            Tutorial
          </Button>
          <Button
            variant="primary"
            className="bg-black text-white w-fit"
            onClick={() => router.push("/about")}
          >
            What os <span className="text-primary-200">APTOPLAY?</span>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default LibrarySection;
