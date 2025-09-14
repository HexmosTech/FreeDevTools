---
title: "Network Select - Choose Fastest Server | Free DevTools"
name: netselect
path: /freedevtools/tldr/linux/netselect
canonical: "https://hexmos.com/freedevtools/tldr/linux/netselect/"
description: "Select fastest network server with Netselect. Test latency and resolve nameserver efficiently. Free online tool, no registration required."
category: linux
keywords:
  - network server selector
  - netselect latency test
  - find fastest server
  - network speed test linux
  - linux network utilities
  - server latency checker
  - command line network tools
  - network server selection
  - netselect server statistics
  - choose optimal server
features:
  - Select the fastest network server from a list.
  - Display nameserver resolution and statistics.
  - Define a maximum TTL for network tests.
  - Print the n fastest servers.
  - Test network latency to different hosts.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# netselect

> Speed test for choosing a fast network server.
> More information: <https://github.com/apenwarr/netselect>.

- Choose the server with the lowest latency:

`sudo netselect {{host_1 host_2 ...}}`

- Display nameserver resolution and statistics:

`sudo netselect -vv {{host_1 host_2 ...}}`

- Define maximum TTL (time to live):

`sudo netselect -m {{10}} {{host_1 host_2 ...}}`

- Print `n` fastest servers among the hosts:

`sudo netselect -s {{n}} {{host_1 host_2 host_3 ...}}`

- Display help:

`netselect`
