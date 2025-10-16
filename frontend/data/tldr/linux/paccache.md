---
title: "Paccache - Clean Pacman Cache | Online Free DevTools by Hexmos"
name: paccache
path: "/freedevtools/tldr/linux/paccache/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/paccache/"
description: "Clean Pacman package cache with Paccache. Remove old package versions, set retention limits, and perform dry runs for safe cleaning. Free online tool, no registration required."
category: linux
keywords:
- linux package cache cleaning
- pacman cache management
- paccache cleanup tool
- arch linux maintenance
- package version control
- command line cache cleaner
- linux disk space recovery
- paccache dry run
- package archive removal
- system maintenance linux
features:
- Remove outdated package versions
- Specify the number of package versions to keep
- Perform dry runs to preview changes
- Move packages to a specified directory
- Automate pacman cache maintenance
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# paccache

> A `pacman` cache cleaning utility.
> More information: <https://manned.org/paccache>.

- Remove all but the 3 most recent package versions from the `pacman` cache:

`paccache {{[-r|--remove]}}`

- Set the number of package versions to keep:

`paccache {{[-rk|--remove --keep]}} {{num_versions}}`

- Perform a dry-run and show the number of candidate packages for deletion:

`paccache {{[-d|--dryrun]}}`

- Move candidate packages to a directory instead of deleting them:

`paccache {{[-m|--move]}} {{path/to/directory}}`
