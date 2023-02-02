# AptoPlay Mint NFT to System wallet

## Description

`aptoplay-core` provides minting to system wallet feature.  
This example contain expose private key of wallet.

_Don't expose your real product purpose wallet._

## Pre-Requirements

Aptos Wallet : You should make a Aptos chain wallet use `Martian` or `Petra` chrome extension.

## How to use

```typescript
//...

// Make a Aptoplay Object
const aptoPlay = new AptoPlay(
  "TitleID",
  "X-SECRET-KEY",
  "https://fullnode.devnet.aptoslabs.com",
  "https://faucet.devnet.aptoslabs.com",
  {
    // mint is alias for contract information
    mint: {
      contractAddress:
        "4dbc8cfc475dc06b9620be957efa1a95a39aee29be03e78b83d4b601153a0ba2",
      contractModuleName: "create_nft",
      contractFunctionName: "mint_event_ticket",
    },
  },
  {
    address: "0xSystem-wallet-address",
    publicKeyHex: "publicKeyHex",
    privateKeyHex: "privateKeyHex",
  }
);

// OR

// Make a Aptoplay Object
// If you not specify a Aptos node url and faucet url, environment default 'Devnet'
const aptoPlay = new AptoPlay("TitleID", "X-SECRET-KEY");

// set Smart Contract information
aptoPlay.setAliasSmartContractInfoObject({
  // mint is alias for contract information
  mint: {
    contractAddress:
      "4dbc8cfc475dc06b9620be957efa1a95a39aee29be03e78b83d4b601153a0ba2",
    contractModuleName: "create_nft",
    contractFunctionName: "mint_event_ticket",
  },
});

// Set System Account
aptoPlay.setAptosSystemAccountObject({
  address: "0xSystem-wallet-address",
  publicKeyHex: "publicKeyHex",
  privateKeyHex: "privateKeyHex",
});

// specify your minting function alias
// mint is alias for contract information
const transactionHash = await aptoPlay.mintToSystemWallet("mint");
```

## Examples

```typescript
// Your PlayFab Data
const titleId: string = "1Q2W3";
const xSecretKey: string = "xdi29992mzp0dk38fhs33d984sdc...";

// Make a Aptoplay Object
const aptoPlay = new AptoPlay(
  titleId,
  xSecretKey,
  "https://fullnode.devnet.aptoslabs.com",
  "https://faucet.devnet.aptoslabs.com",
  {
    // mint is alias for contract information
    mint: {
      contractAddress:
        "4dbc8cfc475dc06b9620be957efa1a95a39aee29be03e78b83d4b601153a0ba2",
      contractModuleName: "create_nft",
      contractFunctionName: "mint_event_ticket",
    },
  },
  {
    address:
      "0xf8410557a9a96eb57729d8eea3ca442cbb810a0f999d7a7bf5cf3dfb42c8d667",
    publicKeyHex: "0xPublicKeyHex", // You can check wallet extension
    privateKeyHex: "0xPrivateKeyHex", // You can check wallet extension
  }
);

const transactionHash = await aptoPlay.mintToSystemWallet("mint");
// 0xf7d71ddbf9032d9bc91ca7e1868f86fa4cc6d3a590d17b3a0f90641ba9f4c4dc
```

### Result/Response

`mintToSystemWallet` function only return transaction hash string.  
For example, Backend server will be return `additionalData`
