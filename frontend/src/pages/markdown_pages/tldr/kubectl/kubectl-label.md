---
title: "Kubectl Label - Manage Kubernetes Labels | Free DevTools"
name: kubectl-label
path: /freedevtools/tldr/common/kubectl-label
canonical: "https://hexmos.com/freedevtools/tldr/common/kubectl-label/"
description: "Manage Kubernetes labels effortlessly with Kubectl Label. Tag pods, nodes, and other resources for organized management. Free online tool, no registration required."
category: common
keywords:
- kubernetes label manager
- kubectl label tool
- kubernetes resource labeling
- kubectl pod labeling
- kubernetes node labels
- kubernetes object metadata
- label kubernetes resources
- kubectl label command
- k8s label management
- kubernetes label selector
features:
- Add labels to Kubernetes pods
- Update existing labels on Kubernetes resources
- Remove labels from Kubernetes objects
- Label Kubernetes resources using definition files
- Label all pods within a Kubernetes namespace
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl label

> Label Kubernetes resources.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#label>.

- Label a pod:

`kubectl label {{[po|pod]}} {{pod_name}} {{key}}={{value}}`

- Update a pod label by overwriting the existing value:

`kubectl label --overwrite pod {{pod_name}} {{key}}={{value}}`

- Label all pods in the namespace:

`kubectl label {{[po|pods]}} --all {{key}}={{value}}`

- Label a pod identified by the pod definition file:

`kubectl label {{[-f|--filename]}} {{pod_definition_file}} {{key}}={{value}}`

- Remove the label from a pod:

`kubectl label {{[po|pod]}} {{pod_name}} {{key}}-`
