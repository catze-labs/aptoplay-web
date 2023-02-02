# AptoPlay Get Game Statistics For NFT Metadata - II

## Description

`aptoplay-core` provides you a Game statistics for use to NFT Metadata

## Glossaries

`statisticVersions` Statistic Name and Version number pair array.
`sessionTicket` : Kind of access token when user login/register to PlayFab title.

## Pre-Requirements

Game Statistics Data : Your unity game should be provide a user(player) statistics to PlayFab. [here](https://learn.microsoft.com/en-us/gaming/playfab/features/data/playerdata/using-player-statistics) is a detail document.

## How to use

```typescript
//...

// Make a Aptoplay Object
const aptoPlay = new AptoPlay('titleId', 'x-secret-key');

// Using statistic Versions
const gameData =
  await aptoPlay.getGameStatisticsByStatisticVersionsForNFTMetadata(
    'sessionTicket-here',
    [{ statisticName: 'Your statistic name here', version: versionNumber }]
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

const statisticVersions = [
  {
    statisticNames: 'killMonsterCount',
    version: 0
  }
];

const gameData = getGameStatisticsByStatisticVersionsForNFTMetadata(
  userSessionTicket,
  statisticVersions
);
```

### Parameter

N/A

### Result/Response

```json

```
