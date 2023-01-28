import { GetServerSideProps, NextPage } from "next";
import TestHeader from "@/features/test/components/TestHeader";
import Counter from "@/features/test/components/Counter";
import { useCatFact } from "@/requests/cat";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSignMessage } from "wagmi";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const HelloPage: NextPage = () => {
  const { data: catfact, isLoading } = useCatFact();

  const { signMessage } = useSignMessage({
    message: "Hello World",
    onSuccess: (result) => {
      console.log(result);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
      <ConnectButton />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold"
        onClick={() => signMessage()}
      >
        Sign Messages
      </button>
      <div className="w-64 flex flex-col gap-4">
        <TestHeader />
        {isLoading && <p>Loading...</p>}
        {!isLoading && catfact && <p>{catfact.fact}</p>}
        <Counter />
      </div>
    </div>
  );
};

export default HelloPage;
