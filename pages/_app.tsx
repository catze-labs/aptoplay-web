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

import {
  WalletProvider,
  HippoWalletAdapter,
  AptosWalletAdapter,
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  PontemWalletAdapter,
  SpikaWalletAdapter,
  RiseWalletAdapter,
  FletchWalletAdapter,
  TokenPocketWalletAdapter,
  ONTOWalletAdapter,
  BloctoWalletAdapter,
  SafePalWalletAdapter,
  FoxWalletAdapter,
  CloverWalletAdapter,
  SpacecyWalletAdapter,
} from "@manahippo/aptos-wallet-adapter";

const wallets = [
  new HippoWalletAdapter(),
  new MartianWalletAdapter(),
  new AptosWalletAdapter(),
  new FewchaWalletAdapter(),
  new HippoExtensionWalletAdapter(),
  new PontemWalletAdapter(),
  new SpikaWalletAdapter(),
  new RiseWalletAdapter(),
  new FletchWalletAdapter(),
  new TokenPocketWalletAdapter(),
  new ONTOWalletAdapter(),
  new BloctoWalletAdapter({
    bloctoAppId: "6d85f56e-5f2e-46cd-b5f2-5cf9695b4d46",
  }) /** Must provide bloctoAppId **/,
  new SafePalWalletAdapter(),
  new FoxWalletAdapter(),
  new CloverWalletAdapter(),
  new SpacecyWalletAdapter(),
];

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <WalletProvider
            wallets={wallets}
            autoConnect={false}
            onError={(error: Error) => {
              console.log("Handle Error Message", error);
            }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WalletProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
