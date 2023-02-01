import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/components/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 1,
      staleTime: 1000 * 5,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
