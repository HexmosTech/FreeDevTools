---
title: "Docker Save - Export Docker Images to Tar Archives | Online Free DevTools by Hexmos"
name: docker-save
path: /freedevtools/tldr/docker/docker-save
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-save/"
description: "Export Docker images effortlessly with Docker Save. Archive images to tar files for easy sharing and backup. Free online tool, no registration required."
category: common
keywords:
- docker image archive
- docker save image
- docker export image
- docker image backup
- docker image to tar
- docker image sharing
- docker image management
- linux docker save
- windows docker save
- macos docker save
features:
- Save Docker images to a tar archive
- Export specific image tags
- Archive all tags of an image
- Save images directly to a file
- Share Docker images easily
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker save

> Export Docker images to archive.
> More information: <https://docs.docker.com/reference/cli/docker/image/save/>.

- Save an image by redirecting `stdout` to a tar archive:

`docker save {{image}}:{{tag}} > {{path/to/file.tar}}`

- Save an image to a tar archive:

`docker save {{[-o|--output]}} {{path/to/file.tar}} {{image}}:{{tag}}`

- Save all tags of the image:

`docker save {{[-o|--output]}} {{path/to/file.tar}} {{image_name}}`

- Cherry-pick particular tags of an image to save:

`docker save {{[-o|--output]}} {{path/to/file.tar}} {{image_name:tag1 image_name:tag2 ...}}`
