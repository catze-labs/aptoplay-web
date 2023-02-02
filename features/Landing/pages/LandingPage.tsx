import Container from "@/components/Container";
import { NextPage } from "next";
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
    </div>
  );
};

export default LandingPage;
