---
title: "Detect Kubernetes Secrets - Identify Unused Secrets | Free DevTools"
name: k8s-unused-secret-detector
path: /freedevtools/tldr/common/k8s-unused-secret-detector
canonical: "https://hexmos.com/freedevtools/tldr/common/k8s-unused-secret-detector/"
description: "Detect Kubernetes secrets easily with k8s-unused-secret-detector. Identify and manage unused secrets, enhancing cluster security. Free online tool, no registration required."
category: common
keywords:
- Kubernetes secret detection
- Unused secrets identification
- Kubernetes security management
- K8s secret analyzer
- Kubernetes namespace secrets
- Cluster secret cleanup
- Kubernetes secret inventory
- K8s secret removal
- Kubernetes security audit
- Kubernetes secret management CLI
features:
- Detect unused Kubernetes secrets across the cluster
- Identify unused secrets within a specific namespace
- Generate a list of unused secrets for review
- Facilitate deletion of unused secrets using kubectl
- Improve Kubernetes cluster security posture
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# k8s-unused-secret-detector

> Detect unused Kubernetes secrets.
> More information: <https://github.com/dtan4/k8s-unused-secret-detector>.

- Detect unused secrets:

`k8s-unused-secret-detector`

- Detect unused secrets in a specific namespace:

`k8s-unused-secret-detector {{[-n|--namespace]}} {{namespace}}`

- Delete unused secrets in a specific namespace:

`k8s-unused-secret-detector {{[-n|--namespace]}} {{namespace}} | kubectl delete secret {{[-n|--namespace]}} {{namespace}}`
