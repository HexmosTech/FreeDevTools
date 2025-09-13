---
title: "FTP Client - Control File Transfers via Command Line | Free DevTools"
name: ftp
path: /freedevtools/tldr/common/ftp
canonical: "https://hexmos.com/freedevtools/tldr/common/ftp/"
description: "Control file transfers with FTP Client. Connect, upload, and download files securely via command line protocol. Free online tool, no registration required."
category: common
keywords:
- ftp client
- file transfer protocol
- command line ftp
- ftp upload
- ftp download
- ftp batch transfer
- ftp rename file
- ftp delete files
- linux ftp
- macos ftp
features:
- Connect to FTP servers using hostname or IP address and port.
- Switch between binary and ASCII transfer modes for different file types.
- Transfer multiple files using globbing expressions with `mget` and `mput`.
- Disable prompting to automate file transfers for efficiency.
- Rename files on remote servers directly via the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ftp

> Tools to interact with a server via File Transfer Protocol.
> More information: <https://manned.org/ftp>.

- Connect to an FTP server:

`ftp {{ftp.example.com}}`

- Connect to an FTP server specifying its IP address and port:

`ftp {{ip_address}} {{port}}`

- Switch to binary transfer mode (graphics, compressed files, etc):

`binary`

- Transfer multiple files without prompting for confirmation on every file:

`prompt off`

- Download multiple files (glob expression):

`mget {{*.png}}`

- Upload multiple files (glob expression):

`mput {{*.zip}}`

- Delete multiple files on the remote server:

`mdelete {{*.txt}}`

- Rename a file on the remote server:

`rename {{original_filename}} {{new_filename}}`
