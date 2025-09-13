---
title: "Podman Image - Manage Docker Images Easily | Free DevTools"
name: podman-image
path: /freedevtools/tldr/podman/podman-image
canonical: "https://hexmos.com/freedevtools/tldr/podman/podman-image/"
description: "Manage Docker images efficiently with Podman Image. Delete unused images, view image history, and list local images using this CLI tool. Free online tool, no registration required."
category: common
keywords:
- podman image
- docker image management
- linux container images
- podman image prune
- podman image history
- container image deletion
- local docker images
- podman image list
- container image tools
- command line image manager
features:
- List local Docker images efficiently
- Delete unused Docker images for space optimization
- Display the history of a specific Docker image
- Remove all unused images including those with tags
- Manage Docker images via command line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# podman image

> Manage Docker images.
> See also: `podman build`, `podman import`, `podman pull`.
> More information: <https://docs.podman.io/en/latest/markdown/podman-image.1.html>.

- List local Docker images:

`podman image ls`

- Delete unused local Docker images:

`podman image prune`

- Delete all unused images (not just those without a tag):

`podman image prune --all`

- Show the history of a local Docker image:

`podman image history {{image}}`
