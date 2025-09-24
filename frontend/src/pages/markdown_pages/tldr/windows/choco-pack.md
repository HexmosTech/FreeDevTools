---
title: "Choco Pack - Create NuGet Packages | Online Free DevTools by Hexmos"
name: choco-pack
path: /freedevtools/tldr/windows/choco-pack
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-pack/"
description: "Create NuGet packages easily with Choco Pack. Streamline your software distribution by packaging NuGet specifications. Free online tool, no registration required."
category: windows
keywords:
- nuget package creator
- chocolatey pack tool
- choco nupkg generator
- windows package manager
- nuget specification packaging
- chocolatey package build
- choco package versioning
- nuget package deployment
- windows choco-pack
- package specification tool
features:
- Package NuGet specifications into nupkg files
- Specify the version of the resulting NuGet package
- Output NuGet packages to a specific directory
- Build NuGet packages from command line
- Automate NuGet packaging process
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# choco pack

> Package a NuGet specification into a `nupkg` file.
> More information: <https://chocolatey.org/docs/commands-pack>.

- Package a NuGet specification to a `nupkg` file:

`choco pack {{path\to\specification_file}}`

- Package a NuGet specification specifying the version of the resulting file:

`choco pack {{path\to\specification_file}} --version {{version}}`

- Package a NuGet specification to a specific directory:

`choco pack {{path\to\specification_file}} {{[--out|--output-directory]}} {{path\to\output_directory}}`
