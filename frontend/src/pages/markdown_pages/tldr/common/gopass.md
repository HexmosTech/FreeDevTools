---
title: "Gopass Password Manager - Securely Manage Passwords | Free DevTools"
name: gopass
path: /freedevtools/tldr/common/gopass
canonical: "https://hexmos.com/freedevtools/tldr/common/gopass/"
description: "Securely manage passwords with Gopass Password Manager. Create, store, and sync passwords with this Unix password manager. Free online tool, no registration required."
category: common
keywords:
- password manager
- gopass password manager
- unix password manager
- command line password manager
- password storage
- password sync
- password generator
- password management
- gopass cli
- gopass
features:
- Initialize configuration settings for gopass
- Create new password entries easily
- Mount shared Git password stores
- Synchronize password stores across devices
- Display password entries from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gopass

> Standard Unix Password Manager for Teams. Written in Go.
> More information: <https://www.gopass.pw>.

- Initialize the configuration settings:

`gopass init`

- Create a new entry:

`gopass new`

- Show all stores:

`gopass mounts`

- Mount a shared Git store:

`gopass mounts add {{store_name}} {{git_repo_url}}`

- Search interactively using a keyword:

`gopass show {{keyword}}`

- Search using a keyword:

`gopass find {{keyword}}`

- Sync all mounted stores:

`gopass sync`

- Show a particular password entry:

`gopass {{store_name|path/to/directory|email@email.com}}`
