import { NextPage } from "next";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const AboutPage: NextPage = () => {
  return <div>About Page</div>;
};

export default AboutPage;
