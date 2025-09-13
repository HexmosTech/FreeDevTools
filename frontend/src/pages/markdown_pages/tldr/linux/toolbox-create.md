---
title: "Toolbox Create - Container Creation | Free DevTools"
name: toolbox-create
path: /freedevtools/tldr/linux/toolbox-create
canonical: "https://hexmos.com/freedevtools/tldr/linux/toolbox-create/"
description: "Create toolbox containers easily with the toolbox create command. Manage distributions, releases, and custom images for seamless development. Free online tool, no registration required."
category: linux
keywords:
  - linux container creation
  - toolbox container management
  - fedora toolbox image
  - custom container image
  - distro specific container
  - release specific container
  - toolbox command line
  - create linux containers
  - manage toolbox instances
  - deploy toolbox environments
features:
  - Create toolbox containers for specific distributions.
  - Create containers for specific releases of a distribution.
  - Use custom images to build toolbox containers.
  - Leverage Fedora images for container creation.
  - Employ default images for streamlined setup.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# toolbox create

> Create a new `toolbox` container.
> More information: <https://manned.org/toolbox-create.1>.

- Create a `toolbox` container for a specific distribution:

`toolbox create {{[-d|--distro]}} {{distribution}}`

- Create a `toolbox` container for a specific release of the current distribution:

`toolbox create {{[-r|--release]}} {{release}}`

- Create a `toolbox` container with a custom image:

`toolbox create {{[-i|--image]}} {{name}}`

- Create a `toolbox` container from a custom Fedora image:

`toolbox create {{[-i|--image]}} {{registry.fedoraproject.org/fedora-toolbox:39}}`

- Create a `toolbox` container using the default image for Fedora 39:

`toolbox create {{[-d|--distro]}} {{fedora}} {{[-r|--release]}} {{f39}}`
