---
title: "Control Mac App Store - Manage Apps with mas CLI | Online Free DevTools by Hexmos"
name: mas
path: "/freedevtools/tldr/osx/mas/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/mas/"
description: "Manage Mac App Store apps with mas CLI. Install, update, search and list applications directly from the command line. Free online tool, no registration required."
category: osx
keywords:
- mac app store cli
- mas command line
- osx package manager
- macos app installer
- mas install app
- mas upgrade app
- mas search app
- mas list apps
- mas outdated apps
- apple store cli
features:
- Install applications from the Mac App Store using the command line.
- Update installed applications directly from the terminal.
- Search the Mac App Store for applications using keywords.
- List all installed applications and their associated product identifiers.
- Upgrade specific applications using their numeric ID.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mas

> Command-line interface for the Mac App Store.
> More information: <https://github.com/mas-cli/mas>.

- Sign into the Mac App Store for the first time:

`mas signin "{{user@example.com}}"`

- Show all installed applications and their product identifiers:

`mas list`

- Search for an application, displaying the price alongside the results:

`mas search "{{application}}" --price`

- Install or update an application using exact numeric id:

`mas install {{numeric_product_id}}`

- Install the first application that would be returned by the respective search:

`mas lucky "{{search_term}}"`

- List all outdated apps with pending updates:

`mas outdated`

- Install all pending updates:

`mas upgrade`

- Upgrade a specific application:

`mas upgrade "{{numeric_product_id}}"`
