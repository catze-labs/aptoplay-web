/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { NextPage } from "next";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const AboutPage: NextPage = () => {
  return (
    <Container className="pt-40">
      <div className="bg-black flex flex-col xl:flex-row justify-center items-center gap-20 p-10 xl:p-0 xl:h-[500px]">
        <img
          src="/assets/about-console.png"
          width={693}
          height={370}
          alt="visual"
        />
        <Logo width={250} />
      </div>

      <section className="mt-28">
        <header className="pb-2.5 border-b text-center">
          <h2 className="text-primary-100">ABOUT</h2>
        </header>
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1 px-6 xl:px-10 pt-20 xl:py-20">
            <article>
              <h3 className="text-primary-100 font-medium mb-10">
                Executive Summary
              </h3>
              <p className="subtitle-big mb-10">
                A brief overview of the project, its goals, and the proposed
                solution.
              </p>

              <p>
                Our project aims to create a seamless and user-friendly
                experience for game studios and developers in the Web3 space. By
                providing tools that prioritize player experience and ease of
                use, as well as integrating with popular game engines and
                allowing for social login, we aim to empower developers to
                create the best possible games. Additionally, we plan to develop
                a fully on-chain gaming backend solution on Aptos as part of our
                roadmap. Overall, our goal is to enable game studios to focus on
                what they do best, creating great games, by removing any
                friction and providing them with the necessary tools.
              </p>
            </article>
          </div>
          <div className="flex-1 px-6 xl:px-10 py-20">
            <article className="mb-20">
              <h3 className="text-primary-100 font-medium mb-10">
                Problem Statement
              </h3>
              <p className="subtitle-big mb-10">
                A clear and detailed explanation of the problem or challenge the
                project aims to solve.
              </p>

              <p className="p-2.5">
                a. Effortless Integration of Blockchain in Gaming
                <br />
                b. Tools to let game developers focus on building the best Web3
                games and create the best user experience for players
              </p>
            </article>

            <article>
              <h3 className="text-primary-100 font-medium mb-10">
                Proposed Solution
              </h3>
              <p className="subtitle-big mb-10">
                A description of the proposed solution, including the technology
                and platform that will be used.
              </p>

              <ol className="text-sm list-decimal flex flex-col gap-1 pl-4">
                <li>Prioritizing Player Experience</li>
                <li>User-friendly Interface</li>
                <li>Created by Developers, for Developers</li>
                <li>
                  Incorporation of Unity/Unreal SDK for Enhanced Flexibility
                </li>
                <li>Compatible with Unity Game Engine</li>
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <header className="pb-2.5 border-b text-center">
          <h2 className="text-primary-100">ROADMAP</h2>
        </header>
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1 px-6 xl:px-10 pt-20 xl:py-20">
            <article>
              <h3 className="text-primary-100 font-medium mb-10">
                Project Roadmap
              </h3>
              <p className="subtitle-big mb-10">
                A timeline of the project&apos;s milestones, including key
                deliverables and deadlines.
              </p>

              <ol className="text-sm list-decimal flex flex-col gap-1 pl-4">
                <li>Seamless onboarding using social logins</li>
                <li>Compatible with Other Popular Game Engines</li>
                <li>Complete On-chain Gaming Backend Solution on Aptos</li>
              </ol>
            </article>
          </div>
          <div className="flex-1 px-6 xl:px-10 py-20">
            <article>
              <h3 className="text-primary-100 font-medium mb-10">Conclusion</h3>
              <p className="subtitle-big mb-10">
                A summary of the project&apos;s key points, as well as any
                additional information or considerations.
              </p>

              <ol className="text-sm list-decimal flex flex-col gap-1 pl-4">
                <li>Streamlining Web3 game creation</li>
                <li>The ultimate toolkit for Web3 game developers</li>
              </ol>
            </article>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutPage;
