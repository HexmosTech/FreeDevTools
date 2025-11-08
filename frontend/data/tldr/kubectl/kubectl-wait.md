---
title: "Kubectl Wait - Control Resource States | Online Free DevTools by Hexmos"
name: kubectl-wait
path: "/freedevtools/tldr/kubectl/kubectl-wait/"
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-wait/"
description: "Control Kubernetes resource states with Kubectl Wait. Monitor deployment readiness, pod availability, and job completion efficiently. Free online tool, no registration required."
category: common
keywords:
- kubernetes wait command
- kubectl wait for deployment
- kubectl wait for pod
- kubectl wait for job
- kubernetes resource monitor
- kubectl state management
- kubectl deployment readiness
- kubectl pod availability
- kubectl job completion
- kubernetes command line tool
features:
- Wait for deployments to become available
- Wait for pods to reach a ready state
- Wait for pods to be deleted
- Wait for jobs to complete within a timeout
- Monitor Kubernetes resource state changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kubectl wait

> Wait for resource(s) to reach a certain state.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#wait>.

- Wait for a deployment to become available:

`kubectl wait --for=condition=available deployment/{{deployment_name}}`

- Wait for all pods with a certain [l]abel to be ready:

`kubectl wait --for=condition=ready pod {{[-l|--selector]}} {{label_key}}={{label_value}}`

- Wait for a pod to be deleted:

`kubectl wait --for=delete pod {{pod_name}}`

- Wait for a job to complete, within 120 seconds (if the condition isn't met on time, the exit status will be unsuccessful):

`kubectl wait --for=condition=complete job/{{job_name}} --timeout 120s`
