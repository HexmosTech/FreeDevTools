---
title: "Kubectl Apply - Create K8s Resources | Free DevTools"
name: kubectl-apply
path: /freedevtools/tldr/common/kubectl-apply
canonical: "https://hexmos.com/freedevtools/tldr/common/kubectl-apply/"
description: "Create and update Kubernetes resources with Kubectl Apply. Manage configurations, apply manifests, and automate deployments effortlessly. Free online tool, no registration required."
category: common
keywords:
- kubernetes resource management
- kubectl apply command
- k8s deployment automation
- declarative configuration apply
- yaml manifest deployment
- kubectl create resource
- kubectl update resource
- kubernetes command line tool
- cluster resource management
- apply kustomization yaml
features:
- Apply configurations from YAML files
- Update resources based on manifest changes
- Apply configurations using Kustomize directories
- Manage Kubernetes resources via standard input
- Update resources based on last-applied-configuration annotations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl apply

> Manage applications through files defining Kubernetes resources.
> Create and update resources in a cluster.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#apply>.

- Apply a configuration to a resource by file name:

`kubectl apply {{[-f|--filename]}} {{path/to/filename}}`

- Apply a configuration to a resource from `kustomization.yaml` in a directory:

`kubectl apply {{[-k|--kustomize]}} {{path/to/directory}}`

- Apply a configuration to a resource by `stdin`:

`{{cat pod.json}} | kubectl apply {{[-f|--filename]}} -`

- Edit the latest last-applied-configuration annotations of resources from the default editor:

`kubectl apply edit-last-applied {{[-f|--filename]}} {{path/to/filename}}`

- Set the latest last-applied-configuration annotations by setting it to match the contents of a file:

`kubectl apply set-last-applied {{[-f|--filename]}} {{path/to/filename}}`

- View the latest last-applied-configuration annotations by type/name or file:

`kubectl apply view-last-applied {{[-f|--filename]}} {{path/to/filename}}`
