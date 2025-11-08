---
title: "Proxmox Control - Manage VE Cluster | Online Free DevTools by Hexmos"
name: pvecm
path: "/freedevtools/tldr/linux/pvecm/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pvecm/"
description: "Control Proxmox VE Clusters with pvecm. Manage nodes, display status, and generate configurations with ease. Free online tool, no registration required."
category: linux
keywords:
- proxmox cluster manager
- ve cluster control
- linux cluster management
- pvecm command
- proxmox ve command line
- cluster node management
- proxmox status display
- proxmox configuration
- proxmox cluster api
- proxmox ve cluster
features:
- Add nodes to an existing Proxmox VE cluster
- Generate new cluster configurations easily
- Remove nodes from a Proxmox VE cluster
- Display the local view of the cluster nodes
- Display the local view of the cluster status
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pvecm

> Proxmox VE Cluster Manager.
> More information: <https://pve.proxmox.com/pve-docs/pvecm.1.html>.

- Add the current node to an existing cluster:

`pvecm add {{hostname_or_ip}}`

- Add a node to the cluster configuration (internal use):

`pvecm {{[addn|addnode]}} {{node}}`

- Display the version of the cluster join API available on this node:

`pvecm {{[ap|apiver]}}`

- Generate new cluster configuration:

`pvecm {{[c|create]}} {{clustername}}`

- Remove a node from the cluster configuration:

`pvecm {{[d|delnode]}} {{node}}`

- Display the local view of the cluster nodes:

`pvecm {{[n|nodes]}}`

- Display the local view of the cluster status:

`pvecm {{[s|status]}}`
