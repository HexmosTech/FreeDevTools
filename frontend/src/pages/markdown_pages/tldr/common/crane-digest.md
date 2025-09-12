---
title: "Crane Digest - Get Image Digest | Free DevTools"
name: crane-digest
path: /freedevtools/tldr/common/crane-digest
canonical: "https://hexmos.com/freedevtools/tldr/common/crane-digest/"
description: "Get container image digests with Crane Digest. Retrieve image references and verify image integrity effortlessly. Free online tool, no registration required."
category: common
keywords:
- container image digest
- image reference getter
- crane digest command
- docker image digest
- oci image digest
- container registry digest
- crane tool
- image verification
- digest calculation
- tarball image digest
features:
- Retrieve the digest of a container image.
- Print the full image reference by digest.
- Specify a path to a tarball containing the image.
- Get the digest of local or remote images.
- Verify image integrity through digest comparison.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane digest

> Get the digest of an image.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_digest.md>.

- Get the digest of an image:

`crane digest {{image_name}}`

- Print the full image reference by digest:

`crane digest {{image_name}} --full-ref`

- Specify path to tarball containing the image:

`crane digest {{image_name}} --tarball {{path/to/tarball}}`

- Display help:

`crane digest {{[-h|--help]}}`
