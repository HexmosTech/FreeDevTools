---
title: "Kompose - Convert Docker Compose to Kubernetes | Online Free DevTools by Hexmos"
name: kompose
path: /freedevtools/tldr/common/kompose
canonical: "https://hexmos.com/freedevtools/tldr/common/kompose/"
description: "Convert Docker Compose files to Kubernetes manifests with Kompose. Streamline application deployment and orchestration. Free online tool, no registration required."
category: common
keywords:
- docker compose to kubernetes
- docker-compose kubernetes converter
- kubernetes deployment generator
- docker orchestration
- kubernetes manifest creation
- docker-compose to yaml
- kubernetes application deployment
- kompose cli
- linux docker compose
- macos docker compose
features:
- Convert docker-compose.yml to Kubernetes resources.
- Deploy dockerized applications to Kubernetes clusters.
- Delete Kubernetes deployments created by kompose.
- Simplify Kubernetes application orchestration.
- Streamline application deployment to Kubernetes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kompose

> Convert docker-compose applications to Kubernetes.
> More information: <https://github.com/kubernetes/kompose>.

- Deploy a dockerized application to Kubernetes:

`kompose up {{[-f|--file]}} {{docker-compose.yml}}`

- Delete instantiated services/deployments from Kubernetes:

`kompose down {{[-f|--file]}} {{docker-compose.yml}}`

- Convert a docker-compose file into Kubernetes resources file:

`kompose convert {{[-f|--file]}} {{docker-compose.yml}}`
