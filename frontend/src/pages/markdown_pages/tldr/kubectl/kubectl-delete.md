---
title: "Kubectl Delete - Remove Kubernetes Resources | Free DevTools"
name: kubectl-delete
path: /freedevtools/tldr/kubectl/kubectl-delete
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-delete/"
description: "Delete Kubernetes resources efficiently with Kubectl Delete. Manage pods, deployments, nodes, and more using command-line interface. Free online tool, no registration required."
category: common
keywords:
- kubernetes delete
- kubectl delete command
- kubernetes resource removal
- kubectl delete pod
- kubectl delete deployment
- kubectl delete node
- kubectl delete namespace
- kubernetes yaml delete
- kubectl delete manifest
- kubectl delete all
features:
- Delete Kubernetes pods by name
- Delete deployments and services by namespace
- Delete all resources defined in a YAML manifest file
- Remove specific Kubernetes nodes
- Delete all pods or nodes in a Kubernetes cluster
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl delete

> Delete Kubernetes resources.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#delete>.

- Delete a specific pod:

`kubectl delete {{[po|pod]}} {{pod_name}}`

- Delete a specific deployment:

`kubectl delete {{[deploy|deployment]}} {{deployment_name}}`

- Delete a specific node:

`kubectl delete {{[no|node]}} {{node_name}}`

- Delete all pods in a specified namespace:

`kubectl delete {{[po|pods]}} --all {{[-n|--namespace]}} {{namespace}}`

- Delete all deployments and services in a specified namespace:

`kubectl delete {{[deploy|deployment]}},{{[svc|services]}} --all {{[-n|--namespace]}} {{namespace}}`

- Delete all nodes:

`kubectl delete {{[no|nodes]}} --all`

- Delete resources defined in a YAML manifest:

`kubectl delete {{[-f|--filename]}} {{path/to/manifest.yaml}}`
