---
title: "Crane Pull - Retrieve Container Images | Free DevTools"
name: crane-pull
path: /freedevtools/tldr/common/crane-pull
canonical: "https://hexmos.com/freedevtools/tldr/common/crane-pull/"
description: "Retrieve container images locally with Crane Pull. Download and store container images by reference. Free online tool, no registration required."
category: common
keywords:
- container image pull
- image tarball download
- oci image retrieval
- crane container tool
- docker image pull alternative
- container registry client
- image layer caching
- command line image pull
- container image archive
- crane tool download
features:
- Pull container images from a remote registry
- Save container images as tarballs
- Cache container image layers for faster retrieval
- Preserve image reference as an annotation
- Support different image formats for saving
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane pull

> Pull remote images by reference and store their contents locally.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_pull.md>.

- Pull remote image:

`crane pull {{image_name}} {{path/to/tarball}}`

- Preserve image reference used to pull as an annotation when used with --format=oci:

`crane pull {{image_name}} {{path/to/tarball}} --annotate-ref`

- Path to cache image layers:

`crane pull {{image_name}} {{path/to/tarball}} {{[-c|--cache_path]}} {{path/to/cache}}`

- Format in which to save images (default 'tarball'):

`crane pull {{image_name}} {{path/to/tarball}} {{-format}} {{format_name}}`

- Display help:

`crane pull {{[-h|--help]}}`
