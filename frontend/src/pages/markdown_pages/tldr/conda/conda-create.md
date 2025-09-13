---
title: "Conda Create - Generate Environments | Free DevTools"
name: conda-create
path: /freedevtools/tldr/common/conda-create
canonical: "https://hexmos.com/freedevtools/tldr/common/conda-create/"
description: "Generate conda environments with Conda Create. Install packages, clone environments, and manage dependencies using command line. Free online tool, no registration required."
category: common
keywords:
- conda environment creation
- conda environment management
- python environment setup
- cross-platform environment
- dependency management conda
- conda package installation
- conda environment cloning
- linux conda create
- macos conda create
- windows conda create
features:
- Create new conda environments
- Install specific python versions
- Clone existing conda environments
- Install specific packages in environments
- Specify environment names
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# conda create

> Create new conda environments.
> More information: <https://docs.conda.io/projects/conda/en/latest/commands/create.html>.

- Create a new environment named `py39`, and install Python 3.9 and NumPy v1.11 or above in it:

`conda create {{[-y|--yes]}} {{[-n|--name]}} {{py39}} python={{3.9}} "{{numpy>=1.11}}"`

- Make exact copy of an environment:

`conda create --clone {{py39}} {{[-n|--name]}} {{py39-copy}}`

- Create a new environment with a specified name and install a given package:

`conda create {{[-n|--name]}} {{env_name}} {{package}}`
