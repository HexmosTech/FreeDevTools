---
title: "Control Virtual Machines - virt-viewer | Free DevTools"
name: virt-viewer
path: /freedevtools/tldr/unknown/virt-viewer
canonical: "https://hexmos.com/freedevtools/tldr/unknown/virt-viewer/"
description: "Control virtual machines with virt-viewer. Connect to VMs, manage connections and monitor performance. Free online tool, no registration required."
category: unknown
keywords:
- virtual machine control
- virt-viewer manager
- qemu virtual machine
- xen virtual machine
- remote VM connection
- virtual machine viewer
- linux virtual machine
- KVM virtual machine
- domain manager
- virtual machine reconnect
features:
- Launch a graphical interface for virtual machines
- Connect to virtual machines by ID, UUID or name
- Automatically reconnect to VMs after shutdown and restart
- Connect to remote VMs over TLS
- Connect to remote VMs over SSH
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virt-viewer

> Minimal graphical interface for a virtual machine (VM).
> Note: 'domain' refers to the name, UUID or ID for the existing VMs.
> See also: `virsh`.
> More information: <https://manned.org/virt-viewer>.

- Launch `virt-viewer` with a prompt to select running virtual machines:

`virt-viewer`

- Launch `virt-viewer` for a specific virtual machine by ID, UUID or name:

`virt-viewer "{{domain}}"`

- Wait for a virtual machine to start and automatically reconnect if it shutdown and restarts:

`virt-viewer --reconnect --wait "{{domain}}"`

- Connect to a specific remote virtual machine over TLS:

`virt-viewer --connect "xen//{{url}}" "{{domain}}"`

- Connect to a specific remote virtual machine over SSH:

`virt-viewer --connect "qemu+ssh//{{username}}@{{url}}/system" "{{domain}}"`
