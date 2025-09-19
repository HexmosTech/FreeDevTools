---
title: "Podman List - Control Podman Containers | Online Free DevTools by Hexmos"
name: podman-ps
path: /freedevtools/tldr/podman/podman-ps
canonical: "https://hexmos.com/freedevtools/tldr/podman/podman-ps/"
description: "Control Podman containers instantly with Podman List. Filter, manage, and view running and stopped containers using command line. Free online tool, no registration required."
category: common
keywords:
- podman container list
- container management
- docker alternative
- linux containers
- podman ps command
- container filtering
- image ancestor
- container status
- volume mounting
- command line container tools
features:
- List running Podman containers
- Filter containers by name, image, or status
- Display all containers, including stopped ones
- Filter containers by exit code
- Show containers mounting a specific volume
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# podman ps

> List Podman containers.
> More information: <https://docs.podman.io/en/latest/markdown/podman-ps.1.html>.

- List currently running Podman containers:

`podman ps`

- List all Podman containers (running and stopped):

`podman ps --all`

- Show the latest created container (includes all states):

`podman ps --latest`

- Filter containers that contain a substring in their name:

`podman ps --filter "name={{name}}"`

- Filter containers that share a given image as an ancestor:

`podman ps --filter "ancestor={{image}}:{{tag}}"`

- Filter containers by exit status code:

`podman ps --all --filter "exited={{code}}"`

- Filter containers by status (created, running, removing, paused, exited and dead):

`podman ps --filter "status={{status}}"`

- Filter containers that mount a specific volume or have a volume mounted in a specific path:

`podman ps --filter "volume={{path/to/directory}}" --format "table {{.ID}}\t{{.Image}}\t{{.Names}}\t{{.Mounts}}"`
