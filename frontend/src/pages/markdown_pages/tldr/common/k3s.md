---
title: "Manage K3s Clusters - Control Kubernetes | Online Free DevTools by Hexmos"
name: k3s
path: /freedevtools/tldr/common/k3s
canonical: "https://hexmos.com/freedevtools/tldr/common/k3s/"
description: "Manage Kubernetes clusters with K3s. Deploy lightweight Kubernetes, take snapshots, and rotate certificates using simple commands. Free online tool, no registration required."
category: common
keywords:
- kubernetes management
- k3s cluster
- lightweight kubernetes
- etcd snapshot
- certificate rotation
- kubectl command
- k3s uninstall
- kubernetes command line
- container orchestration
- k8s management
features:
- Deploy lightweight Kubernetes clusters
- Take etcd snapshots of K3s clusters
- Rotate CA certificates for K3s
- Manage bootstrap tokens for cluster access
- Uninstall K3s and remove components
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# k3s

> Install and manage lightweight Kubernetes clusters.
> More information: <https://docs.k3s.io/cli>.

- Run the embedded `kubectl` command:

`k3s kubectl get nodes`

- Take an etcd snapshot of the cluster:

`k3s etcd-snapshot save`

- Rotate the CA certificate:

`k3s certificate rotate-ca`

- Manage bootstrap tokens:

`k3s token list`

- Uninstall K3s and remove all components:

`k3s-uninstall.sh`
