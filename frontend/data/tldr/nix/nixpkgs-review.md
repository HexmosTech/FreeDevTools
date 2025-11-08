---
title: "Review Nix Packages - Build PR Changes | Online Free DevTools by Hexmos"
name: nixpkgs-review
path: "/freedevtools/tldr/nix/nixpkgs-review/"
canonical: "https://hexmos.com/freedevtools/tldr/nix/nixpkgs-review/"
description: "Review Nix packages with nixpkgs-review. Build pull request changes and start a nix-shell environment to test modifications. Free online tool, no registration required."
category: common
keywords:
- nix package review
- nixpkgs pull request review
- nix build changes
- nix-shell environment
- nixos package manager
- nix package build
- nix dependency management
- nix continuous integration
- linux package review
- cross-platform package build
features:
- Build changes from a specified pull request.
- Post a comment with build results on a pull request.
- Build changes from a local commit.
- Build changes from uncommitted work in progress.
- Build changes from staged files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nixpkgs-review

> Review pull requests in the NixOS packages repository (nixpkgs).
> After a successful build, a `nix-shell` with all built packages is started.
> More information: <https://github.com/Mic92/nixpkgs-review#usage>.

- Build changed packages in the specified pull request:

`nixpkgs-review pr {{pr_number|pr_url}}`

- Build changed packages and post a comment with a report (requires setting up a token in `hub`, `gh`, or the `GITHUB_TOKEN` environment variable):

`nixpkgs-review pr --post-result {{pr_number|pr_url}}`

- Build changed packages and print a report:

`nixpkgs-review pr --print-result {{pr_number|pr_url}}`

- Build changed packages in a local commit:

`nixpkgs-review rev {{HEAD}}`

- Build changed packages that haven't been committed yet:

`nixpkgs-review wip`

- Build changed packages that have been staged:

`nixpkgs-review wip --staged`
