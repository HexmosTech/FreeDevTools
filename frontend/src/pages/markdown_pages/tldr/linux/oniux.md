---
title: "Isolate Applications - Control Network Traffic with Oniux | Free DevTools"
name: oniux
path: /freedevtools/tldr/unknown/oniux
canonical: "https://hexmos.com/freedevtools/tldr/unknown/oniux/"
description: "Isolate applications with Oniux. Torify any application and route traffic securely over the Tor network for enhanced privacy and security. Free online tool, no registration required."
category: unknown
keywords:
- Application Isolation
- Tor Network Router
- Oniux Torify
- Network Privacy Control
- Secure Application Routing
- Command Line Tor
- Onion Site Access
- Traffic Anonymization
- Linux Network Isolation
- Application Security
features:
- Isolate any application's network traffic
- Route traffic over the Tor network for anonymity
- Query websites and onion sites securely
- Run an entire shell in a "torified" environment
- Isolate graphical applications in desktop environments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# oniux

> Isolate an arbitrary application and route traffic over the Tor network.
> Note: This is experimental software.
> More information: <https://gitlab.torproject.org/tpo/core/oniux>.

- Isolate an application:

`oniux {{command}}`

- Query a website:

`oniux curl {{https://example.com}}`

- Query an onion site:

`oniux curl {{http://example.onion}}`

- Run an entire shell in "torified" isolation:

`oniux bash`

- Isolate graphical applications in desktop environments:

`oniux hexchat`
