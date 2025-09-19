---
title: "Kubectl Config - Manage Kubernetes Configuration | Online Free DevTools by Hexmos"
name: kubectl-config
path: /freedevtools/tldr/kubectl/kubectl-config
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-config/"
description: "Manage Kubernetes cluster access instantly with Kubectl Config. Configure contexts, switch namespaces, and add custom kubeconfig files. Free online tool, no registration required."
category: common
keywords:
- Kubernetes configuration manager
- Kubeconfig file editor
- Kubectl context switcher
- Kubernetes namespace manager
- Kubeconfig YAML parser
- Kubernetes cluster access tool
- CLI kubeconfig manager
- Kubernetes command line config
- Kubectl cluster administration
- Kubernetes cluster context management
features:
- Get and display Kubernetes cluster contexts
- Switch between Kubernetes contexts quickly
- Set the default namespace for current Kubernetes context
- Add and manage custom kubeconfig files
- Delete Kubernetes clusters, contexts, or users
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl config

> Manage Kubernetes configuration (kubeconfig) files for accessing clusters via `kubectl` or the Kubernetes API.
> By default, the Kubernetes will get its configuration from `${HOME}/.kube/config`.
> See also: `kubectx`, `kubens`.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#config>.

- Get all contexts in the default kubeconfig file:

`kubectl config get-contexts`

- Get all clusters/contexts/users in a custom kubeconfig file:

`kubectl config {{get-clusters|get-contexts|get-users}} --kubeconfig {{path/to/kubeconfig.yaml}}`

- Get the current context:

`kubectl config current-context`

- Set the default namespace of the current context:

`kubectl config set-context --current --namespace {{namespace}}`

- Switch to another context:

`kubectl config {{use|use-context}} {{context_name}}`

- Delete clusters/contexts/users:

`kubectl config {{delete-cluster|delete-context|delete-user}} {{cluster|context|user}}`

- Permanently add custom kubeconfig files:

`export KUBECONFIG="{{$HOME.kube/config:path/to/custom/kubeconfig.yaml}}" kubectl config get-contexts`
