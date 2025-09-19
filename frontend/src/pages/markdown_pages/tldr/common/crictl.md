---
title: "Crictl - Control Container Runtimes | Online Free DevTools by Hexmos"
name: crictl
path: /freedevtools/tldr/common/crictl
canonical: "https://hexmos.com/freedevtools/tldr/common/crictl/"
description: "Control container runtimes with Crictl. Inspect pods, manage images and execute commands inside containers. Free online tool, no registration required."
category: common
keywords:
- container runtime interface
- crictl command line tool
- kubernetes container management
- docker container runtime
- pod management crictl
- container image inspection
- cri tools linux
- kubernetes node debugging
- crictl container logs
- container runtime commands
features:
- List Kubernetes pods and their status.
- Inspect details of running containers.
- Execute commands within a container.
- Pull container images from a registry.
- Manage and remove container images.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crictl

> Manage CRI-compatible container runtimes.
> More information: <https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md>.

- List all kubernetes pods (Ready and NotReady):

`crictl pods`

- List all containers (Running and Exited):

`crictl ps {{[-a|--all]}}`

- List all images:

`crictl images`

- Print information about specific containers:

`crictl inspect {{container_id1 container_id2 ...}}`

- Open a specific shell inside a running container:

`crictl exec {{[-it|--interactive --tty]}} {{container_id}} {{sh}}`

- Pull a specific image from a registry:

`crictl pull {{image:tag}}`

- Print and follow logs of a specific container:

`crictl logs {{[-f|--follow]}} {{container_id}}`

- Remove one or more images:

`crictl rmi {{image_id1 image_id2 ...}}`
