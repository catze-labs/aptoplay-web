# AptoPlay Get Game Statistics For NFT Metadata - I

## Description

`aptoplay-core` provides you a Game statistics for use to NFT Metadata

## Glossaries

`statisticNames` : Statistic Names on you specify in game. See Details [here](https://learn.microsoft.com/en-us/gaming/playfab/features/data/playerdata/using-player-statistics)  
`sessionTicket` : Kind of access token when user login/register to PlayFab title.

## Pre-Requirements

Game Statistics Data : Your unity game should be provide a user(player) statistics to PlayFab. [here](https://learn.microsoft.com/en-us/gaming/playfab/features/data/playerdata/using-player-statistics) is a detail document.

## How to use

```typescript
//...

// Make a Aptoplay Object
const aptoPlay = new AptoPlay('titleId', 'x-secret-key');

// Using statistic names
const gameData = await aptoPlay.getGameStatisticsByStatisticNamesForNFTMetadata(
  'sessionTicket-here',
  ["Your statistic name here", ...]
);
```

## Examples

```typescript
// Your PlayFab Data
const titleId: string = '1Q2W3';
const xSecretKey: string = 'xdi29992mzp0dk38fhs33d984sdc...';

// Make a Aptoplay Object
const aptoPlay = new AptoPlay(titleId, xSecretKey);

// Received User's sessionTicket
const userSessionTicket =
  'E25A3C084C9108E-54451EB113976F20-8889B16454D70C18-5059E-8DB043499A05B39-UAGtR87fTAYmpZy2C0MUieqTPm7ngJcNUDgZH7b0pHE=';

// Statistic Names
const usingStatisticNames = ['killMonsterCount'];

// Call method
const gameData = await aptoPlay.getGameStatisticsByStatisticNamesForNFTMetadata(
  userSessionTicket
  usingStatisticNames,
);
```

### Parameter

N/A

### Result/Response

```json

```
