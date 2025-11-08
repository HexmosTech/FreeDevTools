---
title: "Docker Build - Create Images from Dockerfile | Online Free DevTools by Hexmos"
name: docker-build
path: "/freedevtools/tldr/docker/docker-build/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-build/"
description: "Create Docker images instantly with Docker Build. Customize build arguments, disable cache, and specify Dockerfile locations. Free online tool, no registration required."
category: common
keywords:
- docker image build
- dockerfile builder
- container image creation
- docker build arguments
- docker build no cache
- docker build context
- linux docker build
- windows docker build
- macos docker build
- docker build tag
features:
- Build Docker images from Dockerfiles in various locations
- Tag Docker images with custom names
- Disable caching during the image build process
- Define custom build-time variables
- Build images without a build context
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker build

> Build an image from a Dockerfile.
> More information: <https://docs.docker.com/reference/cli/docker/buildx/build/>.

- Build a Docker image using the Dockerfile in the current directory:

`docker build .`

- Build a Docker image from a Dockerfile at a specified URL:

`docker build {{github.com/creack/docker-firefox}}`

- Build a Docker image and tag it:

`docker build {{[-t|--tag]}} {{name:tag}} .`

- Build a Docker image with no build context:

`docker build {{[-t|--tag]}} {{name:tag}} - < {{Dockerfile}}`

- Do not use the cache when building the image:

`docker build --no-cache {{[-t|--tag]}} {{name:tag}} .`

- Build a Docker image using a specific Dockerfile:

`docker build {{[-f|--file]}} {{Dockerfile}} .`

- Build with custom build-time variables:

`docker build --build-arg {{HTTP_PROXY=http://10.20.30.2:1234}} --build-arg {{FTP_PROXY=http://40.50.60.5:4567}} .`
