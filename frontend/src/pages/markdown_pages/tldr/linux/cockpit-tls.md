---
title: "Control Cockpit TLS - Encrypt Traffic | Free DevTools"
name: cockpit-tls
path: "/freedevtools/tldr/unknown/cockpit-tls"
canonical: "https://hexmos.com/freedevtools/tldr/unknown/cockpit-tls/"
description: "Control Cockpit TLS connections to encrypt traffic between client and cockpit-ws. Secure your cockpit server with this free tool, no registration required."
category: unknown
keywords:
- cockpit tls encryption
- cockpit tls proxy
- cockpit secure connection
- cockpit traffic encryption
- cockpit port configuration
- linux tls proxy
- cockpit-ws tls
- secure web server
- http traffic encryption
- cockpit security
features:
- Terminate TLS for cockpit-ws connections
- Encrypt traffic between client and cockpit-ws
- Serve HTTP requests on a custom port
- Secure Cockpit web server communication
- Provide a secure proxy for cockpit-ws
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cockpit-tls

> TLS terminating HTTP proxy to encrypt traffic between a client and `cockpit-ws`.
> More information: <https://cockpit-project.org/guide/latest/cockpit-tls.8.html>.

- Serve HTTP requests to a specific port instead of port `9090`:

`cockpit-tls --port {{port}}`

- Display help:

`cockpit-tls --help`
