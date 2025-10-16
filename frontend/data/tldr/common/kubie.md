---
title: "Kubie - Control Kubernetes Contexts and Namespaces | Online Free DevTools by Hexmos"
name: kubie
path: "/freedevtools/tldr/common/kubie/"
canonical: "https://hexmos.com/freedevtools/tldr/common/kubie/"
description: "Control Kubernetes contexts with Kubie. Manage multiple clusters and namespaces seamlessly. Switch between contexts and execute commands easily. Free online tool, no registration required."
category: common
keywords:
- kubernetes context switch
- kubectl context manager
- kubernetes namespace manager
- kubernetes multi-cluster management
- kubernetes context switching
- kubernetes namespace switching
- kubernetes command execution
- kubernetes configuration linting
- kubernetes cluster management tool
- kubernetes environment switcher
features:
- Switch between Kubernetes contexts easily
- Manage multiple Kubernetes namespaces efficiently
- Execute commands within specific contexts and namespaces
- Lint Kubernetes configuration files for errors
- Spawn shells with specific context and namespace
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kubie

> Utility to switch between `kubectl` contexts and namespaces.
> More information: <https://github.com/sbstp/kubie>.

- Display a selectable menu of contexts:

`kubie ctx`

- Switch current shell to the given context:

`kubie ctx {{context}}`

- Switch current shell to the given namespace:

`kubie ns {{namespace}}`

- Switch current shell to the given context and namespace:

`kubie ctx {{context}} -n {{namespace}}`

- Execute a command in the given context and namespace, without spawning a shell:

`kubie exec {{context}} {{namespace}} {{command}}`

- Check the Kubernetes configuration files for issues:

`kubie lint`
