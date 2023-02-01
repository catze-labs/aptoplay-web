# AptoPlay Library Configuration

## Description

`aptoplay-core` provides very easy method for your gaming development.  
Let's try it :)

## Glossaries

`titleId` : Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected.

`x-secret-key` : This API requires a title secret key, available to title admins, from PlayFab Game Manager. Kind of API access token

More Information about PlayFab, See [here](https://learn.microsoft.com/en-us/gaming/playfab/)

## Pre-Requirements

- PlayFab Title
- PlayFab TitleId
- PlayFab Title X-SECRET-KEY

## How to use

```typescript
//...

// Make a Aptoplay Object
const aptoPlay = new AptoPlay('titleId', 'x-secret-key');

// Confirm your AptoPlay Object returned correctly.
console.log(aptoPlay.getTitleId()); // Your Title Id will be returned
console.log(aptoPlay.getXSecretKey()); // Your X-SECRET-KEY will be returned
```

## Examples

```typescript
// Your PlayFab Data
const titleId: string = '1Q2W3';
const xSecretKey: string = 'xdi29992mzp0dk38fhs33d984sdc...';

// Make a Aptoplay Object
const aptoPlay = new AptoPlay(titleId, xSecretKey);

// confirm
console.log(aptoPlay.getTitleId());
console.log(aptoPlay.getXSecretKey());
```

### Parameter

- titleId : Your PlayFab Title ID
- xSecretKey : Your PlayFab Title X-SECRET-KEY

### Result/Response

N/A
