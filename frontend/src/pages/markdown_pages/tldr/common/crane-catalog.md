---
title: "List Repositories - Crane Catalog | Free DevTools"
name: crane-catalog
path: /freedevtools/tldr/common/crane-catalog
canonical: "https://hexmos.com/freedevtools/tldr/common/crane-catalog/"
description: "List repositories with Crane Catalog. Explore container registry contents and manage image references easily. Free online tool, no registration required."
category: common
keywords:
- container registry list
- image repository catalog
- crane catalog tool
- docker registry explorer
- container image listing
- registry repository names
- container management tool
- go-containerregistry command
- oci registry catalog
- container image analysis
features:
- List repositories in a container registry
- Print the full image reference of repositories
- Support for OCI compliant registries
- Display help and usage information
- Explore contents of remote image repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane catalog

> List the repositories in a registry.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_catalog.md>.

- List the repositories in a registry:

`crane catalog {{registry_address}}`

- Print the full image reference:

`crane catalog {{registry_address}} --full-ref`

- Display help:

`crane catalog {{[-h|--help]}}`
