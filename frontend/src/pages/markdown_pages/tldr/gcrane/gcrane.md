---
title: "Container Image Manager - Control gcrane Images | Online Free DevTools by Hexmos"
name: gcrane
path: /freedevtools/tldr/gcrane/gcrane
canonical: "https://hexmos.com/freedevtools/tldr/gcrane/gcrane/"
description: "Control container images effortlessly with gcrane, a comprehensive container image management tool. Manage registries and perform image operations. Free online tool, no registration required."
category: common
keywords:
- container image manager
- gcrane image management
- docker image control
- registry management
- gcr.io container tool
- container image copy
- linux container tool
- command line image tool
- image registry operations
- container artifact management
features:
- Copy container images between registries
- Authenticate with container registries
- Manage non-distributable container artifacts
- Specify platform for image operations
- Enable verbose logging for debugging
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcrane

> Container images managing tool.
> This tool implements a superset of the `crane` commands, with additional commands that are specific to `gcr.io`.
> Some subcommands such as `append`, `auth`, `copy`, etc. have their own usage documentation which can be found under `crane`.
> Some subcommands such as `completion`, `gc`, `help` are specific to gcrane and have their own usage documentation.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md>.

- Execute a `gcrane` subcommand:

`gcrane {{subcommand}}`

- Allow pushing non-distributable (foreign) layers:

`gcrane --allow-nondistributable-artifacts {{subcommand}}`

- Allow image references to be fetched without TLS:

`gcrane --insecure {{subcommand}}`

- Specify the platform in the form `os/arch/variant:osversion` (e.g. `linux/amd64`). (default all):

`gcrane --platform {{platform}} {{subcommand}}`

- Enable debug logs:

`gcrane {{[-v|--verbose]}} {{subcommand}}`

- Display help:

`gcrane {{[-h|--help]}}`
