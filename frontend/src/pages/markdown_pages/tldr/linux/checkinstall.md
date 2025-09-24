---
title: "Create Linux Packages - Track Install with Checkinstall | Online Free DevTools by Hexmos"
name: checkinstall
path: /freedevtools/tldr/linux/checkinstall
canonical: "https://hexmos.com/freedevtools/tldr/linux/checkinstall/"
description: "Create Linux packages easily with Checkinstall. Track software installations and generate installable binaries with your system's package manager. Free online tool, no registration required."
category: linux
keywords:
- linux package creation
- checkinstall package manager
- software installation tracker
- create installable binary
- linux package builder
- track software installation
- deb package creation
- rpm package creation
- linux installation monitor
- command line packaging
features:
- Create installable binary packages.
- Track local software installations.
- Integrate with system package managers.
- Customize package name and directory.
- Omit documentation during package creation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# checkinstall

> Track the local installation of a software package, and produce a binary package which can be used with a system's native package manager.
> More information: <https://checkinstall.izto.org/docs.php>.

- Create and install a package with default settings:

`sudo checkinstall {{[-y|--default]}}`

- Create a package but don't install it:

`sudo checkinstall --install={{no}}`

- Create a package without documentation:

`sudo checkinstall --nodoc`

- Create a package and set the name:

`sudo checkinstall --pkgname {{package}}`

- Create a package and specify where to save it:

`sudo checkinstall --pakdir {{path/to/directory}}`
