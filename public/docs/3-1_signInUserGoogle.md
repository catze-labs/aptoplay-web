# AptoPlay Sign-in User By Google Account

## Description

`aptoplay-core` provides very easy method for user login using Google OAuth

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

// login function with accessToken
const loginResponse = await aptoPlay.loginWithGoogleAccount(accessToken);
```

## Examples

```typescript
// Make a Aptoplay Object
const aptoPlay = new AptoPlay(titleId, xSecretKey);

const accessToken = '4/k32dkckksi2uif03kacnjsd03kdk...';
const loginResponse = await aptoPlay.loginWithGoogleAccount(accessToken);
```

### Parameter

N/A

### Result/Response

```js
{
  "sessionTicket": "E25A3C084C9108E-54451EB113976F20-8889B16454D70C18-5059E-8DB0407169CF364-LTei9ij7UsVCQHk/F5HGNgW+J+1XaAsfym1sL3/PsBg=",
  "playFabId": "E25A3C084C9108E",
  "newlyCreated": false,
  "settingsForUser": {
    "needsAttribution": false,
    "gatherDeviceInfo": true,
    "gatherFocusInfo": true
  },
  "lastLoginTime": "2023-02-01T03:13:04.337Z",
  "entityToken": {
    "entityToken": "NHxIdVFUckNRN1pXYUFlNUZwUElVVGpWd1pWbUxWNjgwYWk5RjVqQXFWMk80PXx7ImkiOiIyMDIzLTAyLTAxVDAzOjQ3OjQ5LjM3MjQwMDRaIiwiaWRwIjoiUGxheUZhYiIsImUiOiIyMDIzLTAyLTAyVDAzOjQ3OjQ5LjM3MjQwMDRaIiwidGlkIjoiYzlmODUyZDgzNzMwNGQ5MmI4NjFiZWQwNjNlMWVkZGMiLCJpZGkiOiJFMjVBM0MwODRDOTEwOEUiLCJoIjoiQzQ4REZBNkRBODA0OUQ4QSIsImVjIjoidGl0bGVfcGxheWVyX2FjY291bnQhNTQ0NTFFQjExMzk3NkYyMC81MDU5RS9FMjVBM0MwODRDOTEwOEUvODg4OUIxNjQ1NEQ3MEMxOC8iLCJlaSI6Ijg4ODlCMTY0NTRENzBDMTgiLCJldCI6InRpdGxlX3BsYXllcl9hY2NvdW50In0=",
    "tokenExpiration": "2023-02-02T03:47:49.372Z",
    "entity": {
      "id": "8889B16454D70C18",
      "type": "title_player_account",
      "typeString": "title_player_account"
    }
  },
  "treatmentAssignment": {
    "variants": {},
    "variables": {}
  }
}
```
