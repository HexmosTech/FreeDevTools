---
title: "Build Debian Package - Create Chroot Environments | Free DevTools"
name: sbuild
path: /freedevtools/tldr/common/sbuild
canonical: "https://hexmos.com/freedevtools/tldr/common/sbuild/"
description: "Build Debian packages with sbuild, creating isolated chroot environments for clean and reproducible builds.  Ensure package integrity and compatibility. Free online tool, no registration required."
category: common
keywords:
- debian package builder
- sbuild chroot environment
- build debian binary
- clean build environment
- reproducible builds
- debian package management
- linux package builder
- command line build tool
- build environment isolation
- debian package creation
features:
- Build Debian packages in a clean chroot environment.
- Build packages for specific Debian distributions.
- Utilize custom dependencies for package building.
- Inspect build failures with an interactive shell.
- Cross-build packages for various architectures.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sbuild

> Build a Debian binary package in a clean `chroot` environment.
> More information: <https://wiki.debian.org/sbuild>.

- Build the package in the current directory:

`sbuild`

- Build the given package:

`sbuild {{package}}`

- Build for a certain distribution:

`sbuild --dist {{distribution}}`

- Build using custom dependencies (if a directory is passed, all files ending with `.deb` are used):

`sbuild --extra-package {{path/to/file_or_directory}}`

- Run a shell in case of build failure to further investigate:

`sbuild --build-failed-commands=%SBUILD_SHELL`

- Cross build for a certain architecture:

`sbuild --host {{architecture}}`

- Build for the given native architecture:

`sbuild --arch {{architecture}}`
