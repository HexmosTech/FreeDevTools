---
title: "Stern - Tail Kubernetes Pod Logs | Online Free DevTools by Hexmos"
name: stern
path: "/freedevtools/tldr/st/stern"
canonical: "https://hexmos.com/freedevtools/tldr/st/stern/"
description: "Tail Kubernetes pod logs with Stern, a powerful command-line tool for monitoring multiple pods and containers. Quickly debug applications and filter logs using regular expressions. Free online tool, no registration required."
category: common
keywords:
- kubernetes pod logs
- kubectl tail logs
- container logs
- microservices logs
- kubernetes debugging
- distributed tracing
- stern kubernetes
- stern command
- pod monitoring
- kubernetes log aggregation
features:
- Tail logs from multiple pods simultaneously
- Filter logs using regular expressions
- Monitor specific containers within pods
- Tail logs across all namespaces
- View logs from a specific timeframe
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stern

> Tail multiple pods and containers from Kubernetes.
> More information: <https://github.com/stern/stern>.

- Tail all pods within a current namespace:

`stern .`

- Tail all pods with a specific status:

`stern . --container-state {{running|waiting|terminated}}`

- Tail all pods that matches a given `regex`:

`stern {{pod_query}}`

- Tail matched pods from all namespaces:

`stern {{pod_query}} --all-namespaces`

- Tail matched pods from 15 minutes ago:

`stern {{pod_query}} --since {{15m}}`

- Tail matched pods with a specific label:

`stern {{pod_query}} --selector {{release=canary}}`
