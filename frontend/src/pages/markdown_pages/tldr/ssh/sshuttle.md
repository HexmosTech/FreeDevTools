---
title: "Tunnel Traffic - Control SSH Tunnels with sshuttle | Free DevTools"
name: sshuttle
path: /freedevtools/tldr/ssh/sshuttle
canonical: "https://hexmos.com/freedevtools/tldr/ssh/sshuttle/"
description: "Control network traffic with sshuttle, creating secure SSH tunnels effortlessly. Forward TCP, DNS, and other protocols. Free online tool, no registration required."
category: common
keywords:
- SSH tunnel traffic control
- SSH proxy server
- Network traffic tunneling
- SSH connection forwarding
- Rootless SSH tunneling
- TCP traffic over SSH
- DNS forwarding over SSH
- Transparent proxy server
- Linux SSH tunnel
- MacOS SSH tunnel
features:
- Forward all IPv4 TCP traffic via SSH.
- Forward DNS traffic via remote SSH server.
- Exclude specific subnets from SSH tunnel.
- Use tproxy method for IPv4 and IPv6 tunneling.
- Establish transparent proxy server connection.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sshuttle

> Transparent proxy server that tunnels traffic over an SSH connection.
> Doesn't require root or any special setup on the remote SSH server, though root access on the local machine is prompted for.
> More information: <https://manned.org/sshuttle>.

- Forward all IPv4 TCP traffic via a remote SSH server:

`sshuttle {{[-r|--remote]}} {{username}}@{{sshserver}} {{0.0.0.0/0}}`

- Also forward all DNS traffic to the server's default DNS resolver:

`sshuttle --dns {{[-r|--remote]}} {{username}}@{{sshserver}} {{0.0.0.0/0}}`

- Forward all traffic except that which is bound for a specific subnet:

`sshuttle {{[-r|--remote]}} {{username}}@{{sshserver}} {{0.0.0.0/0}} {{[-x|--exclude]}} {{192.168.0.1/24}}`

- Use the tproxy method to forward all IPv4 and IPv6 traffic:

`sshuttle --method tproxy {{[-r|--remote]}} {{username}}@{{sshserver}} {{0.0.0.0/0}} {{::/0}} {{[-x|--exclude]}} {{your_local_ip_address}} {{[-x|--exclude]}} {{ssh_server_ip_address}}`
