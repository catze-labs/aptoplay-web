import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { NextPage } from "next";
import HowToSection from "../components/HowToSection";
import LibrarySection from "../components/LibrarySection";
import MainVisual from "../components/MainVisual";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const LandingPage: NextPage = () => {
  return (
    <>
      <MainVisual />
      <LibrarySection />
      <HowToSection />
    </>
  );
};

export default LandingPage;
