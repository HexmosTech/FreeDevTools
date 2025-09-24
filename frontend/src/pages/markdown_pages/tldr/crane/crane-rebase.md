---
title: "Rebase Image - Modify Container Images | Online Free DevTools by Hexmos"
name: crane-rebase
path: /freedevtools/tldr/crane/crane-rebase
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane-rebase/"
description: "Rebase container images with Crane. Modify image layers and change base images, enhancing security and efficiency. Free online tool, no registration required."
category: common
keywords:
- container image rebase
- image layer modification
- crane image tool
- docker image rebase
- oci image manipulation
- image base layer swap
- container registry rebase
- crane cli tool
- go-containerregistry rebase
- image manifest editing
features:
- Change the base image of a container
- Modify image layers in container images
- Tag rebased images for easy identification
- Remove old base images from container images
- Rebase images from container registries
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# crane rebase

> Rebase an image onto a new base image.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_rebase.md>.

- Rebase image:

`crane rebase`

- New base image to insert:

`crane rebase --new_base {{image_name}}`

- Old base image to remove:

`crane rebase --old_base {{image_name}}`

- Tag to apply to rebased image:

`crane rebase {{[-t|--tag]}} {{tag_name}}`

- Display help:

`crane rebase {{[-h|--help]}}`
