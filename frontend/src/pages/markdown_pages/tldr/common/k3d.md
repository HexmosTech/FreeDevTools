---
title: "Create k3d Clusters - Manage k3s Docker | Free DevTools"
name: k3d
path: /freedevtools/tldr/common/k3d
canonical: "https://hexmos.com/freedevtools/tldr/common/k3d/"
description: "Create k3d clusters easily with k3d. Deploy lightweight Kubernetes distributions inside Docker containers. Free online tool, no registration required."
category: common
keywords:
- k3d cluster creation
- k3s docker management
- containerized kubernetes
- lightweight k8s deployment
- k3d image import
- k3d registry create
- docker kubernetes cluster
- k3s node management
- k3d command line
- k3s docker setup
features:
- Create and manage k3s clusters inside Docker
- Deploy lightweight Kubernetes environments rapidly
- Import Docker images directly into k3d clusters
- Create and manage containerized k3s nodes
- Establish private registries for k3d deployments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# k3d

> A wrapper to easily create k3s clusters inside Docker.
> More information: <https://k3d.io>.

- Create a cluster:

`k3d cluster create {{cluster_name}}`

- Delete a cluster:

`k3d cluster delete {{cluster_name}}`

- Create a new containerized k3s node:

`k3d node create {{node_name}}`

- Import an image from Docker into a k3d cluster:

`k3d image import {{image_name}} --cluster {{cluster_name}}`

- Create a new registry:

`k3d registry create {{registry_name}}`
