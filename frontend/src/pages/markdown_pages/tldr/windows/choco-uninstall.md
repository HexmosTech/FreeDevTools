---
title: "Choco Uninstall - Remove Packages with Chocolatey | Online Free DevTools by Hexmos"
name: choco-uninstall
path: /freedevtools/tldr/windows/choco-uninstall
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-uninstall/"
description: "Uninstall packages instantly with Choco Uninstall. Remove single, multiple or all packages quickly with Chocolatey command line tool. Free online tool, no registration required."
category: windows
keywords:
- Chocolatey package uninstaller
- Windows package removal
- Choco uninstall command
- Chocolatey uninstall tool
- Package manager uninstaller
- Chocolatey command line
- Windows software removal
- Chocolatey uninstall specific version
- Chocolatey remove dependencies
- Choco uninstall all
features:
- Uninstall single or multiple Chocolatey packages
- Remove specific versions of installed packages
- Automatically confirm uninstall prompts
- Remove all dependencies during uninstallation
- Uninstall all packages managed by Chocolatey
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# choco uninstall

> Uninstall packages with Chocolatey.
> More information: <https://chocolatey.org/docs/commands-uninstall>.

- Uninstall one or more packages:

`choco uninstall {{package1 package2 ...}}`

- Uninstall a specific version of a package:

`choco uninstall {{package}} --version {{version}}`

- Confirm all prompts automatically:

`choco uninstall {{package}} --yes`

- Remove all dependencies when uninstalling:

`choco uninstall {{package}} --remove-dependencies`

- Uninstall all packages:

`choco uninstall all`
