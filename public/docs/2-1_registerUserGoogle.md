# AptoPlay Register User By Google Account

## Description

`aptoplay-core` provides very easy method for user registration using Google OAuth

## Glossaries

`accessToken` : Access tokens are opaque tokens that conform to the OAuth 2.0 framework. They contain authorization information, but not identity information. They are used to authenticate and provide authorization information to Google APIs.

More Information Google OAuth2.0, See [here](https://developers.google.com/identity/protocols/oauth2?hl=ko)

## Pre-Requirements

- Google OAuth Client (Visit [here](https://developers.google.com/identity/protocols/oauth2?hl=ko))

## How to use

First of all, You have to receive a `access_token` from google oauth by user.  
If you prepared, Let's do it.

```typescript
//...

// Make a Aptoplay Object
const aptoPlay = new AptoPlay('titleId', 'x-secret-key');

// register function with accessToken
const registerResponse = await aptoPlay.registerWithGoogleAccount(accessToken);
```

## Examples

```typescript
// Make a Aptoplay Object
const aptoPlay = new AptoPlay(titleId, xSecretKey);

const accessToken = '4/k32dkckksi2uif03kacnjsd03kdk...';
const registerResponse = await aptoPlay.registerWithGoogleAccount(accessToken);
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
