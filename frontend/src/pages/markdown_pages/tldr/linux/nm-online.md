---
title: "Check Network Status - nm-online Command | Online Free DevTools by Hexmos"
name: nm-online
path: /freedevtools/tldr/linux/nm-online
canonical: "https://hexmos.com/freedevtools/tldr/linux/nm-online/"
description: "Check network connection status with the nm-online command.  Quickly determine network connectivity and troubleshoot issues using this simple command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - network status checker
  - networkmanager command
  - linux network command
  - nm-online command linux
  - check network connection
  - command line network tool
  - network connectivity test
  - linux system administration
  - network troubleshooting command
  - nm-online tutorial
features:
  - Determines network connection status.
  - Provides immediate output to stdout.
  - Includes a configurable timeout parameter.
  - Works seamlessly with NetworkManager.
  - Aids in quick network troubleshooting.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nm-online

> Ask NetworkManager whether the network is connected.
> More information: <https://networkmanager.pages.freedesktop.org/NetworkManager/NetworkManager/nm-online.html>.

- Find out whether the network is connected and print the result to `stdout`:

`nm-online`

- Wait `n` seconds for a connection (30 by default):

`nm-online --timeout {{n}}`
