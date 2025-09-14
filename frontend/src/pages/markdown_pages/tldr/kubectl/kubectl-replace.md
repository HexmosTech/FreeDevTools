---
title: "Kubectl Replace - Update Kubernetes Resources | Free DevTools"
name: kubectl-replace
path: /freedevtools/tldr/kubectl/kubectl-replace
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-replace/"
description: "Replace Kubernetes resources effortlessly with Kubectl Replace.  Update existing deployments, services and pods using YAML or stdin. Free online tool, no registration required."
category: common
keywords:
- kubectl replace command
- kubernetes resource management
- yaml resource update
- kubernetes command line tool
- kubectl force replace
- kubernetes deployment update
- kubernetes service update
- kubernetes pod update
- kubectl stdin replace
- kubernetes cluster management
features:
- Replace resources from a file
- Replace resources from stdin
- Force replace to delete and recreate a resource
- Update Kubernetes deployments
- Manage Kubernetes resources via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl replace

> Replace a resource by file or `stdin`.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#replace>.

- Replace the resource using the resource definition file:

`kubectl replace {{[-f|--filename]}} {{path/to/file.yml}}`

- Replace the resource using the input passed into `stdin`:

`kubectl replace {{[-f|--filename]}} -`

- Force replace, delete and then re-create the resource:

`kubectl replace --force {{[-f|--filename]}} {{path/to/file.yml}}`
