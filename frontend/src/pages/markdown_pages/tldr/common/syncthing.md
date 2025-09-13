---
title: "Syncthing - Synchronize Folders Bidirectionally | Free DevTools"
name: syncthing
path: /freedevtools/tldr/common/syncthing
canonical: "https://hexmos.com/freedevtools/tldr/common/syncthing/"
description: "Synchronize folders with Syncthing, a continuous, bidirectional, decentralised file synchronization tool. Securely share files across devices. Free online tool, no registration required."
category: common
keywords:
- decentralised file sync
- syncthing folder synchronization
- cross-platform file sharing
- bidirectional data syncing
- continuous file backup
- secure file transfer
- syncthing linux
- syncthing windows
- syncthing macos
- real-time folder synchronization
features:
- Synchronize folders between multiple devices bidirectionally
- Configure home directory for syncthing process
- Pause and resume device synchronization
- Adjust the web interface listening address
- Set the log level for debugging
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# syncthing

> Continuous bidirectional decentralised folder synchronisation tool.
> More information: <https://docs.syncthing.net/users/syncthing.html>.

- Start Syncthing:

`syncthing`

- Start Syncthing without opening a web browser:

`syncthing --no-browser`

- Change the home directory:

`syncthing --home {{path/to/directory}}`

- Run Syncthing with increased logging:

`syncthing --verbose`

- Pause all devices:

`syncthing cli config devices pause --all`

- Resume all devices:

`syncthing cli config devices resume --all`

- Change the address upon which the web interface listens:

`syncthing --gui-address {{ip_address:port|path/to/socket.sock}}`

- Set the log level for output:

`syncthing --log-level {{info|warning|error|debug}}`
