---
title: "Choco Install - Package Management on Windows | Free DevTools"
name: choco-install
path: /freedevtools/tldr/windows/choco-install
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-install/"
description: "Package management with Choco Install on Windows. Install, update, and manage software packages efficiently using Chocolatey command line. Free online tool, no registration required."
category: windows
keywords:
- chocolatey package manager
- windows package installer
- choco command line
- choco install windows
- windows software management
- chocolatey package installation
- choco version control
- choco package configuration
- chocolatey source management
- choco authentication
features:
- Install packages from a specified source
- Manage packages using a config file
- Install specific versions of packages
- Automatically confirm all prompts
- Authenticate using username and password
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# choco install

> Install one or more packages with Chocolatey.
> More information: <https://chocolatey.org/docs/commands-install>.

- Install one or more packages:

`choco install {{package1 package2 ...}}`

- Install packages from a custom configuration file:

`choco install {{path\to\packages_file.config}}`

- Install a specific `nuspec` or `nupkg` file:

`choco install {{path\to\file}}`

- Install a specific version of a package:

`choco install {{package}} --version {{version}}`

- Allow installing multiple versions of a package:

`choco install {{package}} --allow-multiple`

- Confirm all prompts automatically:

`choco install {{package}} --yes`

- Specify a custom source to receive packages from:

`choco install {{package}} --source {{source_url|alias}}`

- Provide a username and password for authentication:

`choco install {{package}} --user {{username}} --password {{password}}`
