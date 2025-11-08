---
title: "Kubectl Edit - Edit Kubernetes Resources | Online Free DevTools by Hexmos"
name: kubectl-edit
path: "/freedevtools/tldr/kubectl/kubectl-edit/"
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-edit/"
description: "Edit Kubernetes resources instantly with Kubectl Edit. Update pods, deployments, services, and more with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- kubernetes resource editing
- kubectl edit command
- kubernetes deployment editing
- kubernetes service editing
- kubectl pod editing
- kubernetes resource update
- kubectl command-line tool
- yaml editor kubernetes
- kubectl edit namespace
- kubernetes cluster management
features:
- Edit Kubernetes resources from the command line
- Update pods, deployments, and services configuration
- Specify a particular editor to use
- Edit all entries of a given resource in a namespace
- Edit resources in JSON format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kubectl edit

> Edit Kubernetes resources.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#edit>.

- Edit a pod in the default namespace:

`kubectl edit {{[po|pod]}}/{{pod_name}}`

- Edit a deployment in the default namespace:

`kubectl edit {{[deploy|deployment]}}/{{deployment_name}}`

- Edit a service in the default namespace:

`kubectl edit {{[svc|service]}}/{{service_name}}`

- Edit all entries of a given resource in a given namespace:

`kubectl edit {{resource}} {{[-n|--namespace]}} {{namespace}}`

- Edit a resource using a specific editor:

`KUBE_EDITOR={{nano}} kubectl edit {{resource}}/{{resource_name}}`

- Edit a resource in JSON format:

`kubectl edit {{resource}}/{{resource_name}} {{[-o|--output]}} json`
