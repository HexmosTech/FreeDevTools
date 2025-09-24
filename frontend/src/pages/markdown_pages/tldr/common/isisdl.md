---
title: "Download ISIS Files - Sync Content | Online Free DevTools by Hexmos"
name: isisdl
path: /freedevtools/tldr/common/isisdl
canonical: "https://hexmos.com/freedevtools/tldr/common/isisdl/"
description: "Download ISIS content easily with isisdl. Sync ISIS files and compress videos using this command-line utility. Free online tool, no registration required."
category: common
keywords:
- isis downloader
- isis file downloader
- isis content sync
- tub isis download
- isis video download
- command line downloader
- linux downloader
- macos downloader
- windows downloader
- isisdl command
features:
- Synchronize ISIS content locally
- Limit download rate
- Compress downloaded videos with ffmpeg
- Initialize configuration via wizard
- Calculate file checksums during sync
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# isisdl

> A downloading utility for ISIS of TU-Berlin. Download all your files and videos from ISIS.
> More information: <https://github.com/Emily3403/isisdl>.

- Start the synchronization process:

`isisdl`

- Limit the download rate to 20 MiB/s and download with 5 threads:

`isisdl --download-rate {{20}} --max-num-threads {{5}}`

- Run the initialization configuration wizard:

`isisdl --init`

- Run the additional configuration wizard:

`isisdl --config`

- Initiate a full synchronization of the database and compute the checksum of every file:

`isisdl --sync`

- Start ffmpeg to compress downloaded videos:

`isisdl --compress`
