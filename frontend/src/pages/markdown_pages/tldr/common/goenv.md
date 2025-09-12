---
title: "Goenv Manager - Control Go Versions | Free DevTools"
name: goenv
path: /freedevtools/tldr/common/goenv
canonical: "https://hexmos.com/freedevtools/tldr/common/goenv/"
description: "Control Golang versions with Goenv Manager. Install, uninstall, and switch between Go versions effortlessly. Free online tool, no registration required."
category: common
keywords:
- go version manager
- golang version control
- goenv version management
- goenv install version
- goenv switch version
- goenv global version
- go version list
- go uninstall version
- goenv command line
- golang development environment
features:
- Install specific Golang versions
- Switch between Golang versions locally
- Set a global default Golang version
- List available Golang versions
- Uninstall specific Golang versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# goenv

> Install, uninstall or switch between Golang versions.
> Supports version numbers like "1.16.15" or "1.22.8" etc.
> More information: <https://github.com/go-nv/goenv>.

- List all available goenv commands:

`goenv commands`

- Install a specific version of Golang:

`goenv install {{go_version}}`

- Use a specific version of Golang in the current project:

`goenv local {{go_version}}`

- Set the default Golang version:

`goenv global {{go_version}}`

- List all available Golang versions and highlight the default one:

`goenv versions`

- Uninstall a given Go version:

`goenv uninstall {{go_version}}`

- Run an executable with the selected Go version:

`goenv exec go run {{go_version}}`
