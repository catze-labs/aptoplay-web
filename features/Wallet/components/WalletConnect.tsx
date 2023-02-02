import {
  useWallet,
  AptosWalletName,
  MartianWalletName,
  SignMessageResponse,
  RiseWalletName,
} from "@manahippo/aptos-wallet-adapter";

import Button from "@/components/Button";
import CodeBlock from "@/components/CodeBlock";
import { AptosClient, FaucetClient } from "aptos";
import { useState } from "react";

const WalletConnect = () => {
  const { connect, disconnect, connected, account, signMessage } = useWallet();
  const [signResult, setSignResult] =
    useState<SignMessageResponse | string | null>(null);

  const [fundResult, setFundResult] = useState<any>(null);

  const aptosClient = new AptosClient("https://fullnode.devnet.aptoslabs.com");
  const faucetClient = new FaucetClient(
    "https://fullnode.devnet.aptoslabs.com",
    "https://faucet.devnet.aptoslabs.com"
  );

  const handleDisconnect = () => {
    disconnect();
    setSignResult(null);
    setFundResult(null);
  };

  const sign = async (message: string, nonce: string) => {
    const result = await signMessage({
      message,
      nonce,
    });

    setSignResult(result);
  };

  const fund = async () => {
    try {
      const result = await faucetClient.fundAccount(
        String(account?.address),
        100_000_000
      );
      setFundResult(result);
    } catch (error) {
      setFundResult(error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {!connected && (
        <>
          <Button variant="secondary" onClick={() => connect(AptosWalletName)}>
            Connect Petra Wallet
          </Button>

          <Button
            variant="secondary"
            onClick={() => connect(MartianWalletName)}
          >
            Connect Martian Wallet
          </Button>
          <Button variant="secondary" onClick={() => connect(RiseWalletName)}>
            Connect Rise Wallet
          </Button>
        </>
      )}

      {account && connected && (
        <Button variant="secondary" onClick={handleDisconnect}>
          Disconnect
        </Button>
      )}

      {account && connected && (
        <div className="w-full">
          <CodeBlock title="Account" code={JSON.stringify(account, null, 2)} />
        </div>
      )}

      {account && connected && (
        <Button
          variant="secondary"
          onClick={() => sign("APTOPLAY SIGN MESSAGE", "APTOPLAY NONCE")}
        >
          Sign Message
        </Button>
      )}

      {account && signResult && (
        <div className="w-full">
          <CodeBlock
            title="Sign Message"
            code={JSON.stringify(signResult, null, 2)}
          />
        </div>
      )}

      {connected && signResult && (
        <Button
          variant="secondary"
          onClick={() => fund()}
          className="tracking-wide"
        >
          Faucet Fund <small>(Optional)</small>
        </Button>
      )}

      {connected && fundResult && (
        <div className="w-full">
          <CodeBlock
            title="Faucet Fund"
            code={JSON.stringify(fundResult, null, 2)}
          />
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
