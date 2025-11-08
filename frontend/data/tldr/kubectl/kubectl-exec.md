---
title: "Kubectl Exec - Execute Commands in Containers | Online Free DevTools by Hexmos"
name: kubectl-exec
path: "/freedevtools/tldr/kubectl/kubectl-exec/"
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-exec/"
description: "Execute commands within containers using Kubectl Exec. Run interactive shells, debug applications, and manage container processes remotely. Free online tool, no registration required."
category: common
keywords:
- kubernetes exec command
- container command execution
- kubectl pod shell
- kubernetes debug shell
- container interactive terminal
- linux container execution
- docker exec alternative
- kubernetes process manager
- kubectl remote command
- container process monitoring
features:
- Execute commands in running containers
- Open interactive shell sessions in pods
- Specify the container to execute commands in
- Enable TTY allocation for interactive sessions
- Stream standard input, output, and error streams
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kubectl exec

> Execute a command in a container.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#exec>.

- Open Bash in a pod, using the first container by default:

`kubectl exec {{pod_name}} {{[-it|--stdin --tty]}} -- bash`
