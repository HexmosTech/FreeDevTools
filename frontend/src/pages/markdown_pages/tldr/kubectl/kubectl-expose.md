---
title: "Create Kubernetes Service - Expose Resources | Free DevTools"
name: kubectl-expose
path: /freedevtools/tldr/kubectl/kubectl-expose
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-expose/"
description: "Create Kubernetes service easily with kubectl-expose. Expose your applications and manage network access with simple commands. Free online tool, no registration required."
category: common
keywords:
- kubernetes service creation
- kubectl expose command
- kubernetes networking
- expose deployment kubernetes
- service discovery kubernetes
- kubernetes service manager
- cluster ip service
- nodeport service
- loadbalancer service
- kubernetes api expose
features:
- Expose a resource as a Kubernetes service
- Define node port and target container port mappings
- Expose resources using YAML configuration files
- Create services with custom names
- Easily manage application networking in Kubernetes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl expose

> Expose a resource as a new Kubernetes service.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#expose>.

- Create a service for a resource, which will be served from container port to node port:

`kubectl expose {{resource_type}} {{resource_name}} --port={{node_port}} --target-port={{container_port}}`

- Create a service for a resource identified by a file:

`kubectl expose {{[-f|--filename]}} {{path/to/file.yml}} --port={{node_port}} --target-port={{container_port}}`

- Create a service with a name, to serve to a node port which will be same for container port:

`kubectl expose {{resource_type}} {{resource_name}} --port={{node_port}} --name={{service_name}}`
