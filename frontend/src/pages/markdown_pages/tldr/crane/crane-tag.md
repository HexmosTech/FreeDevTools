---
title: "Crane Tag - Tag Remote Container Images | Free DevTools"
name: crane-tag
path: /freedevtools/tldr/crane/crane-tag
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane-tag/"
description: "Tag container images remotely with Crane Tag. Streamline image management and deployment without downloads. Free online tool, no registration required."
category: common
keywords:
- container image tagging
- crane tag command
- remote image tagging
- docker image tagging
- container registry management
- go-containerregistry crane
- crane command line tool
- oci image tagging
- container image deployment
- image repository tagging
features:
- Tag remote container images without downloading
- Efficiently manage container image versions
- Quickly update image tags in remote registries
- Streamline container image deployment workflows
- Skip layer existence checks for faster tagging
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane tag

> Efficiently tag a remote image without downloading it, which differs from the `copy` command.
> It skips the layer existence checks because we know the manifest already exists making it slightly faster.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_tag.md>.

- Tag remote image:

`crane tag {{image_name}} {{tag_name}}`

- Display help:

`crane tag {{[-h|--help]}}`
