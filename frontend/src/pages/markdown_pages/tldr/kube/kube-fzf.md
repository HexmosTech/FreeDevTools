---
title: "Kubernetes Pod Controller - Manage Pods with kube-fzf | Online Free DevTools by Hexmos"
name: kube-fzf
path: /freedevtools/tldr/kube/kube-fzf
canonical: "https://hexmos.com/freedevtools/tldr/kube/kube-fzf/"
description: "Manage Kubernetes Pods efficiently with kube-fzf. Interact, describe, and access logs from your pods quickly using fuzzy searching. Free online tool, no registration required."
category: common
keywords:
- kubernetes pod management
- pod fuzzy search
- kubectl alternative
- container command line
- pod log viewer
- pod executor
- pod port forwarder
- kubernetes command line tools
- k8s pod controller
- docker container management
features:
- Fuzzy search for Kubernetes pods across all namespaces
- Tail logs from selected pods in real-time
- Execute commands within a pod's container
- Port-forward traffic to a chosen pod's port
- Describe pods to view their configuration and status
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kube-fzf

> Shell commands for command-line fuzzy searching of Kubernetes Pods.
> See also: `kubectl` for related commands.
> More information: <https://github.com/thecasualcoder/kube-fzf>.

- Get pod details (from current namespace):

`findpod`

- Get pod details (from all namespaces):

`findpod -a`

- Describe a pod:

`describepod`

- Tail pod logs:

`tailpod`

- Exec into a pod's container:

`execpod {{shell_command}}`

- Port-forward a pod:

`pfpod {{port_number}}`
