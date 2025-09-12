---
title: "Manage Kubernetes Clusters - k9s | Free DevTools"
name: k9s
path: /freedevtools/tldr/common/k9s
canonical: "https://hexmos.com/freedevtools/tldr/common/k9s/"
description: "Manage Kubernetes clusters effectively with k9s. Monitor cluster resources and troubleshoot issues instantly using the terminal. Free online tool, no registration required."
category: common
keywords:
- kubernetes cluster manager
- kubernetes resource viewer
- kubernetes terminal UI
- k9s kubernetes dashboard
- k9s cli tool
- kubernetes context management
- kubernetes namespace management
- kubernetes pod viewer
- kubernetes debug logs
- kubectl alternative
features:
- Manage clusters using kubeconfig contexts
- Operate in read-only mode for safer cluster viewing
- Focus on specific Kubernetes namespaces
- Launch in pod view for targeted analysis
- Enable debug logging for detailed troubleshooting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# k9s

> View and manage Kubernetes clusters.
> More information: <https://k9scli.io/topics/commands/>.

- Manage a cluster using a kubeconfig context:

`k9s --context {{kubeconfig_context_name}}`

- Manage a cluster in read-only mode (disabling all commands that may cause modifications):

`k9s --readonly --cluster {{cluster_name}}`

- Manage a cluster using a given kubernetes namespace:

`k9s {{[-n|--namespace]}} {{kubernetes_namespace}} --cluster {{cluster_name}}`

- Manage a cluster launching k9s in the pod view and enable debug logging:

`k9s {{[-c|--command]}} {{pod}} {{[-l|--logLevel]}} debug --cluster {{cluster_name}}`
