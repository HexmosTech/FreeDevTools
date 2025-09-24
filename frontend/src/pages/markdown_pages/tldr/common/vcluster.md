---
title: "vcluster - Create Virtual Kubernetes Clusters | Online Free DevTools by Hexmos"
name: vcluster
path: /freedevtools/tldr/common/vcluster
canonical: "https://hexmos.com/freedevtools/tldr/common/vcluster/"
description: "Create lightweight Kubernetes clusters with vcluster. Manage isolated development environments and improve resource utilization using namespaces. Free online tool, no registration required."
category: common
keywords:
- vcluster Kubernetes
- Kubernetes cluster creation
- Virtual Kubernetes namespace
- vcluster command line
- Lightweight Kubernetes
- Container orchestration
- Kubernetes development environment
- vcluster management
- Kubernetes CLI tool
- vcluster platform
features:
- Create lightweight virtual Kubernetes clusters in namespaces
- Connect to virtual clusters via local port forwarding
- List existing virtual Kubernetes clusters
- Delete virtual Kubernetes clusters
- Manage platform-managed virtual Kubernetes clusters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vcluster

> Create and manage lightweight virtual Kubernetes clusters in namespaces.
> More information: <https://www.vcluster.com/docs/vcluster>.

- Create a virtual cluster in a specific namespace:

`vcluster create {{vcluster_name}} {{[-n|--namespace]}} {{namespace}}`

- Connect to a virtual cluster with a local port and insecure mode:

`vcluster connect {{vcluster_name}} {{[-n|--namespace]}} {{namespace}} --local-port {{port}} --insecure`

- List all virtual clusters:

`vcluster list`

- Delete a virtual cluster:

`vcluster delete {{vcluster_name}}`

- List platform-managed virtual clusters:

`vcluster platform list`

- Create a platform-managed virtual cluster:

`vcluster platform create {{vcluster_name}} {{[-n|--namespace]}} {{namespace}}`

- Connect to a platform-managed virtual cluster:

`vcluster platform connect {{vcluster_name}} {{[-n|--namespace]}} {{namespace}}`

- Delete a platform-managed virtual cluster:

`vcluster platform delete {{vcluster_name}} {{[-n|--namespace]}} {{namespace}}`
