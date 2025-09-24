---
title: "Bootc Manager - Control Linux OS Images | Online Free DevTools by Hexmos"
name: bootc
path: /freedevtools/tldr/linux/bootc
canonical: "https://hexmos.com/freedevtools/tldr/linux/bootc/"
description: "Control Linux OS images with Bootc Manager. Switch deployments, rollback updates, and upgrade your system in place. Free online tool, no registration required."
category: linux
keywords:
- linux bootc
- bootc manager
- container image update
- ostree deployment
- linux system upgrade
- transactional updates linux
- linux rollback tool
- oci image boot
- docker image boot
- linux boot manager
features:
- Manage transactional, in-place OS updates
- Switch OS base to new container images
- Rollback to previous ostree deployments
- Check for available OS updates
- Show bootloader deployment order
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bootc

> Boot and upgrade via container images.
> Manages transactional, in-place operating system updates using OCI/Docker container images.
> More information: <https://manned.org/bootc.8>.

- Show deployments in the order they will appear in the bootloader:

`bootc status`

- Check if any updates are available:

`bootc upgrade --check`

- Prepare a new update and reboot into it:

`bootc upgrade --apply`

- Change OS base to new container image:

`bootc switch {{image}}`

- Reboot into the previous ostree deployment:

`bootc rollback`
