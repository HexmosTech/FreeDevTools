---
title: "SMB File Downloader - Download Files from SMB Servers | Online Free DevTools by Hexmos"
name: smbget
path: /freedevtools/tldr/linux/smbget
canonical: "https://hexmos.com/freedevtools/tldr/linux/smbget/"
description: "Download files from SMB servers easily with smbget.  This command-line utility provides secure and efficient file transfers. Free online tool, no registration required."
category: linux
keywords:
  - smb file download
  - smbget command
  - smb client download
  - download smb files
  - smb recursive download
  - smb encrypted transfer
  - command line smb
  - smb file transfer utility
  - network file downloader
  - linux smb download
features:
  - Download individual files from SMB servers.
  - Download entire SMB shares recursively.
  - Support for username and password authentication.
  - Enable encrypted SMB transfers for enhanced security.
  - Simple and intuitive command-line interface.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# smbget

> `wget`-like utility for downloading files from SMB servers.
> More information: <https://www.samba.org/samba/docs/current/man-html/smbget.1.html>.

- Download a file from a server:

`smbget {{smb://server/share/file}}`

- Download a share or directory recursively:

`smbget --recursive {{smb://server/share}}`

- Connect with a username and password:

`smbget {{smb://server/share/file}} {{[-U|--user]}} {{username%password}}`

- Require encrypted transfers:

`smbget {{smb://server/share/file}} {{[-e|--encrypt]}}`
