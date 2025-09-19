---
title: "Flatten Image - Generate Single Layer Images | Online Free DevTools by Hexmos"
name: crane-flatten
path: /freedevtools/tldr/crane/crane-flatten
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane-flatten/"
description: "Flatten images with Crane Flatten, merging layers into a single layer. Optimize container image size and reduce complexity. Free online tool, no registration required."
category: common
keywords:
- container image flatten
- docker image layer merge
- crane flatten image
- image optimization tool
- container image size reduction
- image single layer generation
- container registry tool
- image manipulation command
- go-containerregistry
- container image digest
features:
- Flattens container image layers into a single layer
- Applies a new tag to the flattened image
- Pushes the digest to the original image repository
- Reduces container image size and complexity
- Simplifies container image distribution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane flatten

> Flatten an image's layers into a single layer.
> Pushes digest to original image repository if no tags are specified.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_digest.md>.

- Flatten an image:

`crane flatten`

- Apply new tag to flattened image:

`crane flatten {{[-t|--tag]}} {{tag_name}}`

- Display help:

`crane flatten {{[-h|--help]}}`
