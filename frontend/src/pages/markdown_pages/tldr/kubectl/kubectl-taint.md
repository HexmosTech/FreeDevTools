---
title: "Kubectl Taint - Control Node Taints | Online Free DevTools by Hexmos"
name: kubectl-taint
path: /freedevtools/tldr/kubectl/kubectl-taint
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-taint/"
description: "Control Kubernetes node taints with Kubectl Taint. Manage node scheduling, and evict pods based on taints and tolerations. Free online tool, no registration required."
category: common
keywords:
- kubectl taint node
- kubernetes node taint
- taint nodes kubectl
- kubectl node management
- kubernetes scheduling control
- kubectl taint effect
- kubectl add taint
- kubectl remove taint
- kubectl taint command
- kubernetes node taints tolerations
features:
- Apply taints to Kubernetes nodes using kubectl
- Remove specific taints from Kubernetes nodes
- Remove all taints from a node with kubectl
- Manage node scheduling using taints and tolerations
- Evict pods based on taints and tolerations using kubectl
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl taint

> Update the taints on nodes.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#taint>.

- Apply taint to a node:

`kubectl taint {{[no|nodes]}} {{node_name}} {{label_key}}={{label_value}}:{{effect}}`

- Remove taint from a node:

`kubectl taint {{[no|nodes]}} {{node_name}} {{label_key}}:{{effect}}-`

- Remove all taints from a node:

`kubectl taint {{[no|nodes]}} {{node_name}} {{label_key}}-`
