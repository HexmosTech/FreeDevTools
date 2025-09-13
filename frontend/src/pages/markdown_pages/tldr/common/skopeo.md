---
title: "Manage Container Images - Skopeo Toolbox | Free DevTools"
name: skopeo
path: /freedevtools/tldr/common/skopeo
canonical: "https://hexmos.com/freedevtools/tldr/common/skopeo/"
description: "Manage container images easily with Skopeo. Inspect, copy, and delete images across various registries. Free online tool, no registration required."
category: common
keywords:
- container image manager
- skopeo image inspection
- docker image copy
- registry image delete
- container image registry
- skopeo command line
- container image tag
- linux container image
- skopeo authentication
- container image download
features:
- Inspect remote container images from registries
- List available tags for remote container images
- Copy container images between registries
- Delete container images from a registry
- Authenticate with container registries
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# skopeo

> Container image management toolbox.
> Provides various utility commands to manage remote container images.
> More information: <https://github.com/containers/skopeo>.

- Inspect a remote image from a registry:

`skopeo inspect docker://{{registry_hostname}}/{{image:tag}}`

- List available tags for a remote image:

`skopeo list-tags docker://{{registry_hostname}}/{{image}}`

- Download an image from a registry:

`skopeo copy docker://{{registry_hostname}}/{{image:tag}} dir:{{path/to/directory}}`

- Copy an image from one registry to another:

`skopeo copy docker://{{source_registry}}/{{image:tag}} docker://{{destination_registry}}/{{image:tag}}`

- Delete an image from a registry:

`skopeo delete docker://{{registry_hostname}}/{{image:tag}}`

- Log in to a registry:

`skopeo login --username {{username}} {{registry_hostname}}`
