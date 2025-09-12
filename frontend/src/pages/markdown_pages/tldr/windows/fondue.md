---
title: "Fondue - Install Windows Features | Free DevTools"
name: fondue
path: /freedevtools/tldr/windows/fondue
canonical: "https://hexmos.com/freedevtools/tldr/windows/fondue/"
description: "Install Windows features quickly with Fondue. Enable specific optional components and customize your system. Free online tool, no registration required."
category: windows
keywords:
- windows feature installer
- windows optional feature
- fondue windows command
- windows package manager
- windows component installer
- windows feature enable
- command line feature installer
- windows server feature
- windows deployment tools
- windows administration tools
features:
- Enable specific Windows features
- Hide output messages during installation
- Specify a caller process for error reporting
- Customize Windows installations
- Install optional Windows components
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fondue

> Install optional Windows features.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/fondue>.

- Enable a specific Windows feature:

`fondue /enable-feature:{{feature}}`

- Hide all output messages to the user:

`fondue /enable-feature:{{feature}} /hide-ux:all`

- Specify a caller process name for error reporting:

`fondue /enable-feature:{{feature}} /caller-name:{{name}}`
