import { NextPage } from "next";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const LandingPage: NextPage = () => {
  return <div>Landing Page</div>;
};

export default LandingPage;
