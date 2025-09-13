---
title: "Assess Kubernetes Security - Prowler Kubernetes | Free DevTools"
name: prowler-kubernetes
path: /freedevtools/tldr/prowler/prowler-kubernetes
canonical: "https://hexmos.com/freedevtools/tldr/prowler/prowler-kubernetes/"
description: "Assess Kubernetes security configurations with Prowler Kubernetes. Identify vulnerabilities and ensure best practices. Free online tool, no registration required."
category: common
keywords:
- kubernetes security assessment
- kubernetes compliance check
- kubernetes audit tool
- prowler kubernetes scanner
- container security best practices
- kubernetes vulnerability detection
- kubeconfig security analysis
- kubernetes security posture management
- kubernetes security hardening
- cloud native security assessment
features:
- Scan Kubernetes clusters for security misconfigurations
- Identify vulnerabilities in Kubernetes deployments
- Enforce Kubernetes security best practices
- Generate detailed Kubernetes security reports
- Assess Kubernetes compliance against industry standards
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# prowler kubernetes

> Assess Kubernetes cluster security best practices and configurations.
> See also: `prowler`, `prowler-aws`, `prowler-azure`, `prowler-gcp`, `prowler-m365`, `prowler-github`.
> More information: <https://docs.prowler.com/projects/prowler-open-source/en/latest/>.

- Run the default checks using the default kubeconfig location:

`prowler kubernetes`

- Specify a custom kubeconfig file for scanning:

`prowler kubernetes --kubeconfig-file {{path/to/kubeconfig}}`

- Specify a specific Kubernetes context to scan:

`prowler kubernetes --context {{my-context}}`

- Scan specific namespaces only:

`prowler kubernetes --namespaces {{default}} {{kube-system}}`

- Run checks for selected Kubernetes services:

`prowler kubernetes {{[-s|--services]}} {{ietcd apiserver ...}}`

- Run a specific Kubernetes check:

`prowler kubernetes {{[-c|--checks]}} {{etcd_encryption}}`

- Exclude specific checks or services:

`prowler kubernetes {{[-e|--excluded-checks]}} {{etcd_encryption}} --exclude-services {{ietcd apiserver ...}}`
