---
title: "Kubectl Autoscale - Create Pod Autoscalers | Free DevTools"
name: kubectl-autoscale
path: /freedevtools/tldr/kubectl/kubectl-autoscale
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-autoscale/"
description: "Create pod autoscalers with Kubectl Autoscale. Intelligently scale Kubernetes deployments based on cluster demands. Free online tool, no registration required."
category: common
keywords:
- kubernetes pod autoscaling
- kubectl deployment scaling
- kubernetes horizontal pod autoscaler
- kubectl cpu autoscaling
- kubernetes replica scaling
- kubectl scale deployment
- kubernetes cluster autoscaling
- kubectl autoscale command
- kubernetes pod management
- kubectl deployment controller
features:
- Automatically scale pod count based on CPU utilization
- Define minimum and maximum replica counts for deployments
- Configure target CPU utilization for autoscaling
- Dynamically adjust replica count to meet demand
- Integrate with Kubernetes deployment controllers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl autoscale

> Create an autoscaler to intelligently scale pod count based on kubernetes cluster demands.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#autoscale>.

- Auto scale a deployment with no target CPU utilization specified:

`kubectl autoscale {{[deploy|deployment]}} {{deployment_name}} --min={{min_replicas}} --max={{max_replicas}}`

- Auto scale a deployment with target CPU utilization:

`kubectl autoscale {{[deploy|deployment]}} {{deployment_name}} --max={{max_replicas}} --cpu-percent={{target_cpu}}`
