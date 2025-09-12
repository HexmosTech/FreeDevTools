---
title: "Kube-Capacity - Control Kubernetes Resources | Free DevTools"
name: kube-capacity
path: /freedevtools/tldr/common/kube-capacity
canonical: "https://hexmos.com/freedevtools/tldr/common/kube-capacity/"
description: "Control Kubernetes resources with Kube-Capacity. Monitor resource requests, limits and utilization in your Kubernetes cluster. Free online tool, no registration required."
category: common
keywords:
- kubernetes capacity monitoring
- kubernetes resource management
- kubernetes cluster utilization
- kubectl resource requests
- kubectl resource limits
- kube-capacity resource overview
- kubernetes resource reporting
- kubernetes pod capacity
- kubernetes node capacity
- linux kubernetes capacity
features:
- List CPU and memory resource requests
- Display pod-level resource consumption
- Show cluster-wide resource utilization
- Provide a summary of node capacity
- Combine resource requests with actual usage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kube-capacity

> Provide an overview of resource requests, limits, and utilization in a Kubernetes cluster.
> Combine the best parts of `kubectl top` and `kubectl describe` into a CLI focused on cluster resources.
> More information: <https://github.com/robscott/kube-capacity>.

- List nodes including the total CPU and Memory resource requests and limits:

`kube-capacity`

- Include pods:

`kube-capacity {{[-p|--pods]}}`

- Include utilization:

`kube-capacity {{[-u|--util]}}`
