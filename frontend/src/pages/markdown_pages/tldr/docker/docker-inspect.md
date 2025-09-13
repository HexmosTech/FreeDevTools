---
title: "Docker Inspect - Return Container Information | Free DevTools"
name: docker-inspect
path: /freedevtools/tldr/docker/docker-inspect
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-inspect/"
description: "Inspect Docker objects with Docker Inspect. Retrieve low-level information on containers, images, and volumes. Free online tool, no registration required."
category: common
keywords:
- docker container inspect
- docker image inspect
- docker volume inspect
- docker container metadata
- docker container configuration
- docker container IP address
- docker container log path
- docker container port bindings
- docker container image name
- linux docker inspect
features:
- Retrieve container configuration as JSON
- Display container IP address
- Show the path to the container's log file
- Display the image name of a container
- List all port bindings for a container
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker inspect

> Return low-level information on Docker objects.
> More information: <https://docs.docker.com/reference/cli/docker/inspect/>.

- Display help:

`docker inspect`

- Display information about a container, image, or volume using a name or ID:

`docker inspect {{container|image|ID}}`

- Display a container's IP address:

`docker inspect {{[-f|--format]}} '\{\{range.NetworkSettings.Networks\}\}\{\{.IPAddress\}\}\{\{end\}\}' {{container}}`

- Display the path to the container's log file:

`docker inspect {{[-f|--format]}} '\{\{.LogPath\}\}' {{container}}`

- Display the image name of the container:

`docker inspect {{[-f|--format]}} '\{\{.Config.Image\}\}' {{container}}`

- Display the configuration information as JSON:

`docker inspect {{[-f|--format]}} '\{\{json .Config\}\}' {{container}}`

- Display all port bindings:

`docker inspect {{[-f|--format]}} '\{\{range $p, $conf := .NetworkSettings.Ports\}\} \{\{$p\}\} -> \{\{(index $conf 0).HostPort\}\} \{\{end\}\}' {{container}}`
