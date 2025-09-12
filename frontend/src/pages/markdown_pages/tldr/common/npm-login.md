---
title: "NPM Login - Manage User Accounts | Free DevTools"
name: npm-login
path: /freedevtools/tldr/common/npm-login
canonical: "https://hexmos.com/freedevtools/tldr/common/npm-login/"
description: "Manage NPM user accounts with NPM Login. Authenticate to registries and securely store credentials. Free online tool, no registration required."
category: common
keywords:
- npm login
- npm registry login
- node package manager login
- javascript package login
- npm authentication
- npm credentials management
- npm login command line
- npm login online
- npm user account
- npm security
features:
- Authenticate to NPM registries.
- Securely store credentials in the .npmrc file.
- Log in using a custom registry URL.
- Support legacy and web authentication strategies.
- Manage user accounts via the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm login

> Log in to a registry user account.
> See also: `npm logout` for logging out.
> More information: <https://docs.npmjs.com/cli/npm-login>.

- Log in to a registry user account and save the credentials to the `.npmrc` file:

`npm login`

- Log in using a custom registry:

`npm login --registry {{registry_url}}`

- Log in using a specific authentication strategy:

`npm login --auth-type {{legacy|web}}`
