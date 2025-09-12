---
title: "Manage Kubernetes Clusters - Loft Virtual Clusters | Free DevTools"
name: loft
path: /freedevtools/tldr/common/loft
canonical: "https://hexmos.com/freedevtools/tldr/common/loft/"
description: "Manage Kubernetes clusters with Loft. Create and manage virtual Kubernetes environments effortlessly. Free online tool, no registration required. Try our DevOps tools."
category: common
keywords:
- kubernetes virtual cluster manager
- virtual k8s environment
- loft kubernetes management
- kubernetes namespace controller
- k8s multi-tenancy solution
- virtual cluster cli
- kubernetes development platform
- cloud native development
- devops virtual cluster
- k8s cluster management
features:
- Install and manage virtual Kubernetes clusters
- Authenticate to remote Loft instances
- Switch context to a specific virtual cluster
- Create virtual clusters with specific spaces
- List and delete virtual clusters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# loft

> Install and manage multi-tenant Kubernetes environments using virtual clusters.
> More information: <https://loft.sh/docs/cli/loft/>.

- Install or upgrade Loft in the current Kubernetes cluster:

`loft start`

- Authenticate to a remote Loft instance:

`loft login {{https://loft.example.com}}`

- Create a virtual cluster with a specific space and cluster:

`loft create vcluster {{vcluster_name}} {{[-s|--space]}} {{space_name}} {{[-c|--cluster]}} {{cluster_name}}`

- List all virtual clusters:

`loft list vclusters`

- Switch context to a specific virtual cluster:

`loft use vcluster {{vcluster_name}}`

- Delete a virtual cluster:

`loft delete vcluster {{vcluster_name}}`

- Show the current Loft username:

`loft vars username`

- Uninstall Loft from the cluster:

`loft uninstall`
