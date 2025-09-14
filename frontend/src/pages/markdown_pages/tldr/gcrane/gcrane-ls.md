---
title: "List Container Tags - gcrane ls | Free DevTools"
name: gcrane-ls
path: /freedevtools/tldr/gcrane/gcrane-ls
canonical: "https://hexmos.com/freedevtools/tldr/gcrane/gcrane-ls/"
description: "List container registry tags with gcrane ls. Explore container images, filter repositories, and format output in JSON. Free online tool, no registration required."
category: common
keywords:
- container registry tags
- docker image tags
- crane list repository
- gcrane ls command
- container image explorer
- google container registry
- crane tag enumeration
- docker repository viewer
- container image manifest
- gcrane recursive list
features:
- List tags in a container registry.
- Format registry response as JSON.
- Recursively list through repositories.
- Display help information for gcrane ls.
- Filter container images by repository.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gcrane ls

> List the tags in a repository.
> More complex form than `crane ls`, which allows for listing tags, manifest and sub-repositories.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md>.

- List the tags:

`gcrane ls {{repository}}`

- Format response from the registry as JSON:

`gcrane ls {{repository}} --json`

- Whether to recurse through repositories:

`gcrane ls {{repository}} {{[-r|--recursive]}}`

- Display help:

`gcrane ls {{[-h|--help]}}`
