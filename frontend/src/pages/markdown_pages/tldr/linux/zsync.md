---
title: "zsync Downloader - Download Files Efficiently | Online Free DevTools by Hexmos"
name: zsync
path: /freedevtools/tldr/linux/zsync
canonical: "https://hexmos.com/freedevtools/tldr/linux/zsync/"
description: "Download files efficiently with zsync, leveraging partial downloads for faster transfers and resuming interrupted downloads.  Supports HTTP URLs. Free online tool, no registration required."
category: linux
keywords:
  - zsync download
  - zsync command
  - zsync partial download
  - zsync resume download
  - zsync file transfer
  - zsync http download
  - zsync control file
  - linux zsync
  - command-line zsync
  - efficient file transfer
features:
  - Downloads files using a .zsync control file.
  - Resumes interrupted downloads.
  - Uses existing files as seeds for faster downloads.
  - Saves downloaded files to a specified location.
  - Offers quiet mode for minimal output during download.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zsync

> Partial/differential file downloader.
> HTTPS is not supported - use HTTP URLs only.
> See also: `rsync`.
> More information: <https://manned.org/zsync>.

- Download a file using a `.zsync` control file:

`zsync {{path/to/url.zsync}}`

- Use a local file as a seed to avoid re-downloading unchanged parts:

`zsync -i {{path/to/existing_file}} {{path/to/url.zsync}}`

- Save the updated file under a specific name:

`zsync -i {{path/to/existing_file}} -o {{path/to/new_file}} {{path/to/url.zsync}}`

- Resume a partial download and keep the temporary file:

`zsync -k {{path/to/url.zsync}}`

- Run in quiet mode with minimal output (no progress bar, download rate, or ETA display):

`zsync -q {{path/to/url.zsync}}`
