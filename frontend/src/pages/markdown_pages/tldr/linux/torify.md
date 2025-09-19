---
title: "Torify - Route Network Traffic Through Tor | Online Free DevTools by Hexmos"
name: torify
path: /freedevtools/tldr/linux/torify
canonical: "https://hexmos.com/freedevtools/tldr/linux/torify/"
description: "Route network traffic securely with Torify.  This command-line tool provides anonymous browsing and enhances privacy. Free online tool, no registration required."
category: linux
keywords:
  - tor network routing
  - torify command
  - tor socks proxy
  - linux torify
  - tor anonymity
  - command-line tor
  - tor network traffic
  - torify shell
  - tor configuration
  - tor security
features:
  - Routes network traffic through the Tor network for enhanced anonymity.
  - Provides a wrapper for torsocks for backward compatibility.
  - Allows toggling Tor access within a shell session.
  - Enables launching a Tor-enabled shell environment.
  - Supports specifying custom Tor configuration files and SOCKS proxies.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# torify

> Route network traffic through the Tor network.
> Note: This command has been deprecated, and is now a backwards-compatible wrapper of `torsocks`.
> More information: <https://manned.org/torify>.

- Route traffic via Tor:

`torify {{command}}`

- Toggle Tor in shell:

`torify {{on|off}}`

- Spawn a Tor-enabled shell:

`torify --shell`

- Check for a Tor-enabled shell:

`torify show`

- Specify Tor configuration file:

`torify -c {{config-file}} {{command}}`

- Use a specific Tor SOCKS proxy:

`torify -P {{proxy}} {{command}}`

- Redirect output to a file:

`torify {{command}} > {{path/to/output}}`
