import Container from "@/components/Container";
import { NextPage } from "next";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const LandingPage: NextPage = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default LandingPage;
