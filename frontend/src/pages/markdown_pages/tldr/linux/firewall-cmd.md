---
title: "Control Firewall with firewall-cmd - Manage Network Security | Online Free DevTools by Hexmos"
name: firewall-cmd
path: /freedevtools/tldr/linux/firewall-cmd
canonical: "https://hexmos.com/freedevtools/tldr/linux/firewall-cmd/"
description: "Manage network security with firewall-cmd, the command-line firewall interface.  Configure firewall rules, zones, and services easily. Free online tool, no registration required."
category: linux
keywords:
  - firewall command line
  - linux firewall management
  - firewalld configuration
  - network security command
  - firewall zone control
  - iptables alternative
  - systemd firewall
  - firewall rule editor
  - port management firewall
  - dynamic firewall rules
features:
  - Manage firewall zones and their associated rules.
  - Add, remove, and modify firewall rules permanently.
  - Control network interfaces and their access levels.
  - Configure port forwarding for incoming connections.
  - Implement emergency "panic" mode to block all traffic.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# firewall-cmd

> The firewalld command-line client.
> View and adapt the runtime or permanent firewall configuration state.
> More information: <https://firewalld.org/documentation/man-pages/firewall-cmd>.

- View all available firewall zones and rules in their runtime configuration state:

`firewall-cmd --list-all-zones`

- Permanently move the interface into the block zone, effectively blocking all communication:

`firewall-cmd --permanent --zone {{block}} --change-interface {{enp1s0}}`

- Permanently open the port for a service in the specified zone (like port 443 when in the `public` zone):

`firewall-cmd --permanent --zone {{public}} --add-service {{https}}`

- Permanently close the port for a service in the specified zone (like port 80 when in the `public` zone):

`firewall-cmd --permanent --zone {{public}} --remove-service {{http}}`

- Permanently forward a port for incoming packets in the specified zone (like port 443 to 8443 when entering the `public` zone):

`firewall-cmd --permanent --zone {{public}} --add-rich-rule 'rule family "{{ipv4|ipv6}}" forward-port port "{{443}}" protocol "{{udp|tcp}}" to-port "{{8443}}"'`

- Reload firewalld to lose any runtime changes and force the permanent configuration to take effect immediately:

`firewall-cmd --reload`

- Save the runtime configuration state to the permanent configuration:

`firewall-cmd --runtime-to-permanent`

- Enable panic mode in case of Emergency. All traffic is dropped, any active connection will be terminated:

`firewall-cmd --panic-on`
