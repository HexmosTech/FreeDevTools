---
title: "Remove Podman Images - Manage Container Images | Online Free DevTools by Hexmos"
name: podman-rmi
path: /freedevtools/tldr/podman/podman-rmi
canonical: "https://hexmos.com/freedevtools/tldr/podman/podman-rmi/"
description: "Remove Podman images to free up disk space with Podman RMI. Manage container images efficiently and forcefully. Free online tool, no registration required."
category: common
keywords:
- podman image removal
- container image delete
- docker image remove
- podman rmi command
- linux container management
- podman image pruning
- container image cleanup
- command line image deletion
- untagged image removal
- force remove podman image
features:
- Remove one or more Podman images by name or tag
- Force the removal of Podman images
- Remove images without deleting untagged parent images
- Manage disk space by deleting unwanted container images
- Delete container images using command-line interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# podman rmi

> Remove Podman images.
> More information: <https://docs.podman.io/en/latest/markdown/podman-rmi.1.html>.

- Remove one or more images given their names:

`podman rmi {{image:tag image2:tag ...}}`

- Force remove an image:

`podman rmi --force {{image}}`

- Remove an image without deleting untagged parents:

`podman rmi --no-prune {{image}}`

- Display help:

`podman rmi`
