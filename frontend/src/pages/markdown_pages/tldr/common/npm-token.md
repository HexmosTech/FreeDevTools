---
title: "Generate npm Tokens - Manage npm Authentication | Free DevTools"
name: npm-token
path: /freedevtools/tldr/common/npm-token
canonical: "https://hexmos.com/freedevtools/tldr/common/npm-token/"
description: "Generate npm tokens for secure package publishing with npm-token. Easily manage authentication, create read-only tokens, and revoke access. Free online tool, no registration required."
category: common
keywords:
- npm token
- npm authentication
- npm registry token
- npm access control
- npm publish token
- npm revoke token
- npm login
- npm configuration
- npmrc file
- node package manager
features:
- Create new npm authentication tokens.
- List all tokens associated with an npm account.
- Delete a specific token using its token ID.
- Create tokens with read-only or publish access.
- Configure npm tokens automatically upon login.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm token

> Manage and generate authentication tokens for the npm registry.
> More information: <https://docs.npmjs.com/cli/npm-token>.

- Create a new authentication token:

`npm token create`

- List all tokens associated with an account:

`npm token list`

- Delete a specific token using its token ID:

`npm token revoke {{token_id}}`

- Create a token with read-only access:

`npm token create --read-only`

- Create a token with publish access:

`npm token create --publish`

- Automatically configure an npm token in your global `.npmrc` file when you log in:

`npm login`

- Remove a token from the global configuration:

`npm token revoke {{token_id}}`
