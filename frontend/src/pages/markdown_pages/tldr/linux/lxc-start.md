---
title: "LXC Start - Control Linux Containers | Online Free DevTools by Hexmos"
name: lxc-start
path: /freedevtools/tldr/linux/lxc-start
canonical: "https://hexmos.com/freedevtools/tldr/linux/lxc-start/"
description: "Control Linux containers instantly with LXC Start. Manage container lifecycle, start in foreground, and stop running containers. Free online tool, no registration required."
category: linux
keywords:
- linux container start
- lxc container control
- lxc start foreground
- linux lxc service
- container management linux
- lxc command line
- lxc container stop
- lxc network configuration
- linux systemctl lxc
- virtual environment control
features:
- Start Linux containers
- Launch containers in foreground mode
- Stop running containers gracefully
- Manage lxc-net service
- Display command line help information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lxc-start

> Start a container.
> More information: <https://linuxcontainers.org/lxc/getting-started/>.

- Start the lxc service:

`systemctl start lxc-net`

- Start a container:

`sudo lxc-start {{container_name}}`

- Start a container in the foreground:

`sudo lxc-start {{container_name}} {{[-F|--foreground]}}`

- Exit out of a foreground container (run this in a separate terminal):

`sudo lxc-stop {{container_name}}`

- Display help:

`lxc-start {{[-?|--help]}}`
