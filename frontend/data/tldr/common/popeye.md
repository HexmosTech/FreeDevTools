---
title: "Popeye - Validate Kubernetes Manifests | Online Free DevTools by Hexmos"
name: popeye
path: "/freedevtools/tldr/common/popeye/"
canonical: "https://hexmos.com/freedevtools/tldr/common/popeye/"
description: "Validate Kubernetes manifests with Popeye. Identify potential issues and vulnerabilities in your deployments, ensuring best practices. Free online tool, no registration required."
category: common
keywords:
- kubernetes manifest validator
- kubernetes linter
- kubernetes security scan
- popeye kubernetes analysis
- yaml manifest validator
- deployment manifest check
- kubernetes cluster scanner
- kubernetes vulnerability detection
- docker manifest analysis
- k8s manifest security
features:
- Scan Kubernetes clusters for potential issues
- Analyze deployment manifests against best practices
- Identify vulnerabilities in Kubernetes configurations
- Report problems in YAML configuration files
- Customize scanning with Spinach configuration files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# popeye

> Report potential issues with Kubernetes deployment manifests.
> More information: <https://github.com/derailed/popeye>.

- Scan the current Kubernetes cluster:

`popeye`

- Scan a specific namespace:

`popeye {{[-n|--namespace]}} {{namespace}}`

- Scan specific Kubernetes context:

`popeye --context {{context}}`

- Use a spinach configuration file for scanning:

`popeye {{[-f|--file]}} {{spinach.yaml}}`
