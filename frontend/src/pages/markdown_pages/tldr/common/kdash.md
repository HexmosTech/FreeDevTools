---
title: "Kubernetes Dashboard - Monitor Clusters with kdash | Free DevTools"
name: kdash
path: /freedevtools/tldr/common/kdash
canonical: "https://hexmos.com/freedevtools/tldr/common/kdash/"
description: "Monitor Kubernetes clusters in real-time with kdash. Visualize resource utilization, track pod status, and troubleshoot issues quickly. Free online tool, no registration required."
category: common
keywords:
- kubernetes dashboard
- kubernetes cluster monitoring
- kubectl dashboard
- terminal kubernetes dashboard
- kubernetes resource management
- kubernetes pod status
- k8s monitoring tool
- kubernetes performance analysis
- command line kubernetes
- kubernetes troubleshooting
features:
- Display real-time cluster metrics in a terminal UI
- Monitor pod status, resource utilization, and network activity
- View logs and events for specific deployments and services
- Customize the dashboard layout and metrics display
- Debug applications running in a Kubernetes cluster
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kdash

> A simple terminal dashboard for Kubernetes.
> Mode information: <https://github.com/kdash-rs/kdash/#usage>.

- Show dashboard:

`kdash`

- Show dashboard in debug mode and write logs to a file in the current directory:

`kdash {{[-d|--debug]}}`

- Set the tick rate:

`kdash {{[-t|--tick-rate]}} {{100}}`

- Set the polling rate (must be a multiple of the tick rate):

`kdash {{[-t|--tick-rate]}} {{200}} {{[-p|--poll-rate]}} {{400}}`
