---
title: "Toolbox Image Remover - Remove Images | Online Free DevTools by Hexmos"
name: toolbox-rmi
path: /freedevtools/tldr/linux/toolbox-rmi
canonical: "https://hexmos.com/freedevtools/tldr/linux/toolbox-rmi/"
description: "Remove Toolbox images quickly and easily with the toolbox rmi command.  Manage your container images efficiently. Free online tool, no registration required."
category: linux
keywords:
  - toolbox image removal
  - toolbox rmi command
  - remove toolbox images
  - delete container images
  - manage container images
  - linux container management
  - toolbox image cleanup
  - force remove toolbox images
  - all toolbox images removal
  - container image deletion
features:
  - Remove single or multiple Toolbox images.
  - Remove all Toolbox images with a single command.
  - Force removal of images used by containers.
  - Efficiently manage your Toolbox image storage.
  - Streamline your container image workflow.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# toolbox rmi

> Remove `toolbox` images.
> See also: `toolbox rm`.
> More information: <https://manned.org/toolbox-rmi.1>.

- Remove one or more `toolbox` image:

`toolbox rmi {{image_name1 image_name2 ...}}`

- Remove all `toolbox` images:

`toolbox rmi {{[-a|--all]}}`

- Force the removal of a `toolbox` image which is currently being used by a container (the container will be removed as well):

`toolbox rmi {{[-f|--force]}} {{image_name}}`
