---
title: "Ebuild - Manage Gentoo Packages | Free DevTools"
name: ebuild
path: /freedevtools/tldr/linux/ebuild
canonical: "https://hexmos.com/freedevtools/tldr/linux/ebuild/"
description: "Manage Gentoo packages efficiently with the ebuild command.  Build, install, and update packages using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - ebuild package manager
  - gentoo ebuild commands
  - linux package management
  - gentoo package build
  - ebuild source compilation
  - ebuild package installation
  - gentoo system administration
  - linux ebuild tutorial
  - portage ebuild guide
  - ebuild command line
features:
  - Create and update package manifests
  - Clean temporary build directories
  - Fetch source code for packages
  - Extract and compile source packages
  - Install packages to the system
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ebuild

> A low level interface to the Gentoo Portage system.
> More information: <https://wiki.gentoo.org/wiki/Ebuild>.

- Create or update the package manifest:

`ebuild {{path/to/file.ebuild}} manifest`

- Clean the temporary build directories for the build file:

`ebuild {{path/to/file.ebuild}} clean`

- Fetch sources if they do not exist:

`ebuild {{path/to/file.ebuild}} fetch`

- Extract the sources to a temporary build directory:

`ebuild {{path/to/file.ebuild}} unpack`

- Compile the extracted sources:

`ebuild {{path/to/file.ebuild}} compile`

- Install the package to a temporary install directory:

`ebuild {{path/to/file.ebuild}} install`

- Install the temporary files to the live filesystem:

`ebuild {{path/to/file.ebuild}} qmerge`

- Fetch, unpack, compile, install and qmerge the specified ebuild file:

`ebuild {{path/to/file.ebuild}} merge`
