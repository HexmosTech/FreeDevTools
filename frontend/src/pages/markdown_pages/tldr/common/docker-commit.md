---
title: "Create Docker Image - Commit Container Changes | Free DevTools"
name: docker-commit
path: /freedevtools/tldr/common/docker-commit
canonical: "https://hexmos.com/freedevtools/tldr/common/docker-commit/"
description: "Create Docker image from container changes with Docker Commit. Preserve application states and easily build new images. Free online tool, no registration required."
category: common
keywords:
- docker image create
- docker commit changes
- container to image
- docker image tag
- docker metadata author
- docker image comment
- docker command line
- docker container commit
- docker pause commit
- docker image build
features:
- Create images from container changes
- Apply Dockerfile instructions to created images
- Add author metadata to images
- Include comments within the image metadata
- Commit images without pausing the container
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker commit

> Create a new image from a container's changes.
> More information: <https://docs.docker.com/reference/cli/docker/container/commit/>.

- Create an image from a specific container:

`docker commit {{container}} {{image}}:{{tag}}`

- Apply a `CMD` Dockerfile instruction to the created image:

`docker commit {{[-c|--change]}} "CMD {{command}}" {{container}} {{image}}:{{tag}}`

- Apply an `ENV` Dockerfile instruction to the created image:

`docker commit {{[-c|--change]}} "ENV {{name}}={{value}}" {{container}} {{image}}:{{tag}}`

- Create an image with a specific author in the metadata:

`docker commit {{[-a|--author]}} "{{author}}" {{container}} {{image}}:{{tag}}`

- Create an image with a specific comment in the metadata:

`docker commit {{[-m|--message]}} "{{comment}}" {{container}} {{image}}:{{tag}}`

- Create an image without pausing the container during commit:

`docker commit {{[-p|--pause]}} {{false}} {{container}} {{image}}:{{tag}}`

- Display help:

`docker commit --help`
