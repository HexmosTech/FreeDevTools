---
title: "PCT Create - Generate LXC Containers in Proxmox | Online Free DevTools by Hexmos"
name: pct-create
path: /freedevtools/tldr/linux/pct-create
canonical: "https://hexmos.com/freedevtools/tldr/linux/pct-create/"
description: "Generate LXC containers with PCT Create. Manage and configure Proxmox containers with ease. Free online tool, no registration required."
category: linux
keywords:
- proxmox lxc container create
- lxc container creation linux
- proxmox container generator
- linux container configuration
- pct create command proxmox
- proxmox pct management
- container virtualization linux
- lxc container deployment
- proxmox command line tools
- pct create template
features:
- Create LXC containers from templates
- Configure container memory limits
- Assign hostnames and passwords to containers
- Configure container networking
- Start containers immediately after creation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pct create

> Create LXC containers in Proxmox.
> More information: <https://pve.proxmox.com/pve-docs/pct.1.html>.

- Create a container from a template with 4GB size, give it 512MiB of memory and unlimited access to CPU:

`pct {{[cr|create]}} {{100}} {{local:vztmpl/distro-name.tar.zst}} --rootfs {{local-lvm}}:4`

- Create a container from a template and give it a specific memory limit in megabytes:

`pct {{[cr|create]}} {{100}} {{local:vztmpl/distro-name.tar.zst}} --rootfs {{local-lvm}}:{{4}} --memory {{8192}}`

- Create a container from a template and give it a hostname and a password:

`pct {{[cr|create]}} {{100}} {{local:vztmpl/distro-name.tar.zst}} --rootfs {{local-lvm}}:{{4}} --hostname {{hostname}} --password {{password}}`

- Create a container from a template and give it network access:

`pct {{[cr|create]}} {{100}} {{local:vztmpl/distro-name.tar.zst}} --rootfs {{local-lvm}}:{{4}} --net0 name={{eth0}},bridge={{vmbr0}},ip={{dhcp|manual|10.0.0.1/24}} --features nesting=1`

- Start a container immediately after creation:

`pct {{[cr|create]}} {{100}} {{local:vztmpl/distro-name.tar.zst}} --rootfs {{local-lvm}}:{{4}} --start`
