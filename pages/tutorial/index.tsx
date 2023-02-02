// redirect to the first tutorial page ./1

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/tutorial/1",
      permanent: false,
    },
  };
}

export default function Tutorial() {
  return <div />;
}
