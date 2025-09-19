---
title: "Docker System - Control Data | Online Free DevTools by Hexmos"
name: docker-system
path: /freedevtools/tldr/docker/docker-system
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-system/"
description: "Control Docker system data with Docker System. Monitor disk usage, prune unused resources, and manage Docker events efficiently. Free online tool, no registration required."
category: common
keywords:
- docker disk usage
- docker prune unused data
- docker system events
- docker system info
- docker system monitor
- docker system cleanup
- docker resource management
- docker data management
- linux docker system
- command line docker
features:
- Display Docker disk usage details
- Remove unused Docker data and volumes
- Filter unused data by age
- Monitor real-time Docker daemon events
- Display system-wide Docker information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker system

> Manage Docker data and display system-wide information.
> More information: <https://docs.docker.com/reference/cli/docker/system/>.

- Display help:

`docker system`

- Show Docker disk usage:

`docker system df`

- Show detailed information on disk usage:

`docker system df {{[-v|--verbose]}}`

- Remove unused data (append `--volumes` to remove unused volumes as well):

`docker system prune`

- Remove unused data created more than a specified amount of time in the past:

`docker system prune --filter "until={{hours}}h{{minutes}}m"`

- Display real-time events from the Docker daemon:

`docker system events`

- Display real-time events from containers streamed as valid JSON Lines:

`docker system events {{[-f|--filter]}} 'type=container' --format '{{json .}}'`

- Display system-wide information:

`docker system info`
