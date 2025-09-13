---
title: "Crane Blob - Read Registry Blobs | Free DevTools"
name: crane-blob
path: /freedevtools/tldr/common/crane-blob
canonical: "https://hexmos.com/freedevtools/tldr/common/crane-blob/"
description: "Read container registry blobs with Crane Blob. Inspect layers, fetch content, and manage container images. Free online tool, no registration required."
category: common
keywords:
- container registry blob
- crane blob read
- image layer extraction
- blob content fetch
- crane image tools
- container image manifest
- registry API access
- go-containerregistry
- linux container tools
- crane command line
features:
- Read a blob from a container registry
- Retrieve content by blob identifier
- Inspect container image layers
- Access registry via command line
- Support for various container registries
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane blob

> Read a blob from a registry.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_blob.md>.

- Read the blob from a registry:

`crane blob {{blob_identifier}}`

- Display help:

`crane blob {{[-h|--help]}}`
