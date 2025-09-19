---
title: "Nix Build - Generate Packages Effortlessly | Online Free DevTools by Hexmos"
name: nix-build.3
path: /freedevtools/tldr/nix/nix-build.3
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-build.3/"
description: "Generate packages easily with Nix Build, utilizing Nix expressions and flake support. Manage builds, print paths, and avoid symlinks. Free online tool, no registration required."
category: common
keywords:
- nix package build
- nix expression build
- nix flake build
- nix package manager
- nixos package
- linux package build
- macos package build
- declarative package management
- reproducible builds
- nix build command
features:
- Build packages from Nix expressions
- Utilize flakes for package definitions
- Print store paths without creating symlinks
- Build packages from nixpkgs repository
- Show build logs during the build process
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nix build

> Build a Nix expression (downloading from the cache when possible).
> See also: `nix-build` for information about traditional Nix builds from expressions, `nix flake` for information about flakes.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-build.html>.

- Build a package from nixpkgs, symlinking the result to `./result`:

`nix build {{nixpkgs#pkg}}`

- Build a package from a flake in the current directory, showing the build logs in the process:

`nix build -L {{.#pkg}}`

- Build the default package from a flake in some directory:

`nix build {{./path/to/directory}}`

- Build a package without making the `result` symlink, instead printing the store path to the `stdout`:

`nix build --no-link --print-out-paths`
