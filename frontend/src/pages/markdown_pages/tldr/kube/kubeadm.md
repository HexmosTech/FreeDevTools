---
title: "Kubeadm - Manage Kubernetes Clusters | Free DevTools"
name: kubeadm
path: /freedevtools/tldr/kube/kubeadm
canonical: "https://hexmos.com/freedevtools/tldr/kube/kubeadm/"
description: "Manage Kubernetes clusters easily with Kubeadm. Streamline cluster creation, upgrading, and configuration management with this essential command-line tool. Free online tool, no registration required."
category: common
keywords:
- kubernetes cluster manager
- kubeadm kubernetes setup
- kubernetes control plane
- kubeadm node join
- kubernetes upgrade tool
- kubeadm token management
- kubernetes configmap view
- kubeadm reset command
- kubernetes cluster bootstrap
- linux kubeadm
features:
- Create a Kubernetes control plane instance
- Bootstrap worker nodes into a cluster
- Generate authentication tokens for node join
- Upgrade Kubernetes cluster versions
- Reset cluster to a clean state
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubeadm

> Interface for creating and managing Kubernetes clusters.
> More information: <https://kubernetes.io/docs/reference/setup-tools/kubeadm>.

- Create a Kubernetes control plane:

`kubeadm init`

- Bootstrap a Kubernetes worker node and join it to a cluster:

`kubeadm join --token {{token}}`

- Create a new bootstrap token with a TTL of 12 hours:

`kubeadm token create --ttl {{12h0m0s}}`

- Check if the Kubernetes cluster is upgradeable and which versions are available:

`kubeadm upgrade plan`

- Upgrade Kubernetes cluster to a specified version:

`kubeadm upgrade apply {{version}}`

- View the kubeadm ConfigMap containing the cluster's configuration:

`kubeadm config view`

- Revert changes made to the host by 'kubeadm init' or 'kubeadm join':

`kubeadm reset`
