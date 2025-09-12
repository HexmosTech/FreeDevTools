---
title: "Kubernetes Cluster - Control DigitalOcean Clusters | Free DevTools"
name: doctl-kubernetes-cluster
path: /freedevtools/tldr/common/doctl-kubernetes-cluster
canonical: "https://hexmos.com/freedevtools/tldr/common/doctl-kubernetes-cluster/"
description: "Control DigitalOcean Kubernetes clusters with doctl. Easily create, manage, upgrade, and delete clusters using the command line. Free online tool, no registration required."
category: common
keywords:
- kubernetes cluster manager
- doctl kubernetes control
- digitalocean kubernetes cli
- kubernetes cluster upgrade
- doctl cluster delete
- kubernetes kubeconfig fetch
- digitalocean cluster list
- kubernetes cluster create
- doctl digitalocean
- k8s cluster management
features:
- Create new Kubernetes clusters on DigitalOcean.
- List available Kubernetes clusters.
- Fetch and save the kubeconfig for a cluster.
- Check for available Kubernetes upgrades.
- Delete existing Kubernetes clusters.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doctl kubernetes cluster

> Manage Kubernetes clusters and view configuration options relating to clusters.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/>.

- Create a Kubernetes cluster:

`doctl {{[k|kubernetes]}} {{[c|cluster]}} {{[c|create]}} --count {{3}} --region {{nyc1}} --size {{s-1vcpu-2gb}} --version {{latest}} {{cluster_name}}`

- List all Kubernetes clusters:

`doctl {{[k|kubernetes]}} {{[c|cluster]}} {{[ls|list]}}`

- Fetch and save the kubeconfig:

`doctl {{[k|kubernetes]}} {{[c|cluster]}} {{[cfg|kubeconfig]}} {{[s|save]}} {{cluster_name}}`

- Check for available upgrades:

`doctl {{[k|kubernetes]}} {{[c|cluster]}} {{[gu|get-upgrades]}} {{cluster_name}}`

- Upgrade a cluster to a new Kubernetes version:

`doctl {{[k|kubernetes]}} {{[c|cluster]}} upgrade {{cluster_name}}`

- Delete a cluster:

`doctl {{[k|kubernetes]}} {{[c|cluster]}} {{[d|delete]}} {{cluster_name}}`
