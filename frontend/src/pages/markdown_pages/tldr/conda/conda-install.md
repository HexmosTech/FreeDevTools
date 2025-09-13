---
title: "Conda Install - Manage Packages | Free DevTools"
name: conda-install
path: /freedevtools/tldr/conda/conda-install
canonical: "https://hexmos.com/freedevtools/tldr/conda/conda-install/"
description: "Manage Conda packages with Conda Install. Quickly install, update, and specify versions for different environments. Free online tool, no registration required."
category: common
keywords:
- conda package manager
- conda install package
- conda environment management
- conda install specific version
- conda channel install
- conda update package
- conda install dependencies
- python package manager
- anaconda package install
- cross-platform package install
features:
- Install packages into specific Conda environments.
- Specify package versions during installation.
- Install packages from specific Conda channels.
- Update existing packages within an environment.
- Perform unattended installations by accepting transactions.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# conda install

> Install packages into an existing conda environment.
> More information: <https://docs.conda.io/projects/conda/en/latest/commands/install.html>.

- Install one or more package into the currently active conda environment:

`conda install {{package1 package2 ...}}`

- Install a single package into the currently active conda environment using channel conda-forge:

`conda install {{[-c|--channel]}} conda-forge {{package}}`

- Install a single package into the currently active conda environment using channel conda-forge and ignoring other channels:

`conda install {{[-c|--channel]}} conda-forge --override-channels {{package}}`

- Install a specific version of a package:

`conda install {{package}}={{version}}`

- Install a package into a specific environment:

`conda install {{[-n|--name]}} {{environment}} {{package}}`

- Update a package in the current environment:

`conda install --upgrade {{package}}`

- Install a package and agree to the transactions without prompting:

`conda install {{[-y|--yes]}} {{package}}`
