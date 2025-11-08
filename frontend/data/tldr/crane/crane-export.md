---
title: "Export Container Image - Create Tarballs | Online Free DevTools by Hexmos"
name: crane-export
path: "/freedevtools/tldr/crane/crane-export/"
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane-export/"
description: "Export container images to tarballs with Crane. Easily create container archives for backup, transfer, or offline use. Free online tool, no registration required."
category: common
keywords:
- container image export
- docker image tarball
- crane image export
- container filesystem archive
- image layer extraction
- oci image export
- kubernetes image backup
- linux container images
- command line image tools
- go container registry
features:
- Export container image filesystem to a tarball file.
- Write the tarball output directly to standard output.
- Read the container image from standard input for export.
- Support OCI image formats for creating archives.
- Create portable archives of container images for distribution.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# crane export

> Export filesystem of a container image as a tarball.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_digest.md>.

- Write tarball to `stdout`:

`crane export {{image_name}} -`

- Write tarball to file:

`crane export {{image_name}} {{path/to/tarball}}`

- Read image from `stdin`:

`crane export - {{path/to/filename}}`
