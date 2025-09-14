---
title: "Kubectl Get - Control Kubernetes Objects | Free DevTools"
name: kubectl-get
path: /freedevtools/tldr/kubectl/kubectl-get
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-get/"
description: "Control Kubernetes objects with Kubectl Get. Retrieve pod information, deployments and services easily. Free online tool, no registration required."
category: common
keywords:
- Kubernetes object retrieval
- Kubectl resource listing
- Kubernetes pod information
- Kubernetes deployment details
- Kubernetes service discovery
- Kubernetes namespace exploration
- Kubectl cluster inspection
- Kubectl object definition
- Kubernetes command line
- K8s object management
features:
- Retrieve Kubernetes resources by type
- Filter Kubernetes resources by namespace
- List all Kubernetes resources across all namespaces
- Get Kubernetes objects from a manifest file
- Inspect the state of deployments and services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl get

> Get Kubernetes objects and resources.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get>.

- Get all namespaces in the current cluster:

`kubectl get {{[ns|namespaces]}}`

- Get nodes in a specified namespace:

`kubectl get {{[no|nodes]}} {{[-n|--namespace]}} {{namespace}}`

- Get pods in a specified namespace:

`kubectl get {{[po|pods]}} {{[-n|--namespace]}} {{namespace}}`

- Get deployments in a specified namespace:

`kubectl get {{[deploy|deployments]}} {{[-n|--namespace]}} {{namespace}}`

- Get services in a specified namespace:

`kubectl get {{[svc|services]}} {{[-n|--namespace]}} {{namespace}}`

- Get other resources:

`kubectl get {{persistentvolumeclaims|secret|...}}`

- Get all resources in all namespaces:

`kubectl get all {{[-A|--all-namespaces]}}`

- Get Kubernetes objects defined in a YAML manifest file:

`kubectl get {{[-f|--filename]}} {{path/to/manifest.yaml}}`
