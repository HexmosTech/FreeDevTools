---
title: "Choco Upgrade - Update Packages on Windows | Online Free DevTools by Hexmos"
name: choco-upgrade
path: /freedevtools/tldr/windows/choco-upgrade
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-upgrade/"
description: "Update packages with Choco Upgrade. Manage package versions and dependencies on Windows, streamlining software maintenance. Free online tool, no registration required."
category: windows
keywords:
- choco upgrade
- chocolatey upgrade
- windows package manager
- choco package update
- chocolatey package update
- windows software upgrade
- choco upgrade all
- chocolatey upgrade all
- windows software manager
- command-line package upgrade
features:
- Upgrade individual or multiple packages.
- Upgrade packages to a specific version.
- Upgrade all installed packages at once.
- Exclude specific packages from being upgraded.
- Automate upgrades with confirmation prompts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# choco upgrade

> Upgrade one or more packages with Chocolatey.
> More information: <https://chocolatey.org/docs/commands-upgrade>.

- Upgrade one or more packages:

`choco upgrade {{package1 package2 ...}}`

- Upgrade to a specific version of a package:

`choco upgrade {{package}} --version {{version}}`

- Upgrade all packages:

`choco upgrade all`

- Upgrade all except specified comma-separated packages:

`choco upgrade all --except "{{package1,package2,...}}"`

- Confirm all prompts automatically:

`choco upgrade {{package}} --yes`

- Specify a custom source to receive packages from:

`choco upgrade {{package}} --source {{source_url|alias}}`

- Provide a username and password for authentication:

`choco upgrade {{package}} --user {{username}} --password {{password}}`
