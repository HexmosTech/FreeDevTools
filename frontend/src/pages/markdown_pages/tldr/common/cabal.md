---
title: "Cabal Package Manager - Manage Haskell Packages | Free DevTools"
name: cabal
path: /freedevtools/tldr/common/cabal
canonical: "https://hexmos.com/freedevtools/tldr/common/cabal/"
description: "Manage Haskell packages with Cabal Package Manager. Install, build, and test Haskell projects from the command line. Free online tool, no registration required."
category: common
keywords:
- Haskell package management
- Cabal package installer
- Hackage package repository
- Haskell build tool
- Cabal command line
- Haskell project manager
- Cabal package search
- Cabal install package
- Cabal build project
- Cabal test project
features:
- Search and list Haskell packages from Hackage.
- Show detailed information about a specific package.
- Download and install Haskell packages.
- Create a new Haskell project with default settings.
- Build and test existing Haskell projects.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cabal

> Interface to the Haskell package infrastructure (Cabal).
> Manage Haskell projects and Cabal packages from the Hackage package repository.
> More information: <https://cabal.readthedocs.io/en/latest/getting-started.html>.

- Search and list packages from Hackage:

`cabal list {{search_string}}`

- Show information about a package:

`cabal info {{package}}`

- Download and install a package:

`cabal install {{package}}`

- Create a new Haskell project in the current directory:

`cabal init`

- Build the project in the current directory:

`cabal build`

- Run tests of the project in the current directory:

`cabal test`
