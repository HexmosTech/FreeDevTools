---
title: "Micromamba - Manage Conda Packages | Free DevTools"
name: micromamba
path: /freedevtools/tldr/common/micromamba
canonical: "https://hexmos.com/freedevtools/tldr/common/micromamba/"
description: "Manage Conda packages with Micromamba, a fast and lightweight package manager. Create environments, install packages, and query dependencies efficiently. Free online tool, no registration required."
category: common
keywords:
- conda package manager
- micromamba environment
- python package management
- cross-platform package manager
- linux package manager
- macos package manager
- windows package manager
- dependency management
- environment management
- micromamba create environment
features:
- Create isolated Conda environments
- Install packages from various channels
- List installed packages in an environment
- Search for available Conda packages
- Query package dependencies tree
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# micromamba

> A fast, minimal, standalone package and environment manager for `conda` packages.
> Drop-in replacement for `conda`, ideal for CI, Docker, and lightweight setups.
> More information: <https://manned.org/micromamba>.

- Create a new environment at a specific path, installing named packages into it:

`micromamba create {{[-p|--prefix]}} /{{path/to/env}} {{python=3.11 numpy}}`

- Activate an environment by name or path:

`micromamba activate {{[-p|--prefix]}} /{{path/to/env}}`

- Run a command inside an environment without activating it in the shell:

`micromamba run {{[-p|--prefix]}} /{{path/to/env}} {{pytest tests/}}`

- Install packages into the currently active environment:

`micromamba install {{scipy pandas}}`

- List all installed packages in the current environment:

`micromamba list`

- Search for packages in channels or current environment:

`micromamba search {{package_name}}`

- Query tree-like dependencies of a package:

`micromamba repoquery depends {{[-t|--tree]}} {{package_name}}`

- Show information about the current `micromamba` setup:

`micromamba info`
