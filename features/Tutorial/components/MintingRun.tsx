import CodeRunner from "@/components/CodeRunner";
import WalletConnect from "@/features/Wallet/components/WalletConnect";
import client from "@/requests/client";
import { authState } from "@/states/auth";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const MintingRun = () => {
  const { account } = useWallet();
  const auth = useRecoilValue(authState);

  const [mintResult, setMintResult] = useState<any>(null);

  const mint = async () => {
    try {
      const result = await client.post("/nft/mint-to-system", {
        sessionTicket: auth.sessionTicket,
      });
      setMintResult(result);
    } catch (error) {
      setMintResult(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <WalletConnect />
      <div>
        <CodeRunner
          title="Parameter"
          code={`aptoPlay.mintToSystemWallet(\n  "mint"\n)`}
          language="javascript"
          runnable={account ? true : false}
          onRun={() => {
            mint();
          }}
        />
        {mintResult && auth.sessionTicket && (
          <CodeRunner
            title="Result"
            code={JSON.stringify(mintResult, null, 2)}
            language="json"
            runnable={false}
          />
        )}
      </div>
    </div>
  );
};

export default MintingRun;
