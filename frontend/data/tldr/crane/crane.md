---
title: "Container Image Control - Manage Images with Crane | Online Free DevTools by Hexmos"
name: crane
path: "/freedevtools/tldr/crane/crane/"
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane/"
description: "Control container images easily with Crane. Copy, push, and pull container images. Free online tool, no registration required. Manage images securely."
category: common
keywords:
- container image manager
- crane command line
- docker image manipulation
- container registry tool
- image push and pull
- container image copy
- go container registry
- crane tool usage
- nondistributable artifacts
- insecure image fetch
features:
- Pull container images from a registry
- Push container images to a registry
- Copy container images between registries
- Specify target platform for image operations
- Allow pushing non-distributable layers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# crane

> Container images managing tool.
> Some subcommands such as `pull`, `push`, `copy`, etc. have their own usage documentation.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane.md/>.

- Execute a `crane` subcommand:

`crane {{subcommand}}`

- Allow pushing non-distributable (foreign) layers:

`crane --allow-nondistributable-artifacts {{subcommand}}`

- Allow image references to be fetched without TLS:

`crane --insecure {{subcommand}}`

- Specify the platform in the form `os/arch/variant:osversion` (e.g. `linux/amd64`). (default all):

`crane --platform {{platform}} {{subcommand}}`

- Enable debug logs for a subcommand:

`crane {{[-v|--verbose]}} {{subcommand}}`

- Display help for a subcommand:

`crane {{[-h|--help]}} {{subcommand}}`
