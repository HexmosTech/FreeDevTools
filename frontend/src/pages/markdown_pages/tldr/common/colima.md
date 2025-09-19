---
title: "Colima - Run Container Runtimes on macOS/Linux | Online Free DevTools by Hexmos"
name: colima
path: /freedevtools/tldr/common/colima
canonical: "https://hexmos.com/freedevtools/tldr/common/colima/"
description: "Run container runtimes easily with Colima on macOS and Linux. Manage Docker and Kubernetes containers with minimal setup. Free online tool, no registration required."
category: common
keywords:
- container runtime macos
- container runtime linux
- colima docker
- colima kubernetes
- docker macos
- kubernetes macos
- containerd macos
- colima containerd
- linux container management
- macos container management
features:
- Start container runtimes with configurable CPU, memory, and disk resources.
- Manage Docker containers on macOS and Linux with Colima.
- Enable and manage Kubernetes clusters easily with Colima.
- Customize container runtime environments using configuration files.
- Display runtime status and list running containers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# colima

> Container runtimes for macOS and Linux with minimal setup.
> More information: <https://github.com/abiosoft/colima>.

- Start the daemon in the background:

`colima start`

- Create a configuration file and use it:

`colima start --edit`

- Start and setup containerd (install `nerdctl` to use containerd via `nerdctl`):

`colima start --runtime containerd`

- Start with Kubernetes (`kubectl` is required):

`colima start --kubernetes`

- Customize CPU count, RAM memory and disk space (in GiB):

`colima start --cpu {{number}} --memory {{memory}} --disk {{storage_space}}`

- Use Docker via Colima (Docker is required):

`colima start`

- List containers with their information and status:

`colima list`

- Show runtime status:

`colima status`
