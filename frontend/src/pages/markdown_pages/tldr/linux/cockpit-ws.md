---
title: "Cockpit WS - Control Websocket Communication | Online Free DevTools by Hexmos"
name: cockpit-ws
path: /freedevtools/tldr/linux/cockpit-ws
canonical: "https://hexmos.com/freedevtools/tldr/linux/cockpit-ws/"
description: "Control websocket communication with Cockpit WS.  Manage connections, configure settings, and integrate with Cockpit Bridge. Free online tool, no registration required."
category: linux
keywords:
  - websocket communication manager
  - cockpit websocket server
  - cockpit-ws configuration
  - linux websocket server
  - cockpit bridge integration
  - websocket server management
  - secure websocket connection
  - cockpit-ws command line
  - remote websocket control
  - local websocket server
features:
  - Enables secure communication between browser and Cockpit services.
  - Allows specifying custom IP addresses and ports for binding.
  - Supports TLS encryption for secure connections.
  - Offers easy integration with Cockpit Bridge.
  - Provides a command-line interface for simple management.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cockpit-ws

> Communicate between the browser application and various configuration tools and services like `cockpit-bridge`.
> More information: <https://cockpit-project.org/guide/latest/cockpit-ws.8.html>.

- Start with authentication via SSH at `127.0.0.1` with port `22` enabled:

`cockpit-ws --local-ssh`

- Start an HTTP server on a specific port:

`cockpit-ws --port {{port}}`

- Start and bind to a specific IP address (defaults to `0.0.0.0`):

`cockpit-ws --address {{ip_address}}`

- Start without TLS:

`cockpit-ws --no-tls`

- Display help:

`cockpit-ws --help`
