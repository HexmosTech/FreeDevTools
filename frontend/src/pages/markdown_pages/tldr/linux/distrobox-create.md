---
title: "Create Distrobox Containers - Linux Containerization | Free DevTools"
name: distrobox-create
path: /freedevtools/tldr/linux/distrobox-create
canonical: "https://hexmos.com/freedevtools/tldr/linux/distrobox-create/"
description: "Create Distrobox containers easily with distrobox-create.  Manage and clone Linux containers seamlessly for improved development workflow. Free online tool, no registration required."
category: linux
keywords:
  - linux container creation
  - distrobox container management
  - linux container cloning
  - create distrobox instances
  - manage linux containers
  - distrobox image usage
  - linux system containerization
  - distrobox command line tool
  - container creation linux
  - ubuntu container setup
features:
  - Create new Distrobox containers from various images.
  - Clone existing Distrobox containers for rapid deployment.
  - Seamless integration with the host system for resource sharing.
  - Support for graphical applications (X11/Wayland).
  - Enables sharing of HOME directory, storage, and USB devices.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# distrobox-create

> Create a Distrobox container.
> The container created will be tightly integrated with the host, allowing sharing of the user's HOME directory, external storage, external USB devices, graphical apps (X11/Wayland), and audio.
> See also: `distrobox`.
> More information: <https://distrobox.it/usage/distrobox-create>.

- Create a Distrobox container using the Ubuntu image:

`distrobox-create {{container_name}} {{[-i|--image]}} {{ubuntu:latest}}`

- Clone a Distrobox container:

`distrobox-create {{[-c|--clone]}} {{container_name}} {{cloned_container_name}}`
