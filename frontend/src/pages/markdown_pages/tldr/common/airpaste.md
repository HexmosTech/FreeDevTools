---
title: "Share Files - Send Files via Airpaste | Free DevTools"
name: airpaste
path: /freedevtools/tldr/common/airpaste
canonical: "https://hexmos.com/freedevtools/tldr/common/airpaste/"
description: "Share files quickly with Airpaste. Transfer files and messages across a local network using mDNS. Free online tool, no registration required."
category: common
keywords:
- local network file transfer
- mDNS file sharing
- command line file transfer
- network message sharing
- peer-to-peer file transfer
- cross-platform file sharing
- airpaste file transfer
- airpaste message sharing
- linux file transfer
- macos file transfer
features:
- Send text messages over a local network.
- Transfer files to other devices on the same network.
- Receive files sent via airpaste from another device.
- Create named channels for targeted communication.
- Share data directly from the command line using pipes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# airpaste

> Share messages and files on the same network using mDNS.
> More information: <https://github.com/mafintosh/airpaste>.

- Wait for a message and display it when received:

`airpaste`

- Send text:

`echo {{text}} | airpaste`

- Send a file:

`airpaste < {{path/to/file}}`

- Receive a file:

`airpaste > {{path/to/file}}`

- Create or join a channel:

`airpaste {{channel_name}}`
