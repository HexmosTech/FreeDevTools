---
title: "Crane List - List Container Repository Tags | Online Free DevTools by Hexmos"
name: crane-ls
path: "/freedevtools/tldr/crane/crane-ls/"
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane-ls/"
description: "List container repository tags instantly with Crane List. Inspect your container images quickly and efficiently using command line. Free online tool, no registration required."
category: common
keywords:
- container image tags
- docker image tags
- list crane tags
- crane repository tags
- container registry tags
- image tag viewer
- container inspection
- oci image tags
- crane list command
- container image management
features:
- List all tags within a container repository
- Print the full image reference including digest
- Omit digest tags from the tag listing
- Display help documentation for crane ls
- Quickly inspect container image tags
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# crane ls

> List the tags in a repository.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_ls.md>.

- List the tags:

`crane ls {{repository}}`

- Print the full image reference:

`crane ls {{repository}} --full-ref`

- Omit digest tags:

`crane ls {{[-o|--omit-digest-tags]}}`

- Display help:

`crane ls {{[-h|--help]}}`
