---
title: "Choco List - Manage Chocolatey Packages | Online Free DevTools by Hexmos"
name: choco-list
path: /freedevtools/tldr/windows/choco-list
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-list/"
description: "Manage Chocolatey packages easily with Choco List. Display, filter, and authenticate package listings from custom sources. Free online tool, no registration required."
category: windows
keywords:
- chocolatey package manager
- windows package listing
- choco list command
- chocolatey list packages
- chocolatey source management
- chocolatey authentication
- windows package management
- command line package manager
- chocolatey windows
- display chocolatey packages
features:
- List all available Chocolatey packages
- Filter installed packages locally
- Include local programs in the listing
- Display only approved packages
- Specify custom package sources
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# choco list

> Display a list of packages with Chocolatey.
> More information: <https://chocolatey.org/docs/commands-list>.

- Display all available packages:

`choco list`

- Display all locally installed packages:

`choco list --local-only`

- Display a list including local programs:

`choco list {{[-i|--include-programs]}}`

- Display only approved packages:

`choco list --approved-only`

- Specify a custom source to display packages from:

`choco list {{[-s|--source]}} {{source_url|alias}}`

- Provide a username and password for authentication:

`choco list --user {{username}} --password {{password}}`
