---
title: "OPAM - Manage OCaml Packages | Free DevTools"
name: opam
path: /freedevtools/tldr/common/opam
canonical: "https://hexmos.com/freedevtools/tldr/common/opam/"
description: "Manage OCaml packages with OPAM, the OCaml package manager. Install, update, and search for OCaml libraries and tools. Free online tool, no registration required."
category: common
keywords:
- ocaml package manager
- ocaml dependency management
- opam package management
- ocaml library install
- ocaml tool install
- opam search packages
- ocaml package update
- ocaml package upgrade
- opam ocaml modules
- linux opam install
features:
- Initialize the opam environment
- Search for available OCaml packages
- Install OCaml packages and dependencies
- Display detailed information about a package
- Update the local package database
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# opam

> OCaml Package Manager.
> Manage OCaml compilers, tools and libraries.
> More information: <https://opam.ocaml.org/doc/Usage.html>.

- Initialize opam for first use:

`opam init`

- Search for packages:

`opam search {{query}}`

- Install a package and all of its dependencies:

`opam install {{package}}`

- Display detailed information about a package:

`opam show {{package}}`

- List all installed packages:

`opam list`

- Update the local package database:

`opam update`

- Upgrade all installed packages:

`opam upgrade`

- Display help:

`opam help`
