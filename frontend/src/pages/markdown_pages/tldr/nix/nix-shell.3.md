---
title: "Nix Shell - Create Isolated Environments | Free DevTools"
name: nix-shell.3
path: /freedevtools/tldr/common/nix-shell.3
canonical: "https://hexmos.com/freedevtools/tldr/common/nix-shell.3/"
description: "Create isolated development environments with Nix Shell, instantly managing dependencies and package versions. Simplify project setup with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- nix package manager
- isolated environment
- nix development shell
- dependency management
- nixos configuration
- reproducible builds
- declarative package management
- linux shell environment
- package dependencies
- nix flakes
features:
- Create isolated shells with specific packages.
- Use packages from different nixpkgs versions.
- Load packages from flakes directly.
- Execute commands within the isolated environment.
- Manage project-specific dependencies effectively.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix shell

> Start a shell in which the specified packages are available.
> See also: `nix-shell` for setting up development environments, `nix flake` for information about flakes.
> More information: <https://manned.org/nix3-shell>.

- Start an interactive shell with some packages from `nixpkgs`:

`nix shell {{nixpkgs#pkg1 nixpkgs#packageSet.pkg2 ...}}`

- Start a shell providing a package from an older version of `nixpkgs` (21.05):

`nix shell {{nixpkgs/nixos-21.05#pkg}}`

- Start a shell with the "default package" from a flake in the current directory, printing build logs if any builds happen:

`nix shell -L`

- Start a shell with a package from a flake on GitHub:

`nix shell {{github:owner/repo#pkg}}`

- Run a command in a shell with a package:

`nix shell {{nixpkgs#pkg}} -c {{some-cmd --someflag 'Some other arguments'}}`
