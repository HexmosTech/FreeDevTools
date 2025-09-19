---
title: "Route Traffic with Torsocks - Anonymize Connections | Online Free DevTools by Hexmos"
name: torsocks
path: /freedevtools/tldr/linux/torsocks
canonical: "https://hexmos.com/freedevtools/tldr/linux/torsocks/"
description: "Anonymize connections with Torsocks, route application traffic through the Tor network for enhanced security. Free online tool, no registration required."
category: linux
keywords:
- tor proxy linux
- torsocks tor network
- route traffic tor
- linux tor anonymizer
- command line tor
- tor connection manager
- tor socks proxy
- tor circuit isolation
- secure linux connection
- torsocks command
features:
- Route application traffic through the Tor network
- Enable or disable Tor in a shell session
- Spawn a new Tor-enabled shell
- Check if the current shell is Tor enabled
- Isolate traffic through a different Tor circuit
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# torsocks

> Route the traffic of any application through the Tor network.
> Note: `torsocks` will assume that it should connect to the Tor SOCKS proxy running at 127.0.0.1:9050 being the defaults of the Tor daemon.
> More information: <https://manned.org/torsocks>.

- Run a command using Tor:

`torsocks {{command}}`

- Enable or disable Tor in this shell:

`. torsocks {{on|off}}`

- Spawn a new Tor enabled shell:

`torsocks --shell`

- Check if current shell is Tor enabled (`LD_PRELOAD` value will be empty if disabled):

`torsocks show`

- Isolate traffic through a different Tor circuit, improving anonymity:

`torsocks {{[-i|--isolate]}} {{curl https://check.torproject.org/api/ip}}`

- Connect to a Tor proxy running on a specific address and port:

`torsocks {{[-a|--address]}} {{ip}} {{[-P|--port]}} {{port}} {{command}}`
