---
title: "FTP File Transfer - Control Remote Files Interactively | Free DevTools"
name: ftp
path: /freedevtools/tldr/unknown/ftp
canonical: "https://hexmos.com/freedevtools/tldr/unknown/ftp/"
description: "Control remote files with FTP File Transfer, interactively connecting to servers and managing files with ease. Free online tool, no registration required."
category: unknown
keywords:
- ftp file transfer
- remote file management
- ftp command line
- ftp client
- ftp server connection
- ftp file upload
- ftp file download
- ftp multiple file transfer
- ftp anonymous login
- ftp batch processing
features:
- Connect to remote FTP servers interactively
- Transfer multiple files using glob expressions
- Execute FTP commands from a file
- Log in as an anonymous user
- Disable automatic login for secure connections
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ftp

> Interactively transfer files between a local and remote FTP server.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/ftp>.

- Connect to a remote FTP server interactively:

`ftp {{host}}`

- Log in as an anonymous user:

`ftp -A {{host}}`

- Disable automatic login upon initial connection:

`ftp -n {{host}}`

- Run a file containing a list of FTP commands:

`ftp -s:{{path\to\file}} {{host}}`

- Download multiple files (glob expression):

`mget {{*.png}}`

- Upload multiple files (glob expression):

`mput {{*.zip}}`

- Delete multiple files on the remote server:

`mdelete {{*.txt}}`

- Display help:

`ftp --help`
