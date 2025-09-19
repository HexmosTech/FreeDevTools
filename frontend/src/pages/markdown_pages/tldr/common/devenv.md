---
title: "Devenv - Create Development Environments | Online Free DevTools by Hexmos"
name: devenv
path: /freedevtools/tldr/common/devenv
canonical: "https://hexmos.com/freedevtools/tldr/common/devenv/"
description: "Create reproducible development environments with Devenv. Manage dependencies and configurations for consistent development across platforms. Free online tool, no registration required."
category: common
keywords:
- nix development environment
- declarative environment configuration
- reproducible build environment
- devenv shell management
- environment variable cleaner
- offline devenv usage
- devenv garbage collection
- nix environment management
- cross platform development
- fast development workflow
features:
- Initialize a new development environment with devenv
- Enter a development shell with relaxed hermeticity
- Display detailed information about the current environment
- Start processes using devenv configuration files
- Clean environment variables and enter the shell in offline mode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# devenv

> Fast, Declarative, Reproducible and Composable Developer Environments using Nix.
> More information: <https://devenv.sh/getting-started/#commands>.

- Initialize the environment:

`devenv init`

- Enter the Development Environment with relaxed hermeticity (state of being airtight):

`devenv shell --impure`

- Get detailed information about the current environment:

`devenv info --verbose`

- Start processes with `devenv`:

`devenv up --config {{path/to/file}}`

- Clean the environment variables and re-enter the shell in offline mode:

`devenv --clean --offline`

- Delete the previous shell generations:

`devenv gc`
