---
title: "Optimize Docker Images - Analyze and Build | Online Free DevTools by Hexmos"
name: docker-slim
path: "/freedevtools/tldr/docker/docker-slim/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-slim/"
description: "Optimize Docker images with DockerSlim. Analyze image layers and build optimized Dockerfiles. Free online tool, no registration required."
category: common
keywords:
- docker image optimizer
- docker slim analyzer
- docker image shrinker
- docker layer analysis
- dockerfile linter
- container image optimization
- docker image security
- container image size reduction
- docker build optimization
- docker image vulnerability scan
features:
- Analyze Docker image layers for inefficiencies
- Lint Dockerfiles for best practices and errors
- Build optimized Docker images with reduced size
- Generate a slimmed-down Docker image from an existing one
- Provide interactive mode for manual image optimization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker-slim

> Analyze and optimize Docker images.
> More information: <https://github.com/slimtoolkit/slim>.

- Start DockerSlim on interactive mode:

`docker-slim`

- Analyze Docker layers from a specific image:

`docker-slim xray --target {{image:tag}}`

- Lint a Dockerfile:

`docker-slim lint --target {{path/to/Dockerfile}}`

- Analyze and generate an optimized Docker image:

`docker-slim build {{image:tag}}`

- Display help for a subcommand:

`docker-slim {{subcommand}} --help`
