---
title: "Manage Ruby Gems - Package Management | Online Free DevTools by Hexmos"
name: gem
path: /freedevtools/tldr/common/gem
canonical: "https://hexmos.com/freedevtools/tldr/common/gem/"
description: "Manage Ruby gems easily with Gem Package Manager. Install, update, uninstall, and search for gems efficiently. Free online tool, no registration required."
category: common
keywords:
- ruby package manager
- gem install command
- gem uninstall command
- gem update command
- ruby gem search
- gem version management
- gem dependency management
- command line gem tool
- ruby development tool
- gem package dependencies
features:
- Install and update Ruby gems from the command line
- Search for gems and their available versions
- Uninstall gems and specify versions to remove
- List locally installed Ruby gems
- Manage gem dependencies within Ruby projects
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gem

> A package manager for the Ruby programming language.
> More information: <https://guides.rubygems.org/command-reference/>.

- Search for remote gem(s) and show all available versions:

`gem search {{regex}} {{[-a|--all]}}`

- Install the latest version of a gem:

`gem install {{gem_name}}`

- Install a specific version of a gem:

`gem install {{gem_name}} {{[-v|--version]}} {{1.0.0}}`

- Install the latest matching (SemVer) version of a gem:

`gem install {{gem_name}} {{[-v|--version]}} '~> {{1.0}}'`

- Update a gem:

`gem update {{gem_name}}`

- List all local gems:

`gem list`

- Uninstall a gem:

`gem uninstall {{gem_name}}`

- Uninstall a specific version of a gem:

`gem uninstall {{gem_name}} {{[-v|--version]}} {{1.0.0}}`
