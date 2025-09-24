---
title: "Conda Env - Manage Environments | Online Free DevTools by Hexmos"
name: conda-env
path: /freedevtools/tldr/conda/conda-env
canonical: "https://hexmos.com/freedevtools/tldr/conda/conda-env/"
description: "Manage Conda environments with Conda Env. Create, update, remove and list environments efficiently. Free online tool, no registration required."
category: common
keywords:
- conda environment manager
- conda environment creator
- conda environment remover
- conda environment lister
- conda environment updater
- yaml environment management
- txt environment creation
- python environment management
- cross-platform environment
- environment variable control
features:
- Create conda environments from YAML or TXT files
- Remove environments and their contents
- Update environments based on a file
- List available conda environments
- Configure environment variables
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# conda env

> Manage conda environments.
> More information: <https://docs.conda.io/projects/conda/en/latest/commands/env/index.html>.

- Create an environment from an environment file (YAML, TXT, etc.):

`conda env create {{[-f|--file]}} {{path/to/file}}`

- Delete an environment and everything in it:

`conda env remove {{[-n|--name]}} {{environment_name}}`

- Update an environment based on an environment file:

`conda env update {{[-f|--file]}} {{path/to/file}} --prune`

- List all environments:

`conda env list`

- View environment details:

`conda env export`

- List environment variables:

`conda env config vars list`

- Set environment variables:

`conda env config vars set {{my_var}}={{value}}`
