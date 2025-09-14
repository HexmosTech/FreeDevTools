---
title: "PIO Package Manager - Manage Packages | Free DevTools"
name: pio-pkg
path: /freedevtools/tldr/pio/pio-pkg
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-pkg/"
description: "Manage packages with PIO Package Manager. Publish, unpublish, and version PlatformIO packages using the command line. Free online tool, no registration required."
category: common
keywords:
- platformio package manager
- pio package publishing
- pio package unpublishing
- pio package versioning
- platformio library manager
- platformio dependency management
- pio package tarball
- platformio registry
- platformio package control
- package management command line
features:
- Create PlatformIO package tarballs
- Publish packages to the PlatformIO registry
- Unpublish packages from the PlatformIO registry
- Manage package versions
- Control package access (public/private)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio pkg

> Manage packages in the registry.
> Packages can only be removed within 72 hours (3 days) from the date that they are published.
> More information: <https://docs.platformio.org/en/latest/core/userguide/package/>.

- Create a package tarball from the current directory:

`pio pkg pack {{[-o|--output]}} {{path/to/package.tar.gz}}`

- Create and publish a package tarball from the current directory:

`pio pkg publish`

- Publish the current directory and restrict public access to it:

`pio pkg publish --private`

- Publish a package:

`pio pkg publish {{path/to/package.tar.gz}}`

- Publish a package with a custom release date (UTC):

`pio pkg publish {{path/to/package.tar.gz}} --released-at "{{2021-04-08 21:15:38}}"`

- Remove all versions of a published package from the registry:

`pio pkg unpublish {{package}}`

- Remove a specific version of a published package from the registry:

`pio pkg unpublish {{package}}@{{version}}`

- Undo the removal, putting all versions or a specific version of the package back into the registry:

`pio pkg unpublish --undo {{package}}@{{version}}`
