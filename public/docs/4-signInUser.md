# AptoPlay User Sign In

## Description

`aptoplay-core` provides login method for email/password user.

## How to use

```typescript
//...

// Make an Aptoplay Object
const aptoPlay = new AptoPlay("titleId", "x-secret-key");

// register function
const registerResponse = await aptoPlay.login(userEmail, password);
```

## Examples

```typescript
// Your PlayFab Data
const titleId: string = "1Q2W3";
const xSecretKey: string = "xdi29992mzp0dk38fhs33d984sdc...";

// Make a Aptoplay Object
const aptoPlay = new AptoPlay(titleId, xSecretKey);

const userEmail = "example@example.com";
const password = "test_password";
const registerResponse = await aptoPlay.registerUser(userEmail, password);
```
