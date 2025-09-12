---
title: "Docker Volume - Manage Data Volumes | Free DevTools"
name: docker-volume
path: /freedevtools/tldr/common/docker-volume
canonical: "https://hexmos.com/freedevtools/tldr/common/docker-volume/"
description: "Manage Docker data volumes with Docker Volume. Create, list, remove, and inspect volumes efficiently. Free online tool, no registration required."
category: common
keywords:
- docker volume management
- docker data volume
- docker volume create
- docker volume list
- docker volume remove
- docker volume inspect
- docker volume prune
- docker volume tmpfs
- docker volume label
- docker container data
features:
- Create Docker volumes with custom labels
- Manage tmpfs volumes with specific size and UID
- List all existing Docker volumes
- Remove unused local Docker volumes
- Inspect Docker volume details
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker volume

> Manage Docker volumes.
> More information: <https://docs.docker.com/reference/cli/docker/volume/>.

- Create a volume:

`docker volume create {{volume_name}}`

- Create a volume with a specific label:

`docker volume create --label {{label}} {{volume_name}}`

- Create a `tmpfs` volume a size of 100 MiB and an uid of 1000:

`docker volume create {{[-o|--opt]}} {{type}}={{tmpfs}} {{[-o|--opt]}} {{device}}={{tmpfs}} {{[-o|--opt]}} {{o}}={{size=100m,uid=1000}} {{volume_name}}`

- List all volumes:

`docker volume ls`

- Remove a volume:

`docker volume rm {{volume_name}}`

- Display information about a volume:

`docker volume inspect {{volume_name}}`

- Remove all unused local volumes:

`docker volume prune`

- Display help for a subcommand:

`docker volume {{subcommand}} --help`
