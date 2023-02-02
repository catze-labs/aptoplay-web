import Container from "@/components/Container";
import { NextPage } from "next";
import LibrarySection from "../components/LibrarySection";
import MainVisual from "../components/MainVisual";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const LandingPage: NextPage = () => {
  return (
    <div>
      <MainVisual />
      <LibrarySection />
    </div>
  );
};

export default LandingPage;
