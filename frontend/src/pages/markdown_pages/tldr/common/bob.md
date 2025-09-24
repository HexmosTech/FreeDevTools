---
title: "Manage Neovim Versions - Switch Neovim Versions | Online Free DevTools by Hexmos"
name: bob
path: /freedevtools/tldr/common/bob
canonical: "https://hexmos.com/freedevtools/tldr/common/bob/"
description: "Manage Neovim versions easily with Bob. Install, switch, and uninstall different Neovim versions. Free online tool, no registration required."
category: common
keywords:
- neovim version manager
- neovim version switcher
- neovim install manager
- neovim nightly build manager
- neovim stable version
- neovim rollback tool
- neovim version control
- neovim version installer
- bob neovim manager
- neovim commit hash manager
features:
- Install specific versions of Neovim, including nightly, stable, or commit hashes.
- List installed Neovim versions and the currently used version.
- Uninstall specific versions of Neovim.
- Completely remove Neovim and all associated changes.
- Roll back to a previous nightly build of Neovim.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bob

> Manage and switch between Neovim versions.
> More information: <https://github.com/MordechaiHadad/bob>.

- Install and switch to the specified version of Neovim:

`bob use {{nightly|stable|latest|version_string|commit_hash}}`

- List installed and currently used versions of Neovim:

`bob list`

- Uninstall the specified version of Neovim:

`bob uninstall {{nightly|stable|latest|version_string|commit_hash}}`

- Uninstall Neovim and erase any changes `bob` has made:

`bob erase`

- Roll back to a previous nightly version:

`bob rollback`
