---
title: "Conda Environment Manager - Create and Control Environments | Online Free DevTools by Hexmos"
name: conda
path: "/freedevtools/tldr/conda/conda/"
canonical: "https://hexmos.com/freedevtools/tldr/conda/conda/"
description: "Manage Conda environments with ease. Create, activate, deactivate, and delete environments for Python and other languages. Free online tool, no registration required."
category: common
keywords:
- conda environment manager
- python environment management
- conda package manager
- conda dependency management
- linux environment management
- macos environment management
- create conda environment
- activate conda environment
- remove conda environment
- conda virtual environment
features:
- Create isolated environments for different projects
- Install and manage packages within environments
- Activate and deactivate environments easily
- Remove environments to free up disk space
- List installed packages in a specific environment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# conda

> Package, dependency and environment management for any programming language.
> Some subcommands such as `create` have their own usage documentation.
> More information: <https://docs.conda.io/projects/conda/en/latest/commands/index.html>.

- Create a new environment, installing named packages into it:

`conda create {{[-n|--name]}} {{environment_name}} {{python=3.9 matplotlib}}`

- List all environments:

`conda info {{[-e|--envs]}}`

- Activate an environment:

`conda activate {{environment_name}}`

- Deactivate an environment:

`conda deactivate`

- Delete an environment (remove all packages):

`conda remove {{[-n|--name]}} {{environment_name}} --all`

- Install packages into the current environment:

`conda install {{python=3.4 numpy}}`

- List currently installed packages in current environment:

`conda list`

- Delete unused packages and caches:

`conda clean {{[-a|--all]}}`
