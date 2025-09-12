---
title: "NPM Add User - Create Accounts | Free DevTools"
name: npm-adduser
path: /freedevtools/tldr/common/npm-adduser
canonical: "https://hexmos.com/freedevtools/tldr/common/npm-adduser/"
description: "Create NPM user accounts with npm adduser. Manage registry credentials and scope access easily. Free online tool, no registration required."
category: common
keywords:
- npm add user
- npm registry login
- npm account creation
- npm scope management
- node package manager user
- npmrc authentication
- npm credentials
- javascript package registry
- npm profile
- npm user management
features:
- Create new npm user accounts
- Manage credentials in .npmrc file
- Log in to private npm registries with specific scopes
- Log out from specific npm scopes
- Initialize scoped npm packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm adduser

> Add a registry user account.
> More information: <https://docs.npmjs.com/cli/npm-adduser>.

- Create a new user in the specified registry and save credentials to `.npmrc`:

`npm adduser --registry {{registry_url}}`

- Log in to a private registry with a specific scope:

`npm login --scope {{@mycorp}} --registry {{https://registry.mycorp.com}}`

- Log out from a specific scope and remove the auth token:

`npm logout --scope {{@mycorp}}`

- Create a scoped package during initialization:

`npm init --scope {{@foo}} {{[-y|--yes]}}`
