---
title: "Kubectl Auth - Control Kubernetes Access | Free DevTools"
name: kubectl-auth
path: /freedevtools/tldr/common/kubectl-auth
canonical: "https://hexmos.com/freedevtools/tldr/common/kubectl-auth/"
description: "Control Kubernetes access with Kubectl Auth. Verify permissions and manage authorizations in your cluster. Free online tool, no registration required."
category: common
keywords:
- kubectl auth
- kubernetes authorization
- kubernetes access control
- kubectl permissions
- kubernetes can-i
- kubectl user permissions
- kubectl service account permissions
- kubernetes cluster access
- kubectl role based access control
- command line kubernetes auth
features:
- Verify user permissions in a Kubernetes cluster
- Check if a user can perform specific actions
- List allowed actions for a user or service account
- Inspect Kubernetes access rights
- Authorize user access to resources
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl auth

> Inspect access permissions in a Kubernetes cluster.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#auth>.

- Check if the current user can perform all actions on all resources in a specific namespace:

`kubectl auth can-i '*' '*' {{[-n|--namespace]}} {{namespace}}`

- Check if the current user can perform a specific verb on a specific resource:

`kubectl auth can-i {{verb}} {{resource}} {{[-n|--namespace]}} {{namespace}}`

- Check if a specific user or service account can perform an action on a resource:

`kubectl auth can-i {{verb}} {{resource}} {{[-n|--namespace]}} {{namespace}} --as {{user_or_sa}}`

- List all actions the current user is allowed to perform in a namespace:

`kubectl auth can-i --list {{[-n|--namespace]}} {{namespace}}`
