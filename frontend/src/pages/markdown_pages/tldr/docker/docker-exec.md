---
title: "Docker Exec - Execute Commands in Running Containers | Free DevTools"
name: docker-exec
path: /freedevtools/tldr/common/docker-exec
canonical: "https://hexmos.com/freedevtools/tldr/common/docker-exec/"
description: "Execute commands in running containers with Docker Exec. Manage processes, debug applications, and interact with Dockerized environments. Free online tool, no registration required."
category: common
keywords:
- docker execute command
- docker container shell
- docker interactive session
- docker background process
- docker environment variable
- docker user context
- docker command line
- docker container management
- docker cli
- linux container execute
features:
- Execute commands within a running Docker container.
- Access an interactive shell inside a Docker container.
- Run commands in the background of a Docker container.
- Set environment variables for commands executed inside a container.
- Execute commands as a specific user within a Docker container.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker exec

> Execute a command on an already running Docker container.
> More information: <https://docs.docker.com/reference/cli/docker/container/exec/>.

- Enter an interactive shell session on an already-running container:

`docker exec {{[-it|--interactive --tty]}} {{container_name}} {{/bin/bash}}`

- Run a command in the background (detached) on a running container:

`docker exec {{[-d|--detach]}} {{container_name}} {{command}}`

- Select the working directory for a given command to execute into:

`docker exec {{[-it|--interactive --tty]}} {{[-w|--workdir]}} {{path/to/directory}} {{container_name}} {{command}}`

- Run a command in background on existing container but keep `stdin` open:

`docker exec {{[-i|--interactive]}} {{[-d|--detach]}} {{container_name}} {{command}}`

- Set an environment variable in a running Bash session:

`docker exec {{[-it|--interactive --tty]}} {{[-e|--env]}} {{variable_name}}={{value}} {{container_name}} {{/bin/bash}}`

- Run a command as a specific user:

`docker exec {{[-u|--user]}} {{user}} {{container_name}} {{command}}`
