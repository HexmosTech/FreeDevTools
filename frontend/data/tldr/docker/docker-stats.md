---
title: "Docker Stats - Monitor Container Resource Usage | Online Free DevTools by Hexmos"
name: docker-stats
path: "/freedevtools/tldr/docker/docker-stats/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-stats/"
description: "Monitor Docker container resources with Docker Stats. Track CPU, memory, network I/O usage in real-time. Free online tool, no registration required."
category: common
keywords:
- docker stats
- container statistics
- docker resource monitoring
- docker CPU usage
- docker memory usage
- docker network I/O
- docker container metrics
- linux container stats
- command line container monitoring
- docker performance analysis
features:
- Display live resource usage statistics for Docker containers
- Monitor CPU, memory, and network I/O utilization
- Customize output format for specific metrics
- Show stats for both running and stopped containers
- Disable streaming and retrieve current stats only
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker stats

> Display a live stream of resource usage statistics for containers.
> More information: <https://docs.docker.com/reference/cli/docker/container/stats/>.

- Display a live stream for the statistics of all running containers:

`docker stats`

- Display a live stream of statistics for one or more containers:

`docker stats {{container1 container2 ...}}`

- Change the columns format to display container's CPU usage percentage:

`docker stats --format "{{.Name}}:\t{{.CPUPerc}}"`

- Display statistics for all containers (both running and stopped):

`docker stats {{[-a|--all]}}`

- Disable streaming stats and only pull the current stats:

`docker stats --no-stream`
