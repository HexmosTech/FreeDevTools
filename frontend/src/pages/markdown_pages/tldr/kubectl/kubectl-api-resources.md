---
title: "Kubectl API Resources - Generate Server Resources | Free DevTools"
name: kubectl-api-resources
path: /freedevtools/tldr/kubectl/kubectl-api-resources
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-api-resources/"
description: "Generate Kubernetes API resources with Kubectl API Resources. Quickly list supported resources, filter by namespace, and sort output. Free online tool, no registration required."
category: common
keywords:
- Kubernetes API resources
- Kubectl resource generator
- Kubernetes server discovery
- Kubectl API endpoint information
- Kubernetes API group listing
- CLI resource management
- Kubernetes namespaced resources
- Kubectl command line tools
- Kubernetes resource explorer
- YAML resource definitions
features:
- List supported Kubernetes API resources
- Filter resources by namespace
- Sort output by specific columns
- Display resource information with API group
- Identify namespaced and non-namespaced resources
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl api-resources

> Print the supported API resources on the server.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#api-resources>.

- Print the supported API resources:

`kubectl api-resources`

- Print the supported API resources with more information:

`kubectl api-resources {{[-o|--output]}} wide`

- Print the supported API resources sorted by a column:

`kubectl api-resources --sort-by {{name}}`

- Print the supported namespaced resources:

`kubectl api-resources --namespaced`

- Print the supported non-namespaced resources:

`kubectl api-resources --namespaced=false`

- Print the supported API resources with a specific API group:

`kubectl api-resources --api-group={{api_group}}`
