---
title: "Telnet - Connect to Remote Host | Free DevTools"
name: telnet
path: /freedevtools/tldr/common/telnet
canonical: "https://hexmos.com/freedevtools/tldr/common/telnet/"
description: "Connect with Telnet to manage remote connections on various hosts. Access systems and transmit data using the Telnet protocol. Free online tool, no registration required."
category: common
keywords:
- telnet connection
- remote access telnet
- network telnet
- telnet client
- linux telnet
- macos telnet
- windows telnet
- terminal telnet
- command line telnet
- telnet protocol
features:
- Establish connections to remote hosts via Telnet.
- Specify custom ports for Telnet connections.
- Terminate Telnet sessions gracefully.
- Use custom escape characters for session control.
- Access Star Wars ASCII animations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# telnet

> Connect to a specified port of a host using the telnet protocol.
> More information: <https://manned.org/telnet>.

- Telnet to the default port of a host:

`telnet {{host}}`

- Telnet to a specific port of a host:

`telnet {{ip_address}} {{port}}`

- Exit a telnet session:

`quit`

- Emit the default escape character combination for terminating the session:

`<Ctrl ]>`

- Start `telnet` with "x" as the session termination character:

`telnet {{[-e|--escape]}} {{x}} {{ip_address}} {{port}}`

- Telnet to Star Wars animation:

`telnet {{towel.blinkenlights.nl}}`
