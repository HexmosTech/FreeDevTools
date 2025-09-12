---
title: "Copy Files - Manage Docker Filesystems with Docker CP | Free DevTools"
name: docker-cp
path: /freedevtools/tldr/common/docker-cp
canonical: "https://hexmos.com/freedevtools/tldr/common/docker-cp/"
description: "Manage Docker filesystems effortlessly with Docker CP. Transfer files between host and container, ensuring seamless data movement. Free online tool, no registration required."
category: common
keywords:
- docker copy files
- docker cp host to container
- docker cp container to host
- docker file transfer
- docker filesystem management
- linux docker cp
- macos docker cp
- windows docker cp
- docker container copy
- docker volume copy
features:
- Copy files and directories from host to container
- Copy files and directories from container to host
- Follow symlinks when copying from host to container
- Transfer data between host and Docker environments
- Manage container filesystems via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker cp

> Copy files or directories between host and container filesystems.
> More information: <https://docs.docker.com/reference/cli/docker/container/cp/>.

- Copy a file or directory from the host to a container:

`docker cp {{path/to/file_or_directory_on_host}} {{container_name}}:{{path/to/file_or_directory_in_container}}`

- Copy a file or directory from a container to the host:

`docker cp {{container_name}}:{{path/to/file_or_directory_in_container}} {{path/to/file_or_directory_on_host}}`

- Copy a file or directory from the host to a container, following symlinks (copies the symlinked files directly, not the symlinks themselves):

`docker cp {{[-L|--follow-link]}} {{path/to/symlink_on_host}} {{container_name}}:{{path/to/file_or_directory_in_container}}`
