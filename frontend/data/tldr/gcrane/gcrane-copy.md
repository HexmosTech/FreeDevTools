---
title: "Gcrane Copy - Copy Container Images Efficiently | Online Free DevTools by Hexmos"
name: gcrane-copy
path: "/freedevtools/tldr/gcrane/gcrane-copy/"
canonical: "https://hexmos.com/freedevtools/tldr/gcrane/gcrane-copy/"
description: "Copy container images efficiently with Gcrane Copy. Transfer images between registries while preserving digests, streamlining deployments. Free online tool, no registration required."
category: common
keywords:
- container image copy
- gcrane image transfer
- container registry sync
- docker image copy
- oci image replication
- container image mirroring
- gcrane copy recursive
- crane copy command
- container image management
- gcrane parallel copy
features:
- Copies container images between registries
- Retains the digest value during image transfer
- Supports recursive copying of repositories
- Allows setting the number of concurrent copies
- Provides command-line help documentation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcrane copy

> Efficiently copy a remote image from source to target while retaining the digest value.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md>.

- Copy an image from source to target:

`gcrane {{[cp|copy]}} {{source}} {{target}}`

- Set the maximum number of concurrent copies, defaults to 20:

`gcrane copy {{source}} {{target}} {{[-j|--jobs]}} {{nr_of_copies}}`

- Whether to recurse through repositories:

`gcrane copy {{source}} {{target}} {{[-r|--recursive]}}`

- Display help:

`gcrane copy {{[-h|--help]}}`
