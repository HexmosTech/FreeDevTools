---
title: "Nix Run - Execute Applications from Flakes | Online Free DevTools by Hexmos"
name: nix-run
path: /freedevtools/tldr/nix/nix-run
canonical: "https://hexmos.com/freedevtools/tldr/nix/nix-run/"
description: "Execute applications seamlessly with Nix Run. Effortlessly run applications from Nix flakes, manage dependencies, and reproduce environments. Free online tool, no registration required."
category: common
keywords:
- nix flake execution
- nix run command
- nix package runner
- nix application deployment
- nix reproducible builds
- nix package management
- linux application runner
- macos application runner
- cross-platform application execution
- nix environment manager
features:
- Execute applications directly from Nix flakes
- Run applications from remote repositories
- Specify application versions using tags or revisions
- Execute applications with custom arguments
- Run applications from specific subdirectories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nix run

> Run an application from a Nix flake.
> See also: `nix flake` for information about flakes.
> More information: <https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-run.html>.

- Run the default application in the flake in the current directory:

`nix run`

- Run a command whose name matches the package name from nixpkgs (if you want a different command from that package, see `tldr nix shell`):

`nix run nixpkgs#{{pkg}}`

- Run a command with provided arguments:

`nix run nixpkgs#{{vim}} -- {{path/to/file}}`

- Run from a remote repository:

`nix run {{remote_name}}:{{owner}}/{{repo}}`

- Run from a remote repository using a specific tag, revision or branch:

`nix run {{remote_name}}:{{owner}}/{{repo}}/{{reference}}`

- Run from a remote repository specifying a subdirectory and a program:

`nix run "{{remote_name}}:{{owner}}/{{repo}}?dir={{dir_name}}#{{app}}"`

- Run the flake of a GitHub pull request:

`nix run github:{{owner}}/{{repo}}/pull/{{number}}/head`
