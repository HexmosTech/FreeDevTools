---
title: "Mutate Images - Modify Container Images | Free DevTools"
name: crane-mutate
path: /freedevtools/tldr/crane/crane-mutate
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane-mutate/"
description: "Modify container images instantly with Crane Mutate. Update labels, annotations, and metadata of your container images. Free online tool, no registration required."
category: common
keywords:
- Container Image Mutation
- Image Annotation Editor
- Docker Image Labeler
- OCI Image Modifier
- Container Registry Tool
- crane mutate command
- Container Image Metadata
- Image Configuration Tool
- Kubernetes Image Management
- Cloud Native Image Utility
features:
- Modify image labels and annotations
- Append files or directories to container images
- Set the platform of a container image
- Push mutated images to a container registry
- Update image user and working directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane mutate

> Modify image labels and annotations.
> The container must be pushed to a registry, and the manifest is updated there.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_mutate.md>.

- New annotations to set (default []):

`crane mutate {{[-a|--annotation]}}/{{[-l|--label]}} {{annotation/label}}`

- Path to tarball/command/entrypoint/environment variable/exposed-ports to append to image:

`crane mutate {{--append}}/{{--cmd}}/{{--entrypoint}}/{{[-e|--env]}}/{{--exposed-ports}} {{var1 var2 ...}}`

- Path to new tarball of resulting image:

`crane mutate {{[-o|--output]}} {{path/to/tarball}}`

- Repository in the form `os/arch/variant:osversion,platform` to push mutated image:

`crane mutate --set-platform {{platform_name}}`

- New tag reference to apply to mutated image:

`crane mutate {{[-t|--tag]}} {{tag_name}}`

- New user to set:

`crane mutate {{[-u|--user]}} {{username}}`

- New working dir to set:

`crane mutate {{[-w|--workdir]}} {{path/to/workdir}}`

- Display help:

`crane mutate {{[-h|--help]}}`
