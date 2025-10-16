---
title: "Yadm Config - Manage Git Configurations | Online Free DevTools by Hexmos"
name: yadm-config
path: "/freedevtools/tldr/yadm/yadm-config/"
canonical: "https://hexmos.com/freedevtools/tldr/yadm/yadm-config/"
description: "Manage Git configurations with Yadm Config. Set, get, unset, and list Yadm's Git configuration values effortlessly. Free online tool, no registration required."
category: common
keywords:
- yadm configuration management
- git configuration yadm
- yadm config editor
- yadm dotfiles configuration
- linux yadm config
- macos yadm config
- yadm git config editor
- yadm config values
- yadm config list
- yadm config set
features:
- Set Yadm's Git configuration values
- Retrieve values from Yadm's Git configuration
- Remove specific configurations in Yadm
- List all configurations in Yadm
- Update existing Yadm configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yadm config

> Pass options to `yadm`'s config file. Change the `.config` of the repository managed by `yadm`.
> More information: <https://github.com/TheLocehiliosan/yadm/blob/master/yadm.md#configuration>.

- Set or update a `yadm`'s Git configuration:

`yadm config {{key.inner-key}} {{value}}`

- Get a value from `yadm`'s Git configuration:

`yadm config --get {{key}}`

- Unset a value in `yadm`'s Git configuration:

`yadm config --unset {{key}}`

- List all values in `yadm`'s Git configuration:

`yadm config --list`
