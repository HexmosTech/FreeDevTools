---
title: "PropelAuth Setup - Manage Authentication | Online Free DevTools by Hexmos"
name: propelauth
path: /freedevtools/tldr/common/propelauth
canonical: "https://hexmos.com/freedevtools/tldr/common/propelauth/"
description: "Setup authentication with PropelAuth to secure your applications. Quickly login, configure projects, and install authentication easily. Free online tool, no registration required."
category: common
keywords:
- PropelAuth authentication
- application authentication
- user management
- API key management
- project configuration
- authentication setup
- propelauth login
- propelauth setup
- propelauth logout
- authentication integration
features:
- Login to PropelAuth using API key.
- Set default PropelAuth project.
- Install PropelAuth in an application.
- Logout of PropelAuth account.
- Quickly integrate authentication in applications.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# propelauth

> Set up PropelAuth authentication as quickly and easily as possible.
> More information: <https://docs.propelauth.com/reference/api/cli>.

- Login to PropelAuth using an API Key generated from <https://auth.propelauth.com/api_keys/personal>:

`propelauth login`

- Set the default PropelAuth Project for the CLI. If no default project is set, the system will prompt for selecting a Project each time certain commands are run:

`propelauth set-default-project`

- Install PropelAuth authentication in an application. If no directory is provided, the current directory is used:

`propelauth setup {{[-f|--framework]}} {{path/to/directory}}`

- Log the CLI out of PropelAuth:

`propelauth logout`
