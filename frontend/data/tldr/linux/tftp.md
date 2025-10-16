---
title: "TFTP Client - Transfer Files with TFTP | Online Free DevTools by Hexmos"
name: tftp
path: "/freedevtools/tldr/linux/tftp/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/tftp/"
description: "Transfer files efficiently with the TFTP client. Upload and download files to/from servers using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - tftp client
  - tftp transfer
  - tftp upload
  - tftp download
  - tftp server
  - tftp commands
  - file transfer protocol
  - network file transfer
  - tftp binary mode
  - tftp ascii mode
features:
  - Upload files to a TFTP server.
  - Download files from a TFTP server.
  - Specify server IP address and port.
  - Set transfer mode to binary or ASCII.
  - Use IPv6 for connection.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tftp

> Trivial File Transfer Protocol client.
> More information: <https://manned.org/tftp.1>.

- Connect to a TFTP server specifying its IP address and port:

`tftp {{server_ip}} {{port}}`

- Connect to a TFTP server and execute a TFTP [c]ommand:

`tftp {{server_ip}} -c {{command}}`

- Connect to a TFTP server using IPv6 and force originating port to be in [R]ange:

`tftp {{server_ip}} -6 -R {{port}}:{{port}}`

- Set the transfer mode to binary or ASCIi through the tftp client:

`mode {{binary|ascii}}`

- Download file from a server through the tftp client:

`get {{file}}`

- Upload file to a server through the tftp client:

`put {{file}}`

- Exit the tftp client:

`quit`
