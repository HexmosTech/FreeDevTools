---
title: "Croc Transfer - Securely Send Files | Free DevTools"
name: croc
path: /freedevtools/tldr/common/croc
canonical: "https://hexmos.com/freedevtools/tldr/common/croc/"
description: "Transfer files securely with Croc! Quickly send and receive files of any size across networks using a passphrase. Free online tool, no registration required."
category: common
keywords:
- croc file transfer
- secure file transfer
- command-line file transfer
- cross-platform file transfer
- croc relay transfer
- encrypted file transfer
- terminal file transfer
- local network file transfer
- croc transfer linux
- croc transfer macos
features:
- Send files and directories securely
- Receive files using a passphrase
- Transfer data over a custom relay
- Host a relay for enhanced connectivity
- Send data cross-platform using command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# croc

> Send and receive files easily and securely over any network.
> More information: <https://github.com/schollz/croc>.

- Send a file or directory:

`croc send {{path/to/file_or_directory}}`

- Send a file or directory with a specific passphrase:

`croc send {{[-c|--code]}} {{passphrase}} {{path/to/file_or_directory}}`

- Receive a file or directory on receiving machine:

`croc {{passphrase}}`

- Send and connect over a custom relay:

`croc --relay {{ip_to_relay}} send {{path/to/file_or_directory}}`

- Receive and connect over a custom relay:

`croc --relay {{ip_to_relay}} {{passphrase}}`

- Host a croc relay on the default ports:

`croc relay`

- Display parameters and options for a croc command:

`croc {{send|relay}} --help`
