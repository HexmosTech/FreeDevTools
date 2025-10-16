---
title: "Manage Containerd - Control Containers with ctr | Online Free DevTools by Hexmos"
name: ctr
path: "/freedevtools/tldr/linux/ctr/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ctr/"
description: "Control and manage containerd containers and images with the ctr command.  List, pull, and tag images easily. Free online tool, no registration required."
category: linux
keywords:
  - containerd container management
  - ctr command line tool
  - container image management
  - linux container tools
  - manage containerd images
  - list containerd containers
  - pull containerd images
  - tag containerd images
  - ctr image commands
  - containerd command-line interface
features:
  - List all running and stopped containers
  - List all available container images
  - Pull new container images from registries
  - Tag existing container images with custom names
  - Manage containerd containers and images efficiently
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ctr

> Manage `containerd` containers and images.
> More information: <https://containerd.io>.

- List all containers (running and stopped):

`ctr containers list`

- List all images:

`ctr images list`

- Pull an image:

`ctr images pull {{image}}`

- Tag an image:

`ctr images tag {{source_image}}:{{source_tag}} {{target_image}}:{{target_tag}}`
