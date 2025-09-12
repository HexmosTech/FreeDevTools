---
title: "Kubectl Create - Generate Kubernetes Resources | Free DevTools"
name: kubectl-create
path: /freedevtools/tldr/common/kubectl-create
canonical: "https://hexmos.com/freedevtools/tldr/common/kubectl-create/"
description: "Kubectl create and manage Kubernetes resources with ease. Automate deployment, services, and namespaces creation for efficient application management. Free online tool, no registration required."
category: common
keywords:
- kubernetes resource creation
- kubectl deployment generator
- kubernetes service creation
- kubectl namespace creation
- yaml resource creator
- k8s deployment automation
- kubectl create command
- kubernetes resource manager
- kubectl deployment examples
- common kubectl commands
features:
- Create Kubernetes resources from YAML files
- Generate deployments, services, and namespaces
- Manage resources directly from stdin
- Define deployment replicas for scalability
- Automate Kubernetes resource configuration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl create

> Create a resource from a file or from `stdin`.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#create>.

- Create a resource using the resource definition file:

`kubectl create {{[-f|--filename]}} {{path/to/file.yml}}`

- Create a resource from `stdin`:

`kubectl create {{[-f|--filename]}} -`

- Create a deployment:

`kubectl create {{[deploy|deployment]}} {{deployment_name}} --image={{image}}`

- Create a deployment with replicas:

`kubectl create {{[deploy|deployment]}} {{deployment_name}} --image={{image}} --replicas={{number_of_replicas}}`

- Create a service:

`kubectl create {{[svc|service]}} {{service_type}} {{service_name}} --tcp={{port}}:{{target_port}}`

- Create a namespace:

`kubectl create {{[ns|namespace]}} {{namespace_name}}`
