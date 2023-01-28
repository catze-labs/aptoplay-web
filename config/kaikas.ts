import { Chain, Wallet } from "@rainbow-me/rainbowkit";

import { KaikasConnector as Kaikas } from "kaikas-connector";
import { Connector, ConnectorData } from "wagmi";
import { isAddress } from "ethers/lib/utils.js";
import Caver from "caver-js";

export interface KaikasWalletOptions {
  chains: Chain[];
}

export const kaikasWallet = ({ chains }: KaikasWalletOptions): Wallet => {
  return {
    id: "kaikas",
    name: "Kaikas",
    iconUrl:
      "https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2F3237190568-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FzvgdDSwmwvJE7FLb6FCc%252Ficon%252FzKemLV4grODY1vlxlTrU%252Fsymbol_multi_solid.png%3Falt%3Dmedia%26token%3D53643768-91b6-41cb-8a9f-52d6b1194550",
    iconBackground: "transparent",
    downloadUrls: {
      browserExtension:
        "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi",
      android:
        "https://play.google.com/store/apps/details?id=io.klutch.wallet&hl=en_US&gl=US",
      ios: "https://apps.apple.com/app/id1626107061",
    },
    installed: true,
    createConnector: () => {
      const connector = new KaikasConnector({
        chains,
        options: {},
      });
      return {
        connector: connector as Connector,
      };
    },
  };
};

const kaikas = new Kaikas({
  supportedChainIds: [
    8217, // cypress
    1001, // baobab
  ],
});

class KaikasConnector extends Connector {
  id: string = "kaikas";
  name: string = "Kaikas";
  ready: boolean = true;

  async connect(
    config?: { chainId?: number | undefined } | undefined
  ): Promise<Required<ConnectorData>> {
    const { account, provider } = await kaikas.activate();
    const chainId = await kaikas.getChainId();

    if (!account) throw new Error("No account found");
    if (!isAddress(account)) throw new Error("Invalid address");

    if (config?.chainId && config?.chainId !== Number(chainId))
      throw new Error("Invalid chainId");

    return {
      account,
      chain: {
        id: Number(chainId),
        unsupported: false,
      },
      provider,
    };
  }
  async disconnect(): Promise<void> {
    kaikas.deactivate();
  }
  async getAccount(): Promise<`0x${string}`> {
    const account = await kaikas.getAccount();

    if (!account) throw new Error("No account found");
    if (!isAddress(account)) throw new Error("Invalid address");

    return account;
  }
  async getChainId(): Promise<number> {
    const chainId = await kaikas.getChainId();
    if (!chainId) throw new Error("No chainId found");
    return Number(chainId);
  }
  async getProvider(
    config?: { chainId?: number | undefined } | undefined
  ): Promise<any> {
    const provider = await kaikas.getProvider();
    return provider;
  }
  async getSigner(
    config?: { chainId?: number | undefined } | undefined
  ): Promise<any> {
    /**
     * @link https://github.com/wagmi-dev/wagmi/blob/main/packages/react/src/hooks/accounts/useSignMessage.ts
     */
    return {
      signMessage: async (message: string) => {
        const caver = new Caver(window.klaytn);
        const account = await this.getAccount();
        return caver.klay.sign(message, account);
      },
    };
  }
  isAuthorized(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  protected onAccountsChanged(accounts: `0x${string}`[]): void {
    throw new Error("Method not implemented.");
  }
  protected onChainChanged(chain: string | number): void {
    throw new Error("Method not implemented.");
  }
  protected onDisconnect(error: Error): void {
    throw new Error("Method not implemented.");
  }
}
