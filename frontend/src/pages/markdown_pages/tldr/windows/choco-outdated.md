---
title: "Check Choco Outdated - List Packages | Online Free DevTools by Hexmos"
name: choco-outdated
path: /freedevtools/tldr/windows/choco-outdated
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-outdated/"
description: "Check Choco outdated packages on Windows with Choco Outdated. Identify outdated software, manage package sources, and streamline updates. Free online tool, no registration required."
category: windows
keywords:
- choco outdated packages
- chocolatey outdated packages
- windows package manager
- choco package update
- chocolatey package update
- windows software update
- outdated software list
- choco outdated check
- chocolatey outdated check
- windows package management
features:
- List outdated Chocolatey packages
- Ignore pinned packages
- Specify custom package sources
- Authenticate with username and password
- Display outdated packages in table format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# choco outdated

> Check for outdated packages with Chocolatey.
> More information: <https://chocolatey.org/docs/commands-outdated>.

- Display a list of outdated packages in table format:

`choco outdated`

- Ignore pinned packages in the output:

`choco outdated --ignore-pinned`

- Specify a custom source to check packages from:

`choco outdated --source {{source_url|alias}}`

- Provide a username and password for authentication:

`choco outdated --user {{username}} --password {{password}}`
