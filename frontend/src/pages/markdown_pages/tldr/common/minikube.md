---
title: "Minikube - Run Kubernetes Locally | Online Free DevTools by Hexmos"
name: minikube
path: /freedevtools/tldr/common/minikube
canonical: "https://hexmos.com/freedevtools/tldr/common/minikube/"
description: "Run Kubernetes clusters locally with Minikube. Simplify Kubernetes development and testing on your machine. Free online tool, no registration required."
category: common
keywords:
- kubernetes local cluster
- minikube start
- minikube ip
- minikube dashboard
- minikube tunnel
- kubernetes development environment
- docker kubernetes
- kubectl minikube
- container orchestration local
- kubernetes tutorial minikube
features:
- Start and stop local Kubernetes clusters
- Obtain the cluster IP address
- Access services via node ports using URLs
- Open the Kubernetes dashboard in a browser
- Establish connections to LoadBalancer services
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# minikube

> Run Kubernetes locally.
> More information: <https://minikube.sigs.k8s.io/docs/>.

- Start the cluster:

`minikube start`

- Get the IP address of the cluster:

`minikube ip`

- Access a service named my_service exposed via a node port and get the URL:

`minikube service {{my_service}} --url`

- Open the Kubernetes dashboard in a browser:

`minikube dashboard`

- Stop the running cluster:

`minikube stop`

- Delete the cluster:

`minikube delete`

- Connect to LoadBalancer services:

`minikube tunnel`
