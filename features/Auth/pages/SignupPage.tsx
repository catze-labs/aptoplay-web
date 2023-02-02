import Container from "@/components/Container";
import { NextPage } from "next";
import Box from "../components/Box";
import SignupForm from "../components/SignupForm";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const SignupPage: NextPage = () => {
  return (
    <Container className="flex justify-center items-center h-screen pt-20">
      <Box>
        <SignupForm />
      </Box>
    </Container>
  );
};

export default SignupPage;
