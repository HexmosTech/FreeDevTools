---
title: "Upload Files with transfersh - Share Files | Online Free DevTools by Hexmos"
name: transfersh
path: /freedevtools/tldr/common/transfersh
canonical: "https://hexmos.com/freedevtools/tldr/common/transfersh/"
description: "Upload files quickly with transfersh, a command-line tool for effortless file sharing. Securely transfer files with this simple and efficient command. Free online tool, no registration required."
category: common
keywords:
- file sharing command
- command line file upload
- transfersh file transfer
- command line transfer.sh
- share files from terminal
- linux file upload
- macos file upload
- transfersh command
- file upload cli
- terminal file sharing
features:
- Upload files to transfer.sh from the command line
- Specify a custom filename for uploaded files
- Upload entire directories recursively
- Use a custom transfer.sh server
- Upload a directory as an uncompressed tar archive
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# transfersh

> An unofficial client for transfer.sh.
> More information: <https://github.com/AlpixTM/transfersh>.

- Upload a file to transfer.sh:

`transfersh {{path/to/file}}`

- Upload a file showing a progress bar (requires Python package `requests_toolbelt`):

`transfersh --progress {{path/to/file}}`

- Upload a file using a different file name:

`transfersh --name {{filename}} {{path/to/file}}`

- Upload a file to a custom transfer.sh server:

`transfersh --servername {{upload.server.name}} {{path/to/file}}`

- Upload all files from a directory recursively:

`transfersh --recursive {{path/to/directory}}/`

- Upload a specific directory as an uncompressed tar:

`transfersh -rt {{path/to/directory}}`
