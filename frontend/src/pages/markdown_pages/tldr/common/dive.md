---
title: "Dive - Analyze Docker Images | Online Free DevTools by Hexmos"
name: dive
path: /freedevtools/tldr/common/dive
canonical: "https://hexmos.com/freedevtools/tldr/common/dive/"
description: "Analyze Docker images with Dive. Explore layer contents and discover ways to shrink image size efficiently. Free online tool, no registration required."
category: common
keywords:
- docker image analyzer
- container image analysis
- docker image optimization
- layer content explorer
- docker image size reduction
- linux docker image analysis
- container image debugger
- docker image inspector
- docker build analyzer
- command line image analysis
features:
- Analyze Docker image layer contents
- Identify potential space-saving opportunities in Docker images
- Visualize Docker image layers and their respective sizes
- Explore file system changes in each Docker image layer
- Build and analyze a Docker image directly
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dive

> Explore a Docker image, layer contents, and discover ways to shrink it.
> More information: <https://github.com/wagoodman/dive>.

- Analyze a Docker image:

`dive {{your_image_tag}}`

- Build an image and start analyzing it:

`dive build -t {{some_tag}}`
