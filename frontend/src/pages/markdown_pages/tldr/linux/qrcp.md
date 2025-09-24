---
title: "Transfer Files via QR - qrcp | Online Free DevTools by Hexmos"
name: qrcp
path: /freedevtools/tldr/linux/qrcp
canonical: "https://hexmos.com/freedevtools/tldr/linux/qrcp/"
description: "Transfer files easily with qrcp using QR codes. Secure file transfer across devices using command-line. Free online tool, no registration required."
category: linux
keywords:
  - QR code file transfer
  - command line file transfer
  - secure file transfer
  - cross platform file transfer
  - network file transfer
  - qrcp send
  - qrcp receive
  - terminal file transfer
  - adhoc file sharing
  - local file transfer
features:
  - Transfer files and directories via QR code
  - Receive files from a device using QR code
  - Compress content before transferring for faster speeds
  - Specify a custom port for file transfer
  - Keep the server alive for multiple transfers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qrcp

> A file transfer tool.
> More information: <https://github.com/claudiodangelis/qrcp>.

- Send a file or directories:

`qrcp send {{path/to/file_or_directory path/to/file_directory ...}}`

- Receive files:

`qrcp receive`

- Compress content before transferring:

`qrcp send --zip {{path/to/file_or_directory}}`

- Use a specific port:

`qrcp {{send|receive}} {{[-p|--port]}} {{port_number}}`

- Use a specific network interface:

`qrcp {{send|receive}} {{[-i|--interface]}} {{interface}}`

- Keep the server alive:

`qrcp {{send|receive}} --keep-alive`
