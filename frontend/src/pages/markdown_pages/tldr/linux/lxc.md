---
title: "LXC Container Manager - Control Linux Containers | Free DevTools"
name: lxc
path: /freedevtools/tldr/linux/lxc
canonical: "https://hexmos.com/freedevtools/tldr/linux/lxc/"
description: "Control Linux containers with LXC Container Manager. Easily manage, start, stop, and snapshot your containers using the command line. Free online tool, no registration required."
category: linux
keywords:
  - linux container manager
  - lxc container control
  - lxc command line
  - linux container management
  - lxc container snapshot
  - lxc container start
  - lxc container stop
  - lxc image management
  - lxc command reference
  - linux container command
features:
  - List available LXC containers locally
  - Manage LXC container images remotely
  - Create new containers from existing images
  - Start and stop LXC containers instantly
  - Execute commands inside existing LXC containers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lxc

> Manage Linux containers using the lxd REST API.
> Any container names or patterns can be prefixed with the name of a remote server.
> More information: <https://manned.org/lxc>.

- List local containers matching a string. Omit the string to list all local containers:

`lxc list {{match_string}}`

- List images matching a string. Omit the string to list all images:

`lxc image list [{{remote}}:]{{match_string}}`

- Create a new container from an image:

`lxc init [{{remote}}:]{{image}} {{container}}`

- Start a container:

`lxc start [{{remote}}:]{{container}}`

- Stop a container:

`lxc stop [{{remote}}:]{{container}}`

- Show detailed info about a container:

`lxc info [{{remote}}:]{{container}}`

- Take a snapshot of a container:

`lxc snapshot [{{remote}}:]{{container}} {{snapshot}}`

- Execute a specific command inside a container:

`lxc exec [{{remote}}:]{{container}} {{command}}`
