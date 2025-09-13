---
title: "Docker Images - Manage Docker Images | Free DevTools"
name: docker-images
path: /freedevtools/tldr/common/docker-images
canonical: "https://hexmos.com/freedevtools/tldr/common/docker-images/"
description: "Manage Docker images effortlessly with Docker Images. List, filter, and sort Docker images to optimize container resources. Free online tool, no registration required."
category: common
keywords:
- docker images management
- docker image list
- docker image filter
- docker image sort
- docker image prune
- docker image cleanup
- container image analysis
- docker cli images
- docker image size
- docker dangling images
features:
- List all Docker images
- Filter images based on various criteria
- Sort images by size or other attributes
- Identify and remove unused Docker images
- Display image information in different formats
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker images

> Manage Docker images.
> More information: <https://docs.docker.com/reference/cli/docker/image/ls/>.

- List all Docker images:

`docker images`

- List all Docker images including intermediates:

`docker images {{[-a|--all]}}`

- List the output in quiet mode (only numeric IDs):

`docker images {{[-q|--quiet]}}`

- List all Docker images not used by any container:

`docker images {{[-f|--filter]}} dangling=true`

- List images that contain a substring in their name:

`docker images "{{*name*}}"`

- Sort images by size:

`docker images --format "\{\{.ID\}\}\t\{\{.Size\}\}\t\{\{.Repository\}\}:\{\{.Tag\}\}" | sort {{[-k|--key]}} 2 {{[-h|--human-numeric-sort]}}`
