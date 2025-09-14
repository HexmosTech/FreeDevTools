---
title: "Deborphan - Find Orphan Packages | Free DevTools"
name: deborphan
path: /freedevtools/tldr/linux/deborphan
canonical: "https://hexmos.com/freedevtools/tldr/linux/deborphan/"
description: "Find orphan packages with Deborphan, your Linux package manager cleanup tool. Identify and remove unused dependencies easily. Free online tool, no registration required."
category: linux
keywords:
- Linux orphan packages
- APT package cleanup
- Debian orphan removal
- Orphan library finder
- Unused dependencies
- deborphan command
- APT dependencies
- Linux package manager
- Remove orphan packages
- System cleanup Linux
features:
- Identifies orphan library packages.
- Detects packages suggested but not required.
- Guesses potential library packages.
- Cleans unused package dependencies.
- Simplifies system maintenance.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# deborphan

> Display orphan packages on operating systems using the APT package manager.
> More information: <https://manned.org/deborphan>.

- Display library packages (from the "libs" section of the package repository) which are not required by another package:

`deborphan`

- List orphan packages from the "libs" section as well as orphan packages that have a name that looks like a library name:

`deborphan --guess-all`

- Find packages which are only recommended or suggested (but not required) by another package:

`deborphan {{[-n|--nice-mode]}}`
