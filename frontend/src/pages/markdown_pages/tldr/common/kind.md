---
title: "Kind - Create Kubernetes Clusters Locally | Online Free DevTools by Hexmos"
name: kind
path: /freedevtools/tldr/common/kind
canonical: "https://hexmos.com/freedevtools/tldr/common/kind/"
description: "Create Kubernetes clusters effortlessly with Kind. Deploy local Kubernetes environments using Docker containers for testing and development. Free online tool, no registration required."
category: common
keywords:
- Kubernetes cluster creation
- Docker Kubernetes environment
- local Kubernetes deployment
- kind Kubernetes management
- Kubernetes testing environment
- Kubernetes development tool
- Kubernetes command line
- containerized Kubernetes cluster
- Kubernetes local setup
- Kubernetes kind tool
features:
- Create local Kubernetes clusters
- Delete Kubernetes clusters
- Get cluster details and configurations
- Export Kubernetes kubeconfig files
- Export Kubernetes cluster logs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kind

> Run local Kubernetes clusters using Docker container "nodes".
> Designed for testing Kubernetes itself, but may be used for local development or continuous integration.
> More information: <https://github.com/kubernetes-sigs/kind>.

- Create a local Kubernetes cluster:

`kind create cluster --name {{cluster_name}}`

- Delete one or more clusters:

`kind delete clusters {{cluster_name}}`

- Get details about clusters, nodes, or the kubeconfig:

`kind get {{clusters|nodes|kubeconfig}}`

- Export the kubeconfig or the logs:

`kind export {{kubeconfig|logs}}`
