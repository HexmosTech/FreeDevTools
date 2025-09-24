---
title: "Download Files - Download Files with Ruget | Online Free DevTools by Hexmos"
name: ruget
path: /freedevtools/tldr/linux/ruget
canonical: "https://hexmos.com/freedevtools/tldr/linux/ruget/"
description: "Download files instantly with Ruget, a Rust-based wget alternative. Easily fetch content from URLs with specified output file names. Free online tool, no registration required."
category: linux
keywords:
- URL downloader
- Rust wget alternative
- Linux file downloader
- Command-line downloader
- Download manager
- Ruget download
- HTTPS downloader
- Website downloader
- wget replacement
- Linux download tool
features:
- Download files from URLs
- Specify output file names
- Support for HTTPS downloads
- Command-line interface
- Rust-based implementation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ruget

> Alternative to wget written in Rust.
> More information: <https://github.com/ksk001100/ruget>.

- Download the contents of a URL to a file:

`ruget {{https://example.com/file}}`

- Download the contents of a URL to a specified output file:

`ruget {{[-o|--output]}} {{file_name}} {{https://example.com/file}}`
