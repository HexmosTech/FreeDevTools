---
title: "Mamba Repoquery - Query Conda Packages | Online Free DevTools by Hexmos"
name: mamba-repoquery
path: "/freedevtools/tldr/common/mamba-repoquery/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mamba-repoquery/"
description: "Query conda packages efficiently with Mamba Repoquery. Discover package versions, dependencies, and required packages using command line. Free online tool, no registration required."
category: common
keywords:
- conda package query
- mamba package search
- conda dependency resolver
- mamba repo management
- package version lookup
- conda environment analysis
- mamba package explorer
- python package manager
- package dependency tree
- conda package metadata
features:
- Search for specific package versions in conda repositories.
- Resolve package dependencies within a conda environment.
- Identify packages that require a specific dependency.
- Display package dependencies in a tree format.
- Query package metadata for conda and mamba.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mamba repoquery

> Efficiently query conda and mamba package repositories and package dependencies.
> More information: <https://mamba.readthedocs.io/en/latest/user_guide/mamba.html#repoquery>.

- Search for all available versions of a particular package:

`mamba repoquery search {{package}}`

- Search for all packages satisfying specific constraints:

`mamba repoquery search "{{sphinx<5}}"`

- List the dependencies of a package installed in the currently activated environment, in a tree format:

`mamba repoquery depends --tree {{scipy}}`

- Print packages in the current environment that require a particular package to be installed (i.e. inverse of `depends`):

`mamba repoquery whoneeds {{ipython}}`
