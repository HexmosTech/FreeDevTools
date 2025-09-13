---
title: "PCT Status - Control Container Status | Free DevTools"
name: pct-status
path: /freedevtools/tldr/linux/pct-status
canonical: "https://hexmos.com/freedevtools/tldr/linux/pct-status/"
description: "Control container status with PCT Status. Monitor resource usage, identify problems, and manage Proxmox containers. Free online tool, no registration required."
category: linux
keywords:
  - Proxmox container status
  - container status check
  - pct status command
  - Proxmox container monitoring
  - virtualization status
  - lxc container status
  - container resource usage
  - pct status verbose
  - Proxmox command line tool
  - pct status check
features:
  - Display the running status of a Proxmox container
  - Show detailed information about a container's resources
  - Monitor container performance metrics
  - Provide an overview of the container's configuration
  - Enable verbose output for in-depth troubleshooting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pct status

> Display the status of a container.
> More information: <https://pve.proxmox.com/pve-docs/pct.1.html>.

- Display if the container is running:

`pct status {{100}}`

- Display detailed container information:

`pct status {{100}} --verbose`
