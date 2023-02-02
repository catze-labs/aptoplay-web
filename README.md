![image](https://user-images.githubusercontent.com/65929678/216216243-440bcb5c-5052-4946-9cad-47a98842e363.png)

[Aptos Seoul Hack 2023](https://aptosfoundation.org/events/seoul-hack-2023) Buidl

# APTOPLAY Tutorial Web

> Effortless Integration, Seamless Experience in Aptos gaming solutions for game builders

The problem we aim to solve is the effortless integration of blockchain technology into gaming. Game developers are often unable
to take full advantage of the benefits that blockchain technology offers due to the complex and unfriendly solutions that currently exist.
This has resulted in a barrier for many game developers and has limited the potential for Web3 games. Additionally, the tools
that currently exist for game developers are often lacking and do not provide a user-friendly experience.

```bash
$ npm install aptoplay-core

# OR

$ yarn add aptoplay-core
```

This website is a demo that provides tutorials and information about the aptoplay-core library used by Aptoplay. Through this demo, users can learn about the following:

- Installation and configuration of aptoplay
- Interaction with Playfab
- Use cases through interaction with the Aptos chain.

The goal of this website is to provide a better developer experience (DX) for the integration of Aptos-Gaming, and more features will be added through ongoing updates.

If you encounter any bugs or areas that need improvement, please [create an issue](https://github.com/catze-labs/aptoplay-web/issues/new). We will do our best to assist with your issue reporting.

## Storybook

[Link](https://63d783134ad22887d603e62b-ygwrfdhsui.chromatic.com/)

storybook that collects components used in the tutorial of APTOPLAY Web.

## Website Structure

- Landing Page: The demo of Aptoplay provides example games. You can download the game in the final section.
- About Page: A page that provides more information about Aptoplay.
- Tutorial Page: A page that provides tutorials for the aptoplay-core library we provide.

## Libraries used in this demo

- React18
- Next.js : 12.3.1
- Tailwind.css (with `clsx`)
- Recoil
- Axios
- React-Query v3
- Stroybook

## Structures in this demo

Feature based file system with concerns of serverless paradigm.

```bash
src/
├─ styles/  # tailwind style, global styles...
├─ public/  # index.html, favicons, metadata for SEO...
│   ├─ assets/ # images, ...
│   └─ meta/ # metadatas
├─ states/ # global states handled by recoil
├─ components/ # common components
├─ [feature name]/ # feature
│   ├─ components/ # component only used in feature
│   ├─ utils/ # utils only used in feature
│   ├─ hooks/ # hooks only used in feature
│   └─ pages/ # pages for routing
├─ pages/ # routing & API
│   └─ api/ # export from src/api
│   └─ [feature name routers...]
├─ requests/ # API call with axios & Server state driven by React-Query
├─ types/ # collection of types d.ts
└─ api/ # Next.js Serverless API directory
   └─ [domain name]/ # /api/[domain_name]
      ├─ dao.ts # If using prisma, define dao
      ├─ services.ts # logics, process entity...
      └─ controllers.ts # Controller
```
