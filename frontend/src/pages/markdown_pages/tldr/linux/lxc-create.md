---
title: "Create Linux Containers with lxc-create | Online Free DevTools by Hexmos"
name: lxc-create
path: /freedevtools/tldr/linux/lxc-create
canonical: "https://hexmos.com/freedevtools/tldr/linux/lxc-create/"
description: "Create Linux containers easily with lxc-create.  Manage container creation, specifying templates and options for customized deployments. Free online tool, no registration required."
category: linux
keywords:
  - linux container creation
  - lxc container creation
  - lxc-create command
  - linux container management
  - create lxc containers
  - linux system administration
  - lxc template options
  - container deployment linux
  - manage linux containers
  - lxc interactive creation
features:
  - Create Linux containers from templates.
  - Specify container name and location.
  - Use pre-defined templates for faster setup.
  - Customize container creation with template options.
  - Create containers interactively or via command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lxc-create

> Create linux containers.
> More information: <https://linuxcontainers.org/lxc/getting-started/>.

- Create a container interactively in `/var/lib/lxc/`:

`sudo lxc-create {{[-n|--name]}} {{container_name}} {{[-t|--template]}} download`

- Create a container in a target directory:

`sudo lxc-create {{[-P|--lxcpath]}} /{{path/to/directory}}/ {{[-n|--name]}} {{container_name}} {{[-t|--template]}} download`

- Create a container passing options to a template:

`sudo lxc-create {{[-n|--name]}} {{container_name}} {{[-t|--template]}} download -- {{[-d|--dist]}} {{distro-name}} {{[-r|--release]}} {{release-version}} {{[-a|--arch]}} {{arch}}`

- Display help:

`lxc-create {{[-?|--help]}}`
