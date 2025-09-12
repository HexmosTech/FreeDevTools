---
title: "Systemd STDIO Bridge - Proxy STDIO to D-Bus | Free DevTools"
name: systemd-stdio-bridge
path: /freedevtools/tldr/unknown/systemd-stdio-bridge
canonical: "https://hexmos.com/freedevtools/tldr/unknown/systemd-stdio-bridge/"
description: "Proxy STDIO to D-Bus with Systemd STDIO Bridge. Manage system communication and forward stdin/stdout data. Free online tool, no registration required."
category: unknown
keywords:
- Systemd STDIO bridge
- D-Bus proxy
- Systemd communication
- STDIO forwarding
- Linux systemd
- Command-line bridge
- Process communication
- Systemd socket
- D-Bus connection
- Systemd container
features:
- Forward stdin/stdout to system D-Bus.
- Bridge STDIO to a user's D-Bus session.
- Connect to a D-Bus within a specific container.
- Forward STDIO to a custom D-Bus address.
- Create a proxy between standard input/output and D-Bus.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-stdio-bridge

> Implement a proxy between `stdin`/`stdout` and a D-Bus.
> Note: It expects to receive an open connection via `stdin`/`stdout` when started, and will create a new connection to the specified bus.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-stdio-bridge.html>.

- Forward `stdin`/`stdout` to the local system bus:

`systemd-stdio-bridge`

- Forward `stdin`/`stdout` to a specific user's D-Bus:

`systemd-stdio-bridge --{{user}}`

- Forward `stdin`/`stdout` to the local system bus within a specific container:

`systemd-stdio-bridge {{[-M|--machine]}} {{mycontainer}}`

- Forward `stdin`/`stdout` to a custom D-Bus address:

`systemd-stdio-bridge {{[-p|--bus-path]}} unix:path={{/custom/dbus/socket}}`
