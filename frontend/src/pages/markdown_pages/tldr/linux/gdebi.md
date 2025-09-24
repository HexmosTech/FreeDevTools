---
title: "Gdebi - Install Deb Packages Easily | Online Free DevTools by Hexmos"
name: gdebi
path: /freedevtools/tldr/linux/gdebi
canonical: "https://hexmos.com/freedevtools/tldr/linux/gdebi/"
description: "Install deb packages simply with Gdebi. Resolve dependencies and install .deb files effortlessly on Linux. Free online tool, no registration required."
category: linux
keywords:
- deb package installer
- linux package installer
- gdebi debian
- deb dependency resolver
- deb package manager
- install deb linux
- gdebi command
- debian package installation
- apt dependency resolver
- local deb installer
features:
- Install local .deb packages
- Resolve and install package dependencies
- Suppress progress information during installation
- Set APT configuration options
- Use an alternative root directory for installation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gdebi

> Easily install `.deb` files.
> More information: <https://manned.org/gdebi>.

- Install local `.deb` packages resolving and installing its dependencies:

`gdebi {{path/to/package.deb}}`

- Do not show progress information:

`gdebi {{path/to/package.deb}} {{[-q|--quiet]}}`

- Set an APT configuration option:

`gdebi {{path/to/package.deb}} {{[-o|--option]}} {{APT_OPTS}}`

- Use alternative root dir:

`gdebi {{path/to/package.deb}} --root {{path/to/root_dir}}`

- Display version:

`gdebi --version`
