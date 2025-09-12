---
title: "Mega Download - Download Mega Files with megatools-dl | Free DevTools"
name: megatools-dl
path: /freedevtools/tldr/linux/megatools-dl
canonical: "https://hexmos.com/freedevtools/tldr/linux/megatools-dl/"
description: "Download Mega files quickly and easily with megatools-dl.  Manage downloads, select specific files, and control download speed. Free online tool, no registration required."
category: linux
keywords:
  - mega download manager
  - mega file downloader
  - megatools download command
  - mega nz download tool
  - command-line mega download
  - mega link downloader
  - megatools-dl usage
  - download mega files
  - mega.nz file access
  - megatools CLI
features:
  - Download files from mega.nz links.
  - Specify a custom download directory.
  - Interactively select files for download.
  - Limit download speed for bandwidth management.
  - Supports multiple file downloads simultaneously.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# megatools-dl

> Download files from `mega.nz`.
> Part of the `megatools` suite.
> More information: <https://megatools.megous.com/man/megatools-dl.html>.

- Download files from a `mega.nz` link into the current directory:

`megatools-dl {{https://mega.nz/...}}`

- Download files from a `mega.nz` link into a specific directory:

`megatools-dl --path {{path/to/directory}} {{https://mega.nz/...}}`

- Interactively choose which files to download:

`megatools-dl --choose-files {{https://mega.nz/...}}`

- Limit the download speed in KiB/s:

`megatools-dl --limit-speed {{speed}} {{https://mega.nz/...}}`
