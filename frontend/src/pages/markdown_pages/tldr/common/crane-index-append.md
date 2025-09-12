---
title: "Crane - Append Index Manifest | Free DevTools"
name: crane-index-append
path: /freedevtools/tldr/common/crane-index-append
canonical: "https://hexmos.com/freedevtools/tldr/common/crane-index-append/"
description: "Append container index manifest with Crane. Create new container image indexes by adding manifests. Free online tool, no registration required."
category: common
keywords:
- container index manifest
- crane index append
- container registry index
- oci index append
- docker index append
- image index manipulation
- container image management
- crane command line tool
- container index builder
- image index creator
features:
- Append manifests to an existing container index
- Create a new container index from a base index
- Flatten container indexes by appending children
- Tag the resulting container image index
- Support Docker media types for empty base indexes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane index append

> Append manifest to a remote index.
> This sub-command pushes an index based on an (optional) base index, with appended manifests.
> The platform for appended manifests is inferred from the configuration file or omitted if that is infeasible.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_index_append.md>.

- Append manifest to a remote index:

`crane index append`

- Reference to manifests to append to the base index:

`crane index append {{[-m|--manifest]}} {{manifest_name1 manifest_name2 ...}}`

- Tag to apply to resulting image:

`crane index append {{[-t|--tag]}} {{tag_name}}`

- Empty base index will have Docker media types instead of OCI:

`crane index append --docker-empty-base`

- Append each of its children rather than the index itself (defaults true):

`crane index append --flatten`

- Display help:

`crane index append {{[-h|--help]}}`
