---
title: "Kubectl Logs - Show Pod Logs | Free DevTools"
name: kubectl-logs
path: /freedevtools/tldr/common/kubectl-logs
canonical: "https://hexmos.com/freedevtools/tldr/common/kubectl-logs/"
description: "Show Pod logs instantly with Kubectl Logs. Monitor container output, debug application issues, and troubleshoot deployments. Free online tool, no registration required."
category: common
keywords:
- kubectl pod logs
- kubernetes pod logs
- container logs
- kubernetes logging
- kubectl logs deployment
- pod logs stream
- kubectl logs tail
- kubernetes logs viewer
- kubectl logs since
- kubectl logs all containers
features:
- Stream container logs in real-time.
- Filter logs by relative time.
- Show logs for all containers in a pod.
- Display the most recent logs from a pod.
- View logs for a specific deployment.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl logs

> Show logs for containers in a pod.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs>.

- Show logs for a single-container pod:

`kubectl logs {{pod_name}}`

- Show logs for a specified container in a pod:

`kubectl logs {{[-c|--container]}} {{container_name}} {{pod_name}}`

- Show logs for all containers in a pod:

`kubectl logs --all-containers={{true}} {{pod_name}}`

- Stream pod logs:

`kubectl logs {{[-f|--follow]}} {{pod_name}}`

- Show pod logs newer than a relative time like `10s`, `5m`, or `1h`:

`kubectl logs --since={{relative_time}} {{pod_name}}`

- Show the 10 most recent logs in a pod:

`kubectl logs --tail={{10}} {{pod_name}}`

- Show all pod logs for a given deployment:

`kubectl logs deployment/{{deployment_name}}`
