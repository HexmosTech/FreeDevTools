---
title: "Wake-on-LAN Client - Send WoL Packets | Online Free DevTools by Hexmos"
name: wol
path: /freedevtools/tldr/linux/wol
canonical: "https://hexmos.com/freedevtools/tldr/linux/wol/"
description: "Send Wake-on-LAN magic packets with this simple client.  Manage network devices remotely using MAC address, IP, hostname or file input. Free online tool, no registration required."
category: linux
keywords:
  - wake-on-lan client
  - wol magic packet sender
  - network device control
  - remote device activation
  - mac address wake-on-lan
  - ip address wake-on-lan
  - hostname wake-on-lan
  - wol command line tool
  - network administration
  - system management
features:
  - Send Wake-on-LAN packets using MAC address.
  - Target devices via IP address or hostname.
  - Specify target port for packet transmission.
  - Read device information from configuration files.
  - Supports verbose output for detailed operation logging.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wol

> Client for sending Wake-on-LAN magic packets.
> More information: <https://sourceforge.net/projects/wake-on-lan/>.

- Send a WoL packet to a device:

`wol {{mac_address}}`

- Send a WoL packet to a device in another subnet based on its IP:

`wol {{[-i|--ipaddr]}} {{ip_address}} {{mac_address}}`

- Send a WoL packet to a device in another subnet based on its hostname:

`wol {{[-h|--host]}} {{hostname}} {{mac_address}}`

- Send a WoL packet to a specific port on a host:

`wol {{[-p|--port]}} {{port_number}} {{mac_address}}`

- Read hardware addresses, IP addresses/hostnames, optional ports and SecureON passwords from a file:

`wol {{[-f|--file]}} {{path/to/file}}`

- Turn on verbose output:

`wol {{[-v|--verbose]}} {{mac_address}}`
