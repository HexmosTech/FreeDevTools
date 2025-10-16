---
title: "Docker Update - Control Container Configuration | Online Free DevTools by Hexmos"
name: docker-update
path: "/freedevtools/tldr/docker/docker-update/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-update/"
description: "Control Docker container settings easily with Docker Update. Modify restart policies, CPU limits, and memory allocation. Free online tool, no registration required."
category: common
keywords:
- docker container update
- docker restart policy
- docker cpu limit
- docker memory limit
- docker pids limit
- docker memory swap
- docker container configuration
- docker command line
- docker resource management
- linux docker update
features:
- Update container restart policies
- Limit container CPU usage
- Set container memory constraints
- Restrict the number of processes
- Configure container memory swapping
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker update

> Update configuration of Docker containers.
> This command is not supported for Windows containers.
> More information: <https://docs.docker.com/reference/cli/docker/container/update/>.

- Update restart policy to apply when a specific container exits:

`docker update --restart={{always|no|on-failure|unless-stopped}} {{container_name}}`

- Update the policy to restart up to three times a specific container when it exits with non-zero exit status:

`docker update --restart=on-failure:3 {{container_name}}`

- Update the number of CPUs available to a specific container:

`docker update --cpus {{count}} {{container_name}}`

- Update the memory limit in [M]egabytes for a specific container:

`docker update {{[-m|--memory]}} {{limit}}M {{container_name}}`

- Update the maximum number of process IDs allowed inside a specific container (use `-1` for unlimited):

`docker update --pids-limit {{count}} {{container_name}}`

- Update the amount of memory in [M]egabytes a specific container can swap to disk (use `-1` for unlimited):

`docker update --memory-swap {{limit}}M {{container_name}}`
