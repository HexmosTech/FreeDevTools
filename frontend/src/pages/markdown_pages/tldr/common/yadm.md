---
title: "Manage Dotfiles - Control Configurations with yadm | Free DevTools"
name: yadm
path: /freedevtools/tldr/common/yadm
canonical: "https://hexmos.com/freedevtools/tldr/common/yadm/"
description: "Control dotfiles with yadm, a git-backed configuration manager. Easily track, version, and deploy your system settings across multiple machines. Free online tool, no registration required."
category: common
keywords:
- dotfiles manager
- configuration management
- version control
- git dotfiles
- linux configuration
- macos dotfiles
- cross platform dotfiles
- yadm configuration
- dotfile backup
- dotfile deployment
features:
- Manage dotfiles using a git repository.
- Override default yadm directory locations.
- Automate dotfile deployment across multiple machines.
- Track changes and revert to previous configurations.
- Encrypt sensitive information within dotfiles.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# yadm

> A dotfiles manager that works by using `git`.
> Some subcommands such as `init`, `clone`, `push`, and `pull` have their own usage documentation.
> More information: <https://yadm.io/docs/overview>.

- Override the `yadm` directory. `yadm` stores its configurations relative to this directory:

`yadm --yadm-dir`

- Override the `yadm` data directory: `yadm` stores its data relative to this directory:

`yadm --yadm-data`

- Override the location of the `yadm` repository:

`yadm --yadm-repo`

- Override the location of the `yadm` configuration file:

`yadm --yadm-config`

- Override the location of the `yadm` encryption configuration:

`yadm --yadm-encrypt`

- Override the location of the `yadm` encrypted files archive:

`yadm --yadm-archive`

- Override the location of the `yadm` bootstrap program:

`yadm --yadm-bootstrap`
