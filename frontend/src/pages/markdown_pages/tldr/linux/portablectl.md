---
title: "Portablectl - Manage Portable Service Images | Online Free DevTools by Hexmos"
name: portablectl
path: /freedevtools/tldr/linux/portablectl
canonical: "https://hexmos.com/freedevtools/tldr/linux/portablectl/"
description: "Manage portable service images with portablectl, a systemd utility for deploying services on Linux. Simplify container deployment. Free online tool, no registration required."
category: linux
keywords:
  - portable service image manager
  - linux container deployment tool
  - systemd portablectl command
  - portable service image control
  - linux service management
  - portablectl attach image
  - portablectl detach image
  - portablectl inspect image
  - systemd container management
  - linux service deployment
features:
  - List available portable service images
  - Attach portable service images to a host system
  - Detach portable service images from a host system
  - Inspect details of portable service images
  - Check if a portable service image is attached
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# portablectl

> A systemd utility for managing and deploying portable service images on Linux systems.
> More information: <https://www.freedesktop.org/software/systemd/man/portablectl.html>.

- List available portable service images discovered in the portable image search paths:

`portablectl list`

- Attach a portable service image to the host system:

`portablectl attach {{path/to/image}}`

- Detach a portable service image from the host system:

`portablectl detach {{path/to/image|image_name}}`

- Display details and metadata about a specified portable service image:

`portablectl inspect {{path/to/image}}`

- Check if a portable service image is attached to the host system:

`portablectl is-attached {{path/to/image|image_name}}`
