---
title: "KubeTail - Tail Kubernetes Logs | Online Free DevTools by Hexmos"
name: kubetail
path: "/freedevtools/tldr/kube/kubetail/"
canonical: "https://hexmos.com/freedevtools/tldr/kube/kubetail/"
description: "Tail Kubernetes pod logs with KubeTail. Monitor multiple containers simultaneously and troubleshoot issues quickly. Free online tool, no registration required."
category: common
keywords:
- kubernetes logs
- kubernetes tail
- pod logs
- container logs
- kubernetes debugging
- kubectl logs
- kubernetes monitoring
- kubernetes troubleshooting
- kubernetes cluster
- kubernetes cli
features:
- Tail logs from multiple Kubernetes pods simultaneously
- Monitor logs of specific containers within pods
- Filter logs from multiple applications at the same time
- Output logs in real-time for immediate debugging
- Simplify Kubernetes log monitoring
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kubetail

> Utility to tail multiple Kubernetes pod logs at the same time.
> More information: <https://github.com/johanhaleby/kubetail>.

- Tail the logs of multiple pods (whose name starts with "my_app") in one go:

`kubetail {{my_app}}`

- Tail only a specific container from multiple pods:

`kubetail {{my_app}} {{[-c|--container]}} {{my_container}}`

- To tail multiple containers from multiple pods:

`kubetail {{my_app}} {{[-c|--container]}} {{my_container_1}} {{[-c|--container]}} {{my_container_2}}`

- To tail multiple applications at the same time separate them by comma:

`kubetail {{my_app_1}},{{my_app_2}}`
