import { NextPage } from "next";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const ConfigPage: NextPage = () => {
  return <div>Config Page</div>;
};

export default ConfigPage;
