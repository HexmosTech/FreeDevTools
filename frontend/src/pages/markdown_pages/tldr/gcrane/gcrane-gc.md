---
title: "Gcrane GC - List Untagged Images | Online Free DevTools by Hexmos"
name: gcrane-gc
path: /freedevtools/tldr/gcrane/gcrane-gc
canonical: "https://hexmos.com/freedevtools/tldr/gcrane/gcrane-gc/"
description: "List untagged container images with Gcrane GC. Identify and manage orphaned images for efficient registry cleanup. Free online tool, no registration required."
category: common
keywords:
- container image gc
- gcrane image garbage collection
- docker image cleanup
- registry image management
- untagged image list
- container registry tool
- go container registry
- gcr image tool
- image repository cleanup
- container image pruning
features:
- Lists untagged container images in a registry.
- Calculates images eligible for garbage collection.
- Offers recursive repository scanning.
- Can be combined with `gcrane delete` for automated cleanup.
- Provides command-line help documentation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcrane gc

> List images that are not tagged.
> Will calculate images that can be garbage-collected.
> This can be composed with `gcrane delete` to actually garbage collect them.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md>.

- List untagged images:

`gcrane gc {{repository}}`

- Whether to recurse through repositories:

`gcrane gc {{repository}} {{[-r|--recursive]}}`

- Display help:

`gcrane gc {{[-h|--help]}}`
