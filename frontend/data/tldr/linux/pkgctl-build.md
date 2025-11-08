---
title: "Pkgctl Build - Generate Packages in Chroot | Online Free DevTools by Hexmos"
name: pkgctl-build
path: "/freedevtools/tldr/linux/pkgctl-build/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pkgctl-build/"
description: "Generate Linux packages effortlessly with Pkgctl Build. Create and manage software packages in a clean chroot environment for secure and reliable distribution. Free online tool, no registration required."
category: linux
keywords:
- linux package builder
- pkgctl build tool
- chroot package generator
- linux repository management
- pacman package creation
- build package from source
- linux package build script
- arch linux package build
- repository package build
- clean chroot build
features:
- Build packages in a clean chroot environment.
- Automatically select the correct build script.
- Manually specify architecture and repository.
- Build packages from source code.
- Manage package dependencies effectively.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkgctl build

> Build packages inside a clean `chroot`.
> More information: <https://manned.org/pkgctl-build.1>.

- Automatically choose the right build script to build packages in a clean `chroot`:

`pkgctl build`

- Manually build packages in a clean `chroot`:

`pkgctl build --arch {{architecture}} --repo {{repository}} --clean`
