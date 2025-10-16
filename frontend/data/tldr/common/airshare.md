---
title: "AirShare - Transfer Data Locally | Online Free DevTools by Hexmos"
name: airshare
path: "/freedevtools/tldr/common/airshare/"
canonical: "https://hexmos.com/freedevtools/tldr/common/airshare/"
description: "Transfer data with AirShare, the local network file sharing tool. Quickly share files between devices without internet. Free online tool, no registration required."
category: common
keywords:
- local file transfer
- network data sharing
- airshare command line
- cross platform file transfer
- wireless file sharing
- lan file transfer tool
- peer to peer file transfer
- file transfer cli
- airshare linux
- airshare macos
features:
- Share files and directories over a local network
- Receive files using a generated code
- Host a receiving server for web uploads
- Send files from clipboard paths
- Copy received files directly to clipboard
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# airshare

> Transfer data between two machines in a local network.
> More information: <https://airshare.rtfd.io/en/latest/cli.html>.

- Share files or directories:

`airshare {{code}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Receive a file:

`airshare {{code}}`

- Host a receiving server (use this to be able to upload files using the web interface):

`airshare --upload {{code}}`

- Send files or directories to a receiving server:

`airshare --upload {{code}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Send files whose paths have been copied to the clipboard:

`airshare --file-path {{code}}`

- Receive a file and copy it to the clipboard:

`airshare --clip-receive {{code}}`
