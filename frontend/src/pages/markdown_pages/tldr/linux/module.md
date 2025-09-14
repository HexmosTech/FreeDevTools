---
title: "Module - Control Linux Environment Modules | Free DevTools"
name: module
path: /freedevtools/tldr/linux/module
canonical: "https://hexmos.com/freedevtools/tldr/linux/module/"
description: "Control Linux environment modules quickly with Module command. Load, unload, list, and purge modules. Free online tool, no registration required."
category: linux
keywords:
- linux environment modules
- linux module manager
- module load linux
- module unload linux
- module avail linux
- module list linux
- module purge linux
- linux module command
- environment variables linux
- module use linux
features:
- Load specific software modules into the environment
- List currently loaded software modules
- Unload specific or all loaded modules
- Search for available software modules
- Specify user-defined module file locations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# module

> Modify a users' environment using the module command.
> More information: <https://lmod.readthedocs.io/en/latest/010_user.html>.

- Display available modules:

`module avail`

- Search for a module by name:

`module avail {{module_name}}`

- Load a module:

`module load {{module_name}}`

- Display loaded modules:

`module list`

- Unload a specific loaded module:

`module unload {{module_name}}`

- Unload all loaded modules:

`module purge`

- Specify user-created modules:

`module use {{path/to/module_file1 path/to/module_file2 ...}}`
