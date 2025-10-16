---
title: "Configure ldconfig - Manage Shared Library Dependencies | Online Free DevTools by Hexmos"
name: ldconfig
path: "/freedevtools/tldr/linux/ldconfig/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ldconfig/"
description: "Manage shared library dependencies with ldconfig. Update symlinks and cache for efficient library linking. Free online tool, no registration required."
category: linux
keywords:
  - shared library configuration
  - ldconfig update cache
  - linux shared library manager
  - configure ldconfig
  - ldconfig symlink
  - ldconfig library path
  - linux library dependency
  - ld library cache
  - ldconfig command
  - dynamic linker configuration
features:
  - Update shared library symlinks
  - Rebuild the library cache
  - Configure library paths
  - Print libraries from the cache
  - Check for library presence
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ldconfig

> Configure symlinks and cache for shared library dependencies.
> More information: <https://manned.org/ldconfig>.

- Update symlinks and rebuild the cache (usually run when a new library is installed):

`sudo ldconfig`

- Update the symlinks for a given directory:

`sudo ldconfig -n {{path/to/directory}}`

- Print the libraries in the cache and check whether a given library is present:

`ldconfig {{[-p|--print-cache]}} | grep {{library_name}}`
