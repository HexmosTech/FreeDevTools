---
title: "Kubectl - Control Kubernetes Clusters | Online Free DevTools by Hexmos"
name: kubectl
path: "/freedevtools/tldr/kubectl/kubectl/"
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl/"
description: "Control Kubernetes clusters with Kubectl. Deploy applications, inspect resources, and manage workloads easily. Free online tool, no registration required."
category: common
keywords:
- kubernetes command line tool
- kubectl deployment manager
- kubernetes cluster controller
- kubectl resource inspector
- kubernetes pod manager
- kubectl service discovery
- kubernetes ingress controller
- kubectl node manager
- kubectl networking manager
- linux kubectl command
features:
- Manage Kubernetes cluster resources
- Deploy and update applications
- Inspect pods and services
- View resource usage of nodes
- Execute commands within pods
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kubectl

> Run commands against Kubernetes clusters.
> Some subcommands such as `run` have their own usage documentation.
> More information: <https://kubernetes.io/docs/reference/kubectl/>.

- List information about a resource with more details:

`kubectl get {{pod|service|deployment|ingress|...}} {{[-o|--output]}} wide`

- Update specified pod with the label 'unhealthy' and the value 'true':

`kubectl label pods {{name}} unhealthy=true`

- List all resources with different types:

`kubectl get all`

- Display resource (CPU/Memory/Storage) usage of nodes or pods:

`kubectl top {{pod|node}}`

- Print the address of the master and cluster services:

`kubectl cluster-info`

- Display an explanation of a specific field:

`kubectl explain {{pods.spec.containers}}`

- Print the logs for a container in a pod or specified resource:

`kubectl logs {{pod_name}}`

- Run command in an existing pod:

`kubectl exec {{pod_name}} -- {{ls /}}`
