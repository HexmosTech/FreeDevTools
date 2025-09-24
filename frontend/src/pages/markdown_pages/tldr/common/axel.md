---
title: "Download Accelerator - Accelerate Downloads with Axel | Online Free DevTools by Hexmos"
name: axel
path: /freedevtools/tldr/common/axel
canonical: "https://hexmos.com/freedevtools/tldr/common/axel/"
description: "Accelerate file downloads with Axel Download Accelerator. Download files quickly and efficiently via HTTP, HTTPS, and FTP. Free online tool, no registration required."
category: common
keywords:
- download accelerator
- HTTP downloader
- HTTPS downloader
- FTP downloader
- command line downloader
- linux download accelerator
- macos download accelerator
- accelerate file transfers
- multi-connection downloader
- axel download manager
features:
- Download files using multiple connections
- Limit download speed for specific files
- Search for mirrors to increase download speed
- Specify an output file for downloaded content
- Download files via HTTP, HTTPS, or FTP protocols
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# axel

> Download accelerator.
> Supports HTTP, HTTPS, and FTP.
> More information: <https://manned.org/axel>.

- Download a URL to a file:

`axel {{url}}`

- Download and specify an output file:

`axel {{url}} {{[-o|--output]}} {{path/to/file}}`

- Download with a specific number connections:

`axel {{[-n|--num-connections]}} {{connections_num}} {{url}}`

- Search for mirrors:

`axel {{[-S|--search]}} {{mirrors_num}} {{url}}`

- Limit download speed (bytes per second):

`axel {{[-s|--max-speed]}} {{speed}} {{url}}`
