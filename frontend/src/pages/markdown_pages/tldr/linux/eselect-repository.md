---
title: "Manage Gentoo Repositories - Control Portage with eselect | Online Free DevTools by Hexmos"
name: eselect-repository
path: /freedevtools/tldr/linux/eselect-repository
canonical: "https://hexmos.com/freedevtools/tldr/linux/eselect-repository/"
description: "Control Gentoo Portage ebuild repositories with eselect repository.  Manage, enable, disable, and remove repositories easily. Free online tool, no registration required."
category: linux
keywords:
  - Gentoo repository management
  - Portage repository control
  - eselect repository commands
  - Linux package management
  - ebuild repository configuration
  - Gentoo ebuild repository
  - manage Gentoo packages
  - eselect repository list
  - enable Gentoo repository
  - disable Gentoo repository
features:
  - List all registered and enabled ebuild repositories.
  - Enable and disable ebuild repositories by name or index.
  - Add new unregistered repositories using various protocols (rsync, git, etc.).
  - Remove repositories, optionally deleting their contents.
  - Create and enable local ebuild repositories.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eselect repository

> An `eselect` module for configuring ebuild repositories for Portage.
> After enabling a repository, you have to run `emerge --sync repo_name` to download ebuilds.
> More information: <https://wiki.gentoo.org/wiki/Eselect/Repository>.

- List all ebuild repositories registered on <https://repos.gentoo.org>:

`eselect repository list`

- List enabled repositories:

`eselect repository list -i`

- Enable a repository from the list by its name or index from the `list` command:

`eselect repository enable {{name|index}}`

- Enable an unregistered repository:

`eselect repository add {{name}} {{rsync|git|mercurial|svn|...}} {{sync_uri}}`

- Disable repositories without removing their contents:

`eselect repository disable {{repo1 repo2 ...}}`

- Disable repositories and remove their contents:

`eselect repository remove {{repo1 repo2 ...}}`

- Create a local repository and enable it:

`eselect repository create {{name}} {{path/to/repo}}`
