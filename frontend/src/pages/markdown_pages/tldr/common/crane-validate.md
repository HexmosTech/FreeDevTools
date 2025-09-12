---
title: "Crane Validate - Image Validation Tool | Free DevTools"
name: crane-validate
path: /freedevtools/tldr/common/crane-validate
canonical: "https://hexmos.com/freedevtools/tldr/common/crane-validate/"
description: "Validate container images quickly with Crane Validate. Ensure image integrity, skip layer download, and validate tarballs. Free online tool, no registration required."
category: common
keywords:
- container image validation
- crane image validate
- docker image validation
- image integrity check
- container image security
- container registry validation
- tarball validation tool
- oci image validation
- go-containerregistry tools
- command line image tools
features:
- Validate container image formats
- Skip layer download for faster validation
- Validate remote container images
- Validate container images from tarballs
- Verify image integrity and structure
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane validate

> Validate that an image is well-formed.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_validate.md>.

- Validate an image:

`crane validate`

- Skip downloading/digesting layers:

`crane validate --fast`

- Name of remote image to validate:

`crane validate --remote {{image_name}}`

- Path to tarball to validate:

`crane validate --tarball {{path/to/tarball}}`

- Display help:

`crane validate {{[-h|--help]}}`
