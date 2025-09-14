---
title: "Manage Packages with Mamba - Fast Conda Replacement | Free DevTools"
name: mamba
path: /freedevtools/tldr/common/mamba
canonical: "https://hexmos.com/freedevtools/tldr/common/mamba/"
description: "Manage packages efficiently with Mamba, a fast Conda alternative for environment management. Install, update, and search packages with ease. Free online tool, no registration required."
category: common
keywords:
- package manager
- conda replacement
- mamba install
- mamba update
- mamba create environment
- cross platform package manager
- environment manager
- dependency management
- python package management
- scientific computing
features:
- Create isolated environments for different projects.
- Install packages from various channels, including conda-forge.
- Update all packages in an environment to the latest versions.
- Search for specific packages in repositories.
- Clean up unused packages and tarballs from the cache.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mamba

> Fast, cross-platform package manager, intended as a drop-in replacement for conda.
> Some subcommands such as `repoquery` have their own usage documentation.
> More information: <https://mamba.readthedocs.io/en/latest/user_guide/mamba.html>.

- Create a new environment, installing the specified packages into it:

`mamba create {{[-n|--name]}} {{environment_name}} {{python=3.10 matplotlib}}`

- Install packages into the current environment, specifying the package channel:

`mamba install {{[-c|--channel]}} {{conda-forge}} {{python=3.6 numpy}}`

- Update all packages in the current environment:

`mamba update --all`

- Search for a specific package across repositories:

`mamba repoquery search {{numpy}}`

- List all environments:

`mamba info --envs`

- Remove unused [p]ackages and [t]arballs from the cache:

`mamba clean -pt`

- Activate an environment:

`mamba activate {{environment_name}}`

- List all installed packages in the currently activated environment:

`mamba list`
