---
title: "Socket Activate - Control Systemd Services | Online Free DevTools by Hexmos"
name: systemd-socket-activate
path: /freedevtools/tldr/linux/systemd-socket-activate
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-socket-activate/"
description: "Control systemd services instantly with systemd-socket-activate. Manage socket activation and pass environment variables with this command line tool. Free online tool, no registration required."
category: linux
keywords:
- systemd socket activation
- systemd service management
- linux socket management
- socket activation command
- systemd service control
- linux service manager
- systemd activation tool
- linux socket activate
- systemd configuration
- service environment variables
features:
- Activate services via socket connections
- Manage multiple sockets for a single service
- Pass environment variables to activated services
- Activate services alongside notification sockets
- Specify custom ports for service activation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-socket-activate

> Socket activation for systemd services.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-socket-activate.html>.

- Activate a service when a specific socket is connected:

`systemd-socket-activate {{path/to/socket.service}}`

- Activate multiple sockets for a service:

`systemd-socket-activate {{path/to/socket1.service}} {{path/to/socket2.service}}`

- Pass environment variables to the service being activated:

`{{SYSTEMD_SOCKET_ACTIVATION=1}} systemd-socket-activate {{path/to/socket.service}}`

- Activate a service along with a notification socket:

`systemd-socket-activate {{path/to/socket.socket}} {{path/to/service.service}}`

- Activate a service with a specified port:

`systemd-socket-activate {{path/to/socket.service}} {{[-l|--listen]}} {{8080}}`
