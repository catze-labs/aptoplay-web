import Container from "@/components/Container";
import { NextPage } from "next";
import Box from "../components/Box";
import LoginForm from "../components/LoginForm";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const LoginPage: NextPage = () => {
  return (
    <Container className="flex justify-center items-center h-screen">
      <Box>
        <LoginForm />
      </Box>
    </Container>
  );
};
export default LoginPage;
