---
title: "YADM Gitconfig - Control Repository Config | Free DevTools"
name: yadm-gitconfig
path: /freedevtools/tldr/common/yadm-gitconfig
canonical: "https://hexmos.com/freedevtools/tldr/common/yadm-gitconfig/"
description: "Control repository configurations with YADM Gitconfig. Manage local Git configurations within YADM managed repositories using command-line interface. Free online tool, no registration required."
category: common
keywords:
- yadm gitconfig manager
- git configuration editor
- repository config control
- yadm dotfiles management
- linux git configuration
- macos git configuration
- command line gitconfig
- dotfile repository management
- git config value setter
- git config value unsetter
features:
- Update Git configuration values
- Get values from YADM's Git config
- Unset values in YADM's Git config
- List all values in YADM's Git configuration
- Manage .gitconfig within YADM repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# yadm gitconfig

> Pass options to `git config`. Change the `.gitconfig` of the repository managed by `yadm`.
> See also: `git config`.
> More information: <https://github.com/TheLocehiliosan/yadm/blob/master/yadm.md#commands>.

- Update or set a Git configuration value:

`yadm gitconfig {{key.inner-key}} {{value}}`

- Get a value from `yadm`'s Git configuration:

`yadm gitconfig --get {{key}}`

- Unset a value in `yadm`'s Git configuration:

`yadm gitconfig --unset {{key}}`

- List all values in `yadm`'s Git configuration:

`yadm gitconfig --list`
