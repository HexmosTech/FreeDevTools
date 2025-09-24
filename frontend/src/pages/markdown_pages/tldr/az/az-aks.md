---
title: "Create AKS Clusters - Manage Kubernetes with Azure CLI | Online Free DevTools by Hexmos"
name: az-aks
path: /freedevtools/tldr/az/az-aks
canonical: "https://hexmos.com/freedevtools/tldr/az/az-aks/"
description: "Create AKS clusters with Azure CLI (az-aks). Manage Kubernetes resources and configurations. Free online tool, no registration required."
category: common
keywords:
- kubernetes cluster manager
- azure aks cli
- aks cluster creation
- aks management
- kubernetes command line
- azure kubernetes service
- aks deploy
- azure cloud aks
- aks get credentials
- aks upgrade versions
features:
- List available AKS clusters
- Create new Kubernetes clusters on Azure
- Delete existing AKS clusters
- Get access credentials for cluster management
- Retrieve available upgrade versions for clusters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# az aks

> Manage Azure Kubernetes Service (AKS) clusters.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/aks>.

- List AKS clusters:

`az aks list {{[-g|--resource-group]}} {{resource_group}}`

- Create a new AKS cluster:

`az aks create {{[-g|--resource-group]}} {{resource_group}} {{[-n|--name]}} {{name}} {{[-c|--node-count]}} {{count}} --node-vm-size {{size}}`

- Delete an AKS cluster:

`az aks delete {{[-g|--resource-group]}} {{resource_group}} {{[-n|--name]}} {{name}}`

- Get the access credentials for an AKS cluster:

`az aks get-credentials {{[-g|--resource-group]}} {{resource_group}} {{[-n|--name]}} {{name}}`

- Get the upgrade versions available for an AKS cluster:

`az aks get-upgrades {{[-g|--resource-group]}} {{resource_group}} {{[-n|--name]}} {{name}}`
