---
title: "Guacamole Proxy - Control Remote Desktops | Online Free DevTools by Hexmos"
name: guacd
path: /freedevtools/tldr/common/guacd
canonical: "https://hexmos.com/freedevtools/tldr/common/guacd/"
description: "Control remote desktops with Guacamole Proxy. Connect to RDP, VNC, and other protocols securely and efficiently. Free online tool, no registration required."
category: common
keywords:
- Guacamole proxy
- remote desktop protocol
- RDP proxy
- VNC proxy
- guacd daemon
- Linux guacamole
- network proxy
- client plugin interface
- remote access control
- guacd configuration
features:
- Proxy connections to remote desktops using Guacamole protocol
- Interface with RDP, VNC, and other protocols via plugins
- Bind to specific ports for secure local access
- Enable TLS support for encrypted communication
- Write process ID to a file for management
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# guacd

> Apache Guacamole proxy daemon.
> Support loader for client plugins to interface between the Guacamole protocol and any arbitrary remote desktop protocol (e.g. RDP, VNC, Other).
> More information: <https://manned.org/guacd>.

- Bind to a specific port on localhost:

`guacd -b {{127.0.0.1}} -l {{4823}}`

- Start in debug mode, keeping the process in the foreground:

`guacd -f -L {{debug}}`

- Start with TLS support:

`guacd -C {{my-cert.crt}} -K {{my-key.pem}}`

- Write the PID to a file:

`guacd -p {{path/to/file.pid}}`
