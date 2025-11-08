---
title: "Manage Kubernetes Secrets - Control K8s Secrets | Online Free DevTools by Hexmos"
name: k8sec
path: "/freedevtools/tldr/common/k8sec/"
canonical: "https://hexmos.com/freedevtools/tldr/common/k8sec/"
description: "Control Kubernetes secrets effortlessly with k8sec. Securely manage, list, and set secret values in your Kubernetes clusters. Free online tool, no registration required."
category: common
keywords:
- Kubernetes secrets management
- K8s secrets CLI
- Kubernetes secrets controller
- K8sec secret values
- Kubernetes base64 secrets
- K8s secrets editor
- Kubernetes secrets file import
- K8s secrets export
- Kubernetes secret unset
- K8s secrets dump
features:
- List all Kubernetes secrets in a cluster.
- Encode and decode Kubernetes secret values.
- Set Kubernetes secret values via the command line.
- Import and export Kubernetes secrets from/to files.
- Unset or remove specific Kubernetes secrets.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# k8sec

> Manage Kubernetes secrets.
> More information: <https://github.com/dtan4/k8sec>.

- List all secrets:

`k8sec list`

- List a specific secret as a base64-encoded string:

`k8sec list {{secret_name}} --base64`

- Set a secret's value:

`k8sec set {{secret_name}} {{key=value}}`

- Set a base64-encoded value:

`k8sec set --base64 {{secret_name}} {{key=encoded_value}}`

- Unset a secret:

`k8sec unset {{secret_name}}`

- Load secrets from a file:

`k8sec load {{[-f|--filename]}} {{path/to/file}} {{secret_name}}`

- Dump secrets to a file:

`k8sec dump {{[-f|--filename]}} {{path/to/file}} {{secret_name}}`
