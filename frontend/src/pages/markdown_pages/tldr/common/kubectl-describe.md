---
title: "Kubectl Describe - Show Kubernetes Resource Details | Free DevTools"
name: kubectl-describe
path: /freedevtools/tldr/common/kubectl-describe
canonical: "https://hexmos.com/freedevtools/tldr/common/kubectl-describe/"
description: "Show Kubernetes resource details with Kubectl Describe. Inspect pods, nodes, and other objects. Streamline cluster management. Free online tool, no registration required."
category: common
keywords:
- kubernetes describe
- kubectl describe pod
- kubectl describe node
- kubernetes resource inspector
- kubectl resource details
- kubernetes cluster debugging
- kubernetes yaml inspection
- kubectl object analysis
- kubernetes troubleshooting
- kubectl get details
features:
- Display detailed information about Kubernetes resources
- Inspect pod configurations and status
- Examine node properties and capacity
- Analyze Kubernetes objects from YAML manifests
- Troubleshoot cluster issues by viewing resource specifics
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl describe

> Show details of Kubernetes resources.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#describe>.

- Show details of pods in a namespace:

`kubectl describe {{[po|pods]}} {{[-n|--namespace]}} {{namespace}}`

- Show details of nodes in a namespace:

`kubectl describe {{[no|nodes]}} {{[-n|--namespace]}} {{namespace}}`

- Show the details of a specific pod in a namespace:

`kubectl describe {{[po|pods]}} {{pod_name}} {{[-n|--namespace]}} {{namespace}}`

- Show the details of a specific node in a namespace:

`kubectl describe {{[no|nodes]}} {{node_name}} {{[-n|--namespace]}} {{namespace}}`

- Show details of Kubernetes objects defined in a YAML manifest file:

`kubectl describe {{[-f|--filename]}} {{path/to/manifest.yaml}}`
