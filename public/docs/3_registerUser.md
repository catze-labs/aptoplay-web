# AptoPlay Register User

## Description

`aptoplay-core` provides very easy method for user registration

## Glossaries

N/A

## Pre-Requirements

N/A

## How to use

First of all, You have to receive a email and password of user.  
If you prepared, Let's do it.

```typescript
//...

// Make a Aptoplay Object
const aptoPlay = new AptoPlay('titleId', 'x-secret-key');

// register function
const registerResponse = await aptoPlay.registerUser(
  userEmail,
  password,
  username
);
```

username is optional function parameter.  
If user doesn't specify, will be milliseconds of unix epoch string

## Examples

```typescript
// Your PlayFab Data
const titleId: string = '1Q2W3';
const xSecretKey: string = 'xdi29992mzp0dk38fhs33d984sdc...';

// Make a Aptoplay Object
const aptoPlay = new AptoPlay(titleId, xSecretKey);

const userEmail = 'example@example.com';
const password = 'test_password';
const username = 'username'; // optional
const registerResponse = await aptoPlay.registerUser(
  userEmail,
  password,
  username
);
```

### Parameter

N/A

### Result/Response

```js
{
  "playFabId": "74ECA502B77E6354",
  "sessionTicket": "74ECA502B77E6354-54451EB113976F20-2C98AD47511E5612-5059E-8DB0411E772AE91-5kSovCfu/8q5VzG28bX1dq+gx5t1GaIUZx5I2FxXS0E=",
  "username": "1675227914081",
  "settingsForUser": {
    "needsAttribution": false,
    "gatherDeviceInfo": true,
    "gatherFocusInfo": true
  },
  "entityToken": {
    "entityToken": "NHxIT1o0Wlo2YXpnVkVhZWUvN2NZL2ZKdTJuK3RKN2hneDZ4MGFtMXVCaDQ0PXx7ImkiOiIyMDIzLTAyLTAxVDA1OjA1OjE0LjcwNjQ5NzdaIiwiaWRwIjoiUGxheUZhYiIsImUiOiIyMDIzLTAyLTAyVDA1OjA1OjE0LjcwNjQ5NzdaIiwidGlkIjoiMjczMzc0NTg5YTFhNDQ4NDhkYTMzNGJlNDQ2NmMyMzYiLCJpZGkiOiI3NEVDQTUwMkI3N0U2MzU0IiwiaCI6IkM0OERGQTZEQTgwNDlEOEEiLCJlYyI6InRpdGxlX3BsYXllcl9hY2NvdW50ITU0NDUxRUIxMTM5NzZGMjAvNTA1OUUvNzRFQ0E1MDJCNzdFNjM1NC8yQzk4QUQ0NzUxMUU1NjEyLyIsImVpIjoiMkM5OEFENDc1MTFFNTYxMiIsImV0IjoidGl0bGVfcGxheWVyX2FjY291bnQifQ==",
    "tokenExpiration": "2023-02-02T05:05:14.706Z",
    "entity": {
      "id": "2C98AD47511E5612",
      "type": "title_player_account",
      "typeString": "title_player_account"
    }
  }
}
```
