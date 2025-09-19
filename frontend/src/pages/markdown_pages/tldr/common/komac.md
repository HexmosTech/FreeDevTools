---
title: "Create WinGet Manifests - komac | Online Free DevTools by Hexmos"
name: komac
path: /freedevtools/tldr/common/komac
canonical: "https://hexmos.com/freedevtools/tldr/common/komac/"
description: "Create WinGet manifests with komac, a command-line tool for managing winget-pkgs repositories. Automate package creation and updates. Free online tool, no registration required."
category: common
keywords:
- WinGet manifest creation
- winget-pkgs management
- Package version control
- Command-line winget
- komac package manager
- Software manifest generator
- Windows package deployment
- winget manifest editor
- Application manifest tool
- WinGet repository sync
features:
- Create new WinGet packages from scratch
- Update existing WinGet packages with new versions
- Remove specific versions of packages
- Sync a forked winget-pkgs repository
- Generate shell autocompletion scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# komac

> Create WinGet manifests for the `winget-pkgs` repository.
> More information: <https://github.com/russellbanks/Komac>.

- Create a new package from scratch:

`komac new {{Package.Identifier}} --version {{1.2.3}} --urls {{https://example.com/app.exe}}`

- Update an existing package with a new version:

`komac update {{Package.Identifier}} --version {{1.2.3}} --urls {{https://example.com/app.exe}}`

- Update a package with multiple URLs and automatically submit:

`komac update {{Package.Identifier}} --version {{1.2.3}} --urls {{https://example.com/app.exe https://example.com/app.msi ...}} --submit`

- Remove a version from winget-pkgs:

`komac remove {{Package.Identifier}} --version {{1.2.3}}`

- List all versions for a package:

`komac list-versions {{Package.Identifier}}`

- Sync your fork of winget-pkgs with the upstream repository:

`komac sync-fork`

- Update the stored GitHub token:

`komac token update --token {{your_github_token}}`

- Generate shell autocompletion script:

`komac complete {{bash|zsh|fish|powershell}}`
