---
title: "Control Flux v1 - Manage Kubernetes Deployments | Online Free DevTools by Hexmos"
name: fluxctl
path: "/freedevtools/tldr/common/fluxctl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/fluxctl/"
description: "Control Kubernetes deployments with fluxctl, a tool for managing Flux v1. Automate deployments, list workloads, and sync with Git repositories. Free online tool, no registration required."
category: common
keywords:
- fluxctl commands
- Kubernetes deployment manager
- GitOps controller management
- Flux v1 CLI
- Kubernetes workload list
- Deployment automation
- Kubernetes sync
- Cluster synchronization
- Flux v1 management
- Kubernetes GitOps
features:
- List workloads running in a specific Kubernetes namespace.
- Show deployed and available images in the cluster.
- Synchronize the cluster state with a Git repository.
- Automate deployment for a specific workload.
- Manage Flux v1 operations from the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fluxctl

> Tool for Flux v1.
> More information: <https://fluxcd.io/legacy/flux/references/fluxctl>.

- List workloads currently running in the cluster on specific namespace:

`fluxctl --k8s-fwd-ns={{namespace}} list-workloads`

- Show deployed and available images:

`fluxctl list-images`

- Synchronize the cluster with the Git repository:

`fluxctl sync`

- Turn on automatic deployment for a workload:

`fluxctl automate`
