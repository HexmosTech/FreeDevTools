---
title: "Crane Push - Upload Container Images | Online Free DevTools by Hexmos"
name: crane-push
path: /freedevtools/tldr/crane/crane-push
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane-push/"
description: "Push container images with Crane Push, a simple command-line tool. Transfer images to remote registries, create image indexes, and manage image references. Free online tool, no registration required."
category: common
keywords:
- Container image push
- Crane image upload
- Docker image registry
- OCI image push
- Container registry upload
- Tarball image upload
- Remote registry push
- Image index creation
- Container image management
- Command line image push
features:
- Push local container images to remote registries
- Upload images directly from tarball archives
- Create and push OCI image indexes
- Manage image references with external files
- Supports multiple image formats
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# crane push

> Push local image contents to a remote registry.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_push.md>.

- Push local image to remote registry:

`crane push {{path/to/tarball}} {{image_name}}`

- Path to file with list of published image references:

`crane push {{path/to/tarball}} {{image_name}} --image-refs {{path/to/filename}}`

- Push a collection of images as a single index (required if path has multiple images):

`crane push {{path/to/tarball}} {{image_name}} --index`

- Display help:

`crane push {{[-h|--help]}}`
