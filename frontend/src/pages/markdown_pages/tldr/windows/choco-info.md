---
title: "Chocolatey Info - Display Package Details | Free DevTools"
name: choco-info
path: /freedevtools/tldr/windows/choco-info
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-info/"
description: "Display package details with Chocolatey Info. Get comprehensive information about Chocolatey packages, including dependencies and versions. Free online tool, no registration required."
category: windows
keywords:
- chocolatey package information
- choco package details
- windows package manager
- chocolatey command line
- chocolatey dependencies
- choco info command
- chocolatey package version
- choco package source
- chocolatey authentication
- choco local package
features:
- Display detailed package information
- Show package dependencies
- Specify custom package source
- Authenticate with username and password
- Display local package information only
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# choco info

> Display detailed information about a package with Chocolatey.
> More information: <https://chocolatey.org/docs/commands-info>.

- Display information on a specific package:

`choco info {{package}}`

- Display information for a local package only:

`choco info {{package}} {{[-l|--local-only]}}`

- Specify a custom source to receive packages information from:

`choco info {{package}} {{[-s|--source]}} {{source_url|alias}}`

- Provide a username and password for authentication:

`choco info {{package}} {{[-u|--user]}} {{username}} {{[-p|--password]}} {{password}}`
