# AptoPlay User Sign In

## Description

`aptoplay-core` provides login method for email/password user.

## Glossaries

N/A

## Pre-Requirements

N/A

## How to use

```typescript
//...

// Make a Aptoplay Object
const aptoPlay = new AptoPlay('titleId', 'x-secret-key');

// register function
const registerResponse = await aptoPlay.login(userEmail, password);
```

## Examples

```typescript
// Your PlayFab Data
const titleId: string = '1Q2W3';
const xSecretKey: string = 'xdi29992mzp0dk38fhs33d984sdc...';

// Make a Aptoplay Object
const aptoPlay = new AptoPlay(titleId, xSecretKey);

const userEmail = 'example@example.com';
const password = 'test_password';
const registerResponse = await aptoPlay.registerUser(userEmail, password);
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
