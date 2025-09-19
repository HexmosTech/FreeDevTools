---
title: "Control Kubernetes Contexts - Switch Contexts | Online Free DevTools by Hexmos"
name: kubectx
path: /freedevtools/tldr/kube/kubectx
canonical: "https://hexmos.com/freedevtools/tldr/kube/kubectx/"
description: "Control Kubernetes contexts instantly with kubectx. Easily switch, rename, and delete contexts to manage your Kubernetes clusters. Free online tool, no registration required."
category: common
keywords:
- kubernetes context manager
- kubectl context switcher
- k8s context control
- kubernetes cluster management
- kubectl context rename
- kubernetes context delete
- kubectx alias
- kubectx current context
- kubernetes context list
- linux kubectx
features:
- List all available Kubernetes contexts.
- Switch between Kubernetes contexts quickly.
- Rename existing Kubernetes contexts for easier management.
- Delete unnecessary Kubernetes contexts.
- Display the currently active Kubernetes context.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectx

> Utility to manage and switch between `kubectl` contexts.
> More information: <https://manned.org/kubectx>.

- List the contexts:

`kubectx`

- Switch to a named context:

`kubectx {{name}}`

- Switch to the previous context:

`kubectx -`

- Rename a named context:

`kubectx {{alias}}={{name}}`

- Show the current named context:

`kubectx {{[-c|--current]}}`

- Delete a named context:

`kubectx -d {{name}}`
