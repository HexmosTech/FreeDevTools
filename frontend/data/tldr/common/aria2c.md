---
title: "Download Manager - Control Downloads with aria2c | Online Free DevTools by Hexmos"
name: aria2c
path: "/freedevtools/tldr/common/aria2c/"
canonical: "https://hexmos.com/freedevtools/tldr/common/aria2c/"
description: "Control downloads effortlessly with aria2c, a powerful download manager. Supports HTTP, FTP, SFTP, BitTorrent, and Metalink protocols. Free online tool, no registration required."
category: common
keywords:
- download manager
- command line downloader
- aria2c download
- http downloader
- ftp downloader
- torrent downloader
- metalink downloader
- sftp downloader
- linux download utility
- macos download utility
features:
- Download files from HTTP, HTTPS, FTP, SFTP.
- Download torrents and Metalink files.
- Download multiple files concurrently.
- Verify file integrity using checksums.
- Limit download speed to a specified value.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aria2c

> Fast download utility.
> Supports HTTP(S), FTP, SFTP, BitTorrent, and Metalink.
> More information: <https://aria2.github.io>.

- Download a specific URI to a file:

`aria2c "{{url}}"`

- Download a file from a URI with a specific output name:

`aria2c --out {{path/to/file}} "{{url}}"`

- Download multiple different files in parallel:

`aria2c --force-sequential {{false}} "{{url1 url2 ...}}"`

- Download the same file from different mirrors and verify the checksum of the downloaded file:

`aria2c --checksum {{sha-256}}={{hash}} {{"url1" "url2" ...}}`

- Download the URIs listed in a file with a specific number of parallel downloads:

`aria2c --input-file {{path/to/file}} --max-concurrent-downloads {{number_of_downloads}}`

- Download with multiple connections:

`aria2c --split {{number_of_connections}} "{{url}}"`

- FTP download with username and password:

`aria2c --ftp-user {{username}} --ftp-passwd {{password}} "{{url}}"`

- Limit download speed in bytes/s:

`aria2c --max-download-limit {{speed}} "{{url}}"`
