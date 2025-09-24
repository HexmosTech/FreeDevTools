---
title: "Toolbox Remove - Delete Containers | Online Free DevTools by Hexmos"
name: toolbox-rm
path: /freedevtools/tldr/linux/toolbox-rm
canonical: "https://hexmos.com/freedevtools/tldr/linux/toolbox-rm/"
description: "Remove containers with Toolbox. Delete specific containers or all at once and force removal of active containers. Free online tool, no registration required."
category: linux
keywords:
  - toolbox container remove
  - container deletion tool
  - linux toolbox management
  - toolbox container cleanup
  - docker container removal
  - command line toolbox
  - toolbox rm command
  - container lifecycle management
  - toolbox container force remove
  - container management cli
features:
  - Remove specific toolbox containers
  - Delete all toolbox containers at once
  - Forcefully remove active containers
  - Manage container lifecycle via command line
  - Streamline container cleanup process
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# toolbox rm

> Remove one or more `toolbox` containers.
> See also: `toolbox rmi`.
> More information: <https://manned.org/toolbox-rm.1>.

- Remove a toolbox container:

`toolbox rm {{container_name}}`

- Remove all `toolbox` containers:

`toolbox rm {{[-a|--all]}}`

- Force the removal of a currently active `toolbox` container:

`toolbox rm {{[-f|--force]}} {{container_name}}`
