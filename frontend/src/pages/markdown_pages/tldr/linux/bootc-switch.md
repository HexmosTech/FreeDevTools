---
title: "Bootc Switch - Change OS Image | Online Free DevTools by Hexmos"
name: bootc-switch
path: /freedevtools/tldr/linux/bootc-switch
canonical: "https://hexmos.com/freedevtools/tldr/linux/bootc-switch/"
description: "Switch operating systems with Bootc. Target new container images and update your system seamlessly. Free online tool, no registration required."
category: linux
keywords:
  - container image switch
  - bootable image update
  - os image deployment
  - bootc image management
  - linux image switch
  - container image deployment
  - bootable container management
  - operating system update command
  - linux bootable image
  - container image boot
features:
  - Switch to a new container image as the base OS
  - Target images from a container registry
  - Use local container storage as an image source
  - Deploy images directly from a tarball
  - Update the bootable system image
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bootc switch

> Target a new container image reference to boot.
> More information: <https://manned.org/bootc-switch.8>.

- Change the base OS to a new container image from a registry:

`sudo bootc switch {{image}}`

- Change the base OS to a new container image from the local image storage of the root user:

`sudo bootc switch --transport containers-storage {{image}}`

- Change the base OS to a new container image stored in a tarball:

`sudo bootc switch --transport oci-archive {{path/to/image.tar.gz}}`
