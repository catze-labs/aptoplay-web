# next-tailwind-recoil-template

This is for template repository for using below.

## 1. Library

- React18
- Next.js : 12.3.1
- Tailwind.css (with `clsx`)
- Recoil
- Axios
- React-Query v3
- Stroybook

## 2. Structures

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

## 3. Types

Global type for window (For using web3 third-party method; Such as Klaytn, Metamask, etc)

## 4. Etc

- [herosicon](https://heroicons.com/) : useful icons
