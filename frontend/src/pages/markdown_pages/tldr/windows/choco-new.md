---
title: "Generate Chocolatey Packages - choco-new | Online Free DevTools by Hexmos"
name: choco-new
path: /freedevtools/tldr/windows/choco-new
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-new/"
description: "Generate Chocolatey package specification files quickly with choco-new. Streamline package creation, define versions, and customize output directories. Free online tool, no registration required."
category: windows
keywords:
- chocolatey package generator
- choco package creator
- windows package specification
- chocolatey new package
- chocolatey package management
- choco package template
- nuget package creation
- windows application packaging
- choco package versioning
- choco maintainer specification
features:
- Generate new Chocolatey package skeletons
- Specify package version during creation
- Define maintainer name for Chocolatey packages
- Create packages in custom output directories
- Set 32-bit and 64-bit installer URLs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# choco new

> Generate new package specification files with Chocolatey.
> More information: <https://chocolatey.org/docs/commands-new>.

- Create a new package skeleton:

`choco new {{package}}`

- Create a new package with a specific version:

`choco new {{package}} --version {{version}}`

- Create a new package with a specific maintainer name:

`choco new {{package}} --maintainer {{maintainer_name}}`

- Create a new package in a custom output directory:

`choco new {{package}} {{[--out|--output-directory]}} {{path/to/directory}}`

- Create a new package with specific 32-bit and 64-bit installer URLs:

`choco new {{package}} url="{{url}}" url64="{{url}}"`
