# AptoPlay Validate User Session Ticket

## Description

`aptoplay-core` provides user session Ticket validation method

## Glossaries

`sessionTicket` : Kind of access code when user login/register to PlayFab title.

## Pre-Requirements

N/A

## How to use

```typescript
//...

// Make a Aptoplay Object
const aptoPlay = new AptoPlay('titleId', 'x-secret-key');

// register function
const registerResponse = await aptoPlay.validateAndGetPlayFabIdBySessionTicket(
  'sessionTicket-here'
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

// Call validate method
const userPlayFabId = await aptoPlay.validateAndGetPlayFabIdBySessionTicket(
  userSessionTicket
); // E25A3C084C9108E (Test account)
```

### Parameter

N/A

### Result/Response

If session ticket is valid, user's PlayFab ID will be return.  
(above example, method will be return `E25A3C084C9108E`)
