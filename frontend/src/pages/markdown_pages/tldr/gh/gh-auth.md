---
title: "GitHub Auth - Authenticate GitHub Hosts | Free DevTools"
name: gh-auth
path: /freedevtools/tldr/gh/gh-auth
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-auth/"
description: "Authenticate with GitHub hosts using GitHub Auth. Manage GitHub authentication, tokens, and scopes from the command line. Free online tool, no registration required."
category: common
keywords:
- github authentication
- github cli authentication
- gh auth login
- gh auth status
- gh auth logout
- github token authentication
- github enterprise authentication
- gh auth refresh
- github scopes management
- cli github authentication
features:
- Authenticate with GitHub hosts via interactive prompt
- Authenticate with a GitHub token from stdin
- Check authentication status with a GitHub host
- Log out of a GitHub host
- Refresh authentication credentials with minimal scopes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh auth

> Authenticate with a GitHub host.
> More information: <https://cli.github.com/manual/gh_auth>.

- Log in with interactive prompt:

`gh auth login`

- Log in with a token from `stdin` (created in <https://github.com/settings/tokens>):

`echo {{your_token}} | gh auth login --with-token`

- Check if you are logged in:

`gh auth status`

- Log out:

`gh auth logout`

- Log in with a specific GitHub Enterprise Server:

`gh auth login {{[-h|--hostname]}} {{github.example.com}}`

- Refresh the session to ensure authentication credentials have the correct minimum scopes (removes additional scopes requested previously):

`gh auth refresh`

- Expand the permission scopes:

`gh auth refresh {{[-s|--scopes]}} {{repo,admin:repo_hook,admin:org,admin:public_key,admin:org_hook,...}}`
