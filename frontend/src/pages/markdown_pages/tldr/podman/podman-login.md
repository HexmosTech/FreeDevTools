---
title: "Podman Login - Access Container Registries | Online Free DevTools by Hexmos"
name: podman-login
path: /freedevtools/tldr/podman/podman-login
canonical: "https://hexmos.com/freedevtools/tldr/podman/podman-login/"
description: "Access container registries easily with Podman Login. Authenticate to container registries and manage images. Free online tool, no registration required."
category: common
keywords:
- container registry login
- podman login command
- docker login alternative
- linux container login
- podman authentication
- container image access
- podman registry access
- insecure registry login
- authfile configuration
- container management cli
features:
- Authenticate to container registries
- Store authentication credentials securely
- Login to insecure registries with TLS verification bypass
- Specify custom authentication file paths
- Manage container image access via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# podman login

> Log in to a container registry.
> Note: The default authfile path on Linux is `$XDG_RUNTIME_DIR/containers/auth.json`, which is usually stored in a `tmpfs` (in RAM).
> More information: <https://docs.podman.io/en/latest/markdown/podman-login.1.html>.

- Log in to a registry (non-persistent on Linux; persistent on Windows/macOS):

`podman login {{registry.example.org}}`

- Log in to a registry persistently on Linux:

`podman login --authfile $HOME/.config/containers/auth.json {{registry.example.org}}`

- Log in to an insecure (HTTP) registry:

`podman login --tls-verify=false {{registry.example.org}}`
