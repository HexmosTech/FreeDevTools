---
title: "Choco Source - Manage Package Sources | Online Free DevTools by Hexmos"
name: choco-source
path: /freedevtools/tldr/windows/choco-source
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-source/"
description: "Manage Chocolatey package sources with Choco Source. Easily add, remove, enable, and disable package sources for streamlined software management. Free online tool, no registration required."
category: windows
keywords:
- choco source manager
- chocolatey package sources
- windows package manager
- choco source configuration
- chocolatey source list
- choco source add
- choco source remove
- choco source enable
- choco source disable
- chocolatey credentials management
features:
- List available Chocolatey package sources
- Add new package sources with name and URL
- Add package sources with username and password
- Enable or disable existing package sources
- Remove configured package sources
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# choco source

> Manage sources for packages with Chocolatey.
> More information: <https://chocolatey.org/docs/commands-source>.

- List currently available sources:

`choco source list`

- Add a new package source:

`choco source add {{[-n|--name]}} {{name}} {{[-s|--source]}} {{url}}`

- Add a new package source with credentials:

`choco source add {{[-n|--name]}} {{name}} {{[-s|--source]}} {{url}} {{[-u|--user]}} {{username}} {{[-p|--password]}} {{password}}`

- Add a new package source with a client certificate:

`choco source add {{[-n|--name]}} {{name}} {{[-s|--source]}} {{url}} --cert {{path\to\certificate_file}}`

- Enable a package source:

`choco source enable {{[-n|--name]}} {{name}}`

- Disable a package source:

`choco source disable {{[-n|--name]}} {{name}}`

- Remove a package source:

`choco source remove {{[-n|--name]}} {{name}}`
