---
title: "Kubectl Rollout - Manage Kubernetes Rollouts | Online Free DevTools by Hexmos"
name: kubectl-rollout
path: "/freedevtools/tldr/kubectl/kubectl-rollout/"
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-rollout/"
description: "Manage Kubernetes rollouts easily with Kubectl Rollout. Control deployments, daemonsets, and statefulsets with ease. Free online tool, no registration required."
category: common
keywords:
- kubernetes rollout management
- kubectl deployment rollout
- kubectl daemonset rollout
- kubectl statefulset rollout
- kubernetes rolling update
- kubectl rollout status
- kubectl rollout history
- kubectl rollout undo
- kubectl restart deployment
- kubernetes deployment rollback
features:
- Restart Kubernetes deployments with rolling updates.
- Monitor the status of Kubernetes rollout processes.
- Rollback deployments to previous revisions.
- View the rollout history of Kubernetes resources.
- Manage deployments, daemonsets, and statefulsets.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kubectl rollout

> Manage the rollout of a Kubernetes resource (deployments, daemonsets, and statefulsets).
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#rollout>.

- Start a rolling restart of a resource:

`kubectl rollout restart {{resource_type}}/{{resource_name}}`

- Watch the rolling update status of a resource:

`kubectl rollout status {{resource_type}}/{{resource_name}}`

- Roll back a resource to the previous revision:

`kubectl rollout undo {{resource_type}}/{{resource_name}}`

- View the rollout history of a resource:

`kubectl rollout history {{resource_type}}/{{resource_name}}`
