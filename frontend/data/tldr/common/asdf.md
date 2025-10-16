---
title: "Manage Package Versions - Control with asdf | Online Free DevTools by Hexmos"
name: asdf
path: "/freedevtools/tldr/common/asdf/"
canonical: "https://hexmos.com/freedevtools/tldr/common/asdf/"
description: "Manage package versions easily with asdf. Install, update, and switch between different versions of programming languages and tools. Free online tool, no registration required."
category: common
keywords:
- asdf version manager
- manage package versions
- language version control
- asdf plugin management
- install specific versions
- asdf current version
- asdf set version
- asdf install package
- asdf list versions
- asdf version control
features:
- Install specific package versions
- Set global and local package versions
- List available plugins
- Show current package version
- Manage multiple language versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# asdf

> Manage versions of different packages.
> More information: <https://asdf-vm.com/manage/commands.html>.

- List all available plugins:

`asdf plugin list all`

- Install a plugin:

`asdf plugin add {{name}}`

- List all available versions for a package:

`asdf list all {{name}}`

- Install a specific version of a package:

`asdf install {{name}} {{version}}`

- Set global version for a package:

`asdf set -u {{name}} {{version}}`

- Set local version for a package:

`asdf set {{name}} {{version}}`

- See the current version used for a package:

`asdf current {{name}}`
