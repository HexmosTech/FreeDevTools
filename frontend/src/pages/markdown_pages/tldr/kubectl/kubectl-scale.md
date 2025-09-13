---
title: "Kubectl Scale - Control Deployment Size | Free DevTools"
name: kubectl-scale
path: /freedevtools/tldr/kubectl/kubectl-scale
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-scale/"
description: "Control deployment size with Kubectl Scale. Easily adjust the number of replicas for deployments, replica sets, and stateful sets. Free online tool, no registration required."
category: common
keywords:
- kubernetes scale deployment
- kubectl scale replica set
- kubectl deployment scaling
- kubectl scale command
- kubernetes replica management
- kubectl stateful set scaling
- kubectl horizontal scaling
- kubectl replica controller
- kubernetes cli scale
- kubectl scale replicas
features:
- Scale deployments to a specified number of replicas
- Adjust replica counts for replica sets
- Modify the size of stateful sets
- Scale resources defined in YAML files
- Control deployment size based on current replica count
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl scale

> Set a new size for a deployment, replica set, replication controller, or stateful set.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#scale>.

- Scale a replica set:

`kubectl scale --replicas={{number_of_replicas}} rs/{{replica_name}}`

- Scale a resource identified by a file:

`kubectl scale --replicas={{number_of_replicas}} {{[-f|--filename]}} {{path/to/file.yml}}`

- Scale a deployment based on current number of replicas:

`kubectl scale --current-replicas={{current_replicas}} --replicas={{number_of_replicas}} deployment/{{deployment_name}}`
