---
title: "Minikube Start - Control Kubernetes Clusters | Online Free DevTools by Hexmos"
name: minikube-start
path: /freedevtools/tldr/common/minikube-start
canonical: "https://hexmos.com/freedevtools/tldr/common/minikube-start/"
description: "Control Kubernetes clusters with Minikube Start. Configure versions, resources, and drivers for local development. Free online tool, no registration required."
category: common
keywords:
- kubernetes cluster start
- minikube cluster management
- container orchestration control
- kubernetes local development
- minikube kubernetes setup
- virtualbox kubernetes driver
- kubernetes version configuration
- minikube resource allocation
- command line kubernetes
- linux kubernetes
features:
- Specify Kubernetes version for startup.
- Allocate custom memory and CPU resources.
- Choose a specific driver for the cluster.
- Run Minikube in background (headless mode).
- Enable custom Kubernetes addons.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# minikube start

> Start `minikube` with different configurations.
> More information: <https://minikube.sigs.k8s.io/docs/commands/start/>.

- Start `minikube` with a specific Kubernetes version:

`minikube start --kubernetes-version {{v1.24.0}}`

- Start `minikube` with specific resource allocations (e.g., memory and CPU):

`minikube start --memory {{2048}} --cpus {{2}}`

- Start `minikube` with a specific driver (e.g., VirtualBox):

`minikube start --driver {{virtualbox}}`

- Start `minikube` in the background (headless mode):

`minikube start --background`

- Start `minikube` with custom add-ons (e.g., the metrics server):

`minikube start --addons {{metrics-server}}`
