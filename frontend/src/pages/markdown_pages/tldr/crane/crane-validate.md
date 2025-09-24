---
title: "Crane Validate Container Images - Image Validation Tool | Online Free DevTools by Hexmos"
name: crane-validate
path: /freedevtools/tldr/crane/crane-validate
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane-validate/"
description: "Validate container images quickly with Crane Validate.  Ensure image integrity and structural correctness, skip layer downloads for faster validation, and support tarball validation. Free online tool, no registration required."
category: crane
keywords:
  - container image validation
  - crane validate image
  - docker image validation
  - oci image validation
  - container image integrity check
  - tarball image validation
  - remote image validation
  - go container registry validation
  - command line image validator
  - crane container image check
features:
  - Validate OCI and Docker container image formats
  - Verify image integrity and structural correctness
  - Skip layer downloads for faster validation
  - Support for validating images from remote registries
  - Support for validating images from local tarballs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
