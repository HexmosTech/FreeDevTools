---
title: "Distrobox Upgrade - Control Linux Containers | Free DevTools"
name: distrobox-upgrade
path: /freedevtools/tldr/linux/distrobox-upgrade
canonical: "https://hexmos.com/freedevtools/tldr/linux/distrobox-upgrade/"
description: "Upgrade Linux containers effortlessly with Distrobox Upgrade. Update single or multiple containers using native package managers. Free online tool, no registration required."
category: linux
keywords:
- linux container upgrade
- distrobox container manager
- upgrade linux containers
- distrobox upgrade tool
- container package manager upgrade
- linux command line upgrade
- distrobox container update
- shell container upgrade
- containerized environment update
- command line linux upgrade
features:
- Upgrade single distrobox containers
- Upgrade all distrobox containers simultaneously
- Utilize native package managers within containers
- Update specific container groups
- Manage container software versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# distrobox-upgrade

> Upgrade one or multiple Distrobox containers.
> See also: `distrobox`.
> More information: <https://distrobox.it/usage/distrobox-upgrade>.

- Upgrade a container using the container's native package manager:

`distrobox-upgrade {{container_name}}`

- Upgrade all containers using the container's native package managers:

`distrobox-upgrade {{[-a|--all]}}`

- Upgrade specific containers via the container's native package manager:

`distrobox-upgrade {{container1 container2 ...}}`
