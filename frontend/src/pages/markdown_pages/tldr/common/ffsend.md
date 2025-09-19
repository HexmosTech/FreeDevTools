---
title: "Share Files Securely with ffsend | Online Free DevTools by Hexmos"
name: ffsend
path: /freedevtools/tldr/common/ffsend
canonical: "https://hexmos.com/freedevtools/tldr/common/ffsend/"
description: "Share files securely with ffsend. Upload and download files with encryption and password protection, ensuring secure file transfer. Free online tool, no registration required."
category: common
keywords:
- secure file sharing
- encrypted file transfer
- command line file sharing
- ffsend upload
- ffsend download
- password protected file sharing
- temporary file hosting
- self-destructing files
- file transfer linux
- file transfer macOS
features:
- Upload files securely with encryption
- Download password-protected files
- Limit the number of downloads for a file
- Share files via command line interface
- Set passwords for file downloads
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ffsend

> Easily and securely share files.
> More information: <https://gitlab.com/timvisee/ffsend>.

- Upload a file:

`ffsend upload {{path/to/file}}`

- Download a file:

`ffsend download {{url}}`

- Upload a file with password:

`ffsend upload {{path/to/file}} {{[-p|--password]}} {{password}}`

- Download a file protected by password:

`ffsend download {{url}} {{[-p|--password]}} {{password}}`

- Upload a file and allow 4 downloads:

`ffsend upload {{path/to/file}} {{[-d|--downloads]}} {{4}}`
