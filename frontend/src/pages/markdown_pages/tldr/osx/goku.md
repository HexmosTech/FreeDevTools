---
title: "Generate Karabiner Config - Goku | Online Free DevTools by Hexmos"
name: goku
path: /freedevtools/tldr/osx/goku
canonical: "https://hexmos.com/freedevtools/tldr/osx/goku/"
description: "Generate Karabiner configurations with Goku. Customize keyboard mappings and streamline input behavior using a simple command-line interface. Free online tool, no registration required."
category: osx
keywords:
  - karabiner configuration generator
  - keyboard mapping command-line
  - goku configuration manager
  - karabiner.json creator
  - macos keyboard customization
  - keyboard remapping tool
  - edn to karabiner converter
  - goku command-line utility
  - karabiner config editor
  - keyboard layout manager
features:
  - Generate Karabiner configurations from EDN files
  - Customize keyboard mappings with command-line options
  - Dry-run configurations to preview changes
  - Validate configuration files before applying
  - Output configurations to standard output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# goku

> Manage Karabiner configuration.
> More information: <https://github.com/yqrashawn/GokuRakuJoudo>.

- Generate `karabiner.json` using the default configuration:

`goku`

- Generate `karabiner.json` using the specific `config.edn` file:

`goku --config {{path/to/config.edn}}`

- Dry run the new configuration into `stdout` instead of updating `karabiner.json`:

`goku --dry-run`

- Dry run the whole configuration into `stdout` instead of updating `karabiner.json`:

`goku --dry-run-all`

- Display help:

`goku --help`

- Display version:

`goku --version`
