---
title: "Network Control - Manage Data with Ncat | Online Free DevTools by Hexmos"
name: ncat
path: "/freedevtools/tldr/linux/ncat/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ncat/"
description: "Manage network data with Ncat. Read, write, redirect, and encrypt data across networks, replacing netcat functionality. Free online tool, no registration required."
category: linux
keywords:
  - network control
  - data transfer
  - port listener
  - network encryption
  - ncat command
  - socket communication
  - tcp connection
  - udp connection
  - network redirection
  - network debugging
features:
  - Listen for incoming connections on a specified port
  - Transfer data between hosts over a network
  - Encrypt network traffic using SSL
  - Redirect input and output streams across a network
  - Check network connectivity to a remote host
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ncat

> Read, write, redirect, and encrypt data across a network.
> An alternative implementation of a similar utility called `netcat`/`nc`.
> More information: <https://nmap.org/ncat/guide/index.html>.

- Listen for input on the specified port and write it to the specified file:

`ncat {{[-l|--listen]}} {{port}} > {{path/to/file}}`

- Accept multiple connections and keep ncat open after they have been closed:

`ncat {{[-lk|--listen --keep-open]}} {{port}}`

- Write output of specified file to the specified host on the specified port:

`ncat {{address}} {{port}} < {{path/to/file}}`

- Accept multiple incoming connections on an encrypted channel evading detection of traffic content:

`ncat --ssl {{[-k|--keep-open]}} {{[-l|--listen]}} {{port}}`

- Connect to an open `ncat` connection over SSL:

`ncat --ssl {{host}} {{port}}`

- Check connectivity to a remote host on a particular port with timeout:

`ncat {{[-w|--wait]}} {{seconds}} {{[-vz|--verbose -z]}} {{host}} {{port}}`
