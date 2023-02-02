/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import clsx from "clsx";

import Section from "./Section";

const MainVisual = () => {
  const garnishes = [
    {
      srcSet:
        "/assets/garnish/1.png 1x, /assets/garnish/1.png 1x,/assets/garnish/1@2x.png 2x",
      width: 86,
      height: 76,
      alt: "garnish",
      className: "xl:top-[11px] xl:left-[82px]",
    },
    {
      srcSet: "/assets/garnish/2.png 1x, /assets/garnish/2@2x.png 2x",
      width: 52,
      height: 65,
      alt: "garnish",
      className: "xl:top-0 xl:right-[129px]",
    },
    {
      srcSet: "/assets/garnish/3.png 1x, /assets/garnish/3@2x.png 2x",
      width: 74,
      height: 72,
      alt: "garnish",
      className: "top-[54px] right-[43px]",
    },
    {
      srcSet: "/assets/garnish/4.png 1x, /assets/garnish/4@2x.png 2x",
      width: 59,
      height: 57,
      alt: "garnish",
      className: "top-[147px] right-0",
    },
    {
      srcSet: "/assets/garnish/5.png 1x, /assets/garnish/5@2x.png 2x",
      width: 74,
      height: 71,
      alt: "garnish",
      className: "bottom-0 right-[52px]",
    },
    {
      srcSet: "/assets/garnish/6.png 1x, /assets/garnish/6@2x.png 2x",
      width: 70,
      height: 71,
      alt: "garnish",
      className: "left-0 bottom-[34px]",
    },
    {
      srcSet: "/assets/garnish/7.png 1x, /assets/garnish/7@2x.png 2x",
      width: 86,
      height: 77,
      alt: "garnish",
      className: "left-0 bottom-[117px]",
    },
  ];

  return (
    <Section>
      <Container className="min-h-screen flex flex-col xl:flex-row gap-10 xl:gap-0 justify-center items-center">
        <div className="order-2 xl:order-1 w-full xl:w-1/2 px-0 xl:px-10 flex flex-col gap-8">
          <h2 className="text-primary-200">
            Effortless Integration, Seamless Experience in Aptos gaming
            solutions for game builders
          </h2>
          <p className="subtitle-big">
            Tools to help game developers achieve Web3 gaming success and player
            satisfaction
          </p>
        </div>
        <img
          className="block xl:hidden mx-auto"
          src="/assets/garnish/visual-mobile.png"
          width={570 / 2}
          height={340 / 2}
        />
        <figure className="order-1 xl:order-2 hidden xl:block relative w-[300px] h-[179px] xl:w-[570px] xl:h-[340px] flex-0">
          <img
            src="/assets/main-visual.png"
            width={570}
            height={340}
            alt="Aptoplay"
          />
          {garnishes.map(({ className, ...garnish }, index) => (
            <img
              key={index}
              className={clsx(["absolute buoyancy", className])}
              {...garnish}
            />
          ))}
        </figure>
      </Container>
    </Section>
  );
};

export default MainVisual;
