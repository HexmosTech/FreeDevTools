---
title: "Install Binaries - Download Prebuilt Executables | Online Free DevTools by Hexmos"
name: eget
path: /freedevtools/tldr/common/eget
canonical: "https://hexmos.com/freedevtools/tldr/common/eget/"
description: "Download binaries easily with Eget. Install prebuilt executables from GitHub repositories. Free online tool, no registration required."
category: common
keywords:
- prebuilt binaries download
- github release installer
- executable installer
- command line installer
- cross platform binaries
- asset downloader
- versioned binaries
- linux binary installer
- macos binary installer
- windows binary installer
features:
- Download prebuilt binaries from GitHub releases.
- Install binaries from specified URLs.
- Specify the installation directory for downloaded files.
- Download specific Git tags instead of latest release.
- Download pre-release versions of binaries.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eget

> Easily install prebuilt binaries from GitHub.
> More information: <https://github.com/zyedidia/eget>.

- Download a prebuilt binary for the current system from a repository on GitHub:

`eget {{zyedidia/micro}}`

- Download from a URL:

`eget {{https://go.dev/dl/go1.17.5.linux-amd64.tar.gz}}`

- Specify the location to place the downloaded files:

`eget {{zyedidia/micro}} --to={{path/to/directory}}`

- Specify a Git tag instead of using the latest version:

`eget {{zyedidia/micro}} --tag={{v2.0.10}}`

- Install the latest pre-release instead of the latest stable version:

`eget {{zyedidia/micro}} --pre-release`

- Only download the asset, skipping extraction:

`eget {{zyedidia/micro}} --download-only`

- Only download if there is a newer release then the currently downloaded version:

`eget {{zyedidia/micro}} --upgrade-only`
