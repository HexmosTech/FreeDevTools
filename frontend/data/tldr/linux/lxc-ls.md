---
title: "List Linux Containers - Manage LXC with lxc-ls | Online Free DevTools by Hexmos"
name: lxc-ls
path: "/freedevtools/tldr/linux/lxc-ls/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lxc-ls/"
description: "Manage Linux containers efficiently with the lxc-ls command. List, filter, and view container status with various options. Free online tool, no registration required."
category: linux
keywords:
  - linux container list
  - lxc container management
  - lxc-ls command
  - list lxc containers
  - manage linux containers
  - linux system administration
  - lxc status
  - filter lxc containers
  - lxc command line
  - container monitoring
features:
  - List all Linux containers
  - Filter containers by status (active, frozen, stopped)
  - Display container information in a formatted column view
  - Provide detailed help information on command usage
  - Efficiently manage and monitor LXC containers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lxc-ls

> List Linux containers.
> More information: <https://linuxcontainers.org/lxc/manpages/man1/lxc-ls.1.html>.

- List all containers:

`sudo lxc-ls`

- List active containers (including frozen and running):

`sudo lxc-ls --active`

- List only frozen containers:

`sudo lxc-ls --frozen`

- List only stopped containers:

`sudo lxc-ls --stopped`

- List containers in a fancy, column-based output:

`sudo lxc-ls {{[-f|--fancy]}}`

- Display help:

`lxc-ls {{[-?|--help]}}`
