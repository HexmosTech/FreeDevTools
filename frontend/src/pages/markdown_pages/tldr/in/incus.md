---
title: "Incus - Manage Containers & VMs | Online Free DevTools by Hexmos"
name: incus
path: /freedevtools/tldr/in/incus
canonical: "https://hexmos.com/freedevtools/tldr/in/incus/"
description: "Manage containers and virtual machines with Incus. Quickly create, start, stop, and delete containers with ease. Free online tool, no registration required."
category: common
keywords:
- incus container management
- incus virtual machine management
- linux container manager
- command line container tool
- incus image repository
- system container management
- incus command reference
- linux vm manager
- incus container cli
- incus virtual machine cli
features:
- List containers and virtual machines
- Create containers from images
- Start and stop containers
- Access containers via shell
- Copy images from remote repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# incus

> Modern, secure and powerful system container and virtual machine manager.
> More information: <https://linuxcontainers.org/incus/docs/main>.

- List all containers and virtual machines (both running and stopped):

`incus list`

- Create a container from an image, with a custom name:

`incus create {{image}} {{container_name}}`

- Start or stop an existing container:

`incus {{start|stop}} {{container_name}}`

- Open a shell inside an already running container:

`incus shell {{container_name}}`

- Remove a stopped container:

`incus delete {{container_name}}`

- Pull an image from an image repository (remote) to local:

`incus copy {{remote}}:{{image}} local:{{custom_image_name}}`

- List all available images in the official `images:` remote:

`incus image list images:`

- List all images already downloaded to the `local:` remote:

`incus image list local:`
