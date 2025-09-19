---
title: "Podman Run - Create Containers Easily | Online Free DevTools by Hexmos"
name: podman-run
path: /freedevtools/tldr/podman/podman-run
canonical: "https://hexmos.com/freedevtools/tldr/podman/podman-run/"
description: "Create containers instantly with Podman Run. Manage images, execute commands, and isolate applications using the command line. Free online tool, no registration required."
category: common
keywords:
- podman container run
- linux container execution
- command-line containerization
- docker alternative
- oci container runtime
- podman image management
- container environment variables
- container volume mounting
- container port publishing
- rootless containers
features:
- Run commands in isolated containers
- Mount volumes for persistent data
- Publish ports to expose container services
- Set environment variables for container configuration
- Override the container entrypoint
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# podman run

> Run a command in a new Podman container.
> More information: <https://docs.podman.io/en/latest/markdown/podman-run.1.html>.

- Run command in a new container from a tagged image:

`podman run {{image:tag}} {{command}}`

- Run command in a new container in background and display its ID:

`podman run --detach {{image:tag}} {{command}}`

- Run command in a one-off container in interactive mode and pseudo-TTY:

`podman run --rm --interactive --tty {{image:tag}} {{command}}`

- Run command in a new container with passed environment variables:

`podman run --env '{{variable}}={{value}}' --env {{variable}} {{image:tag}} {{command}}`

- Run command in a new container with bind mounted volumes:

`podman run --volume /{{path/to/host_path}}:/{{path/to/container_path}} {{image:tag}} {{command}}`

- Run command in a new container with published ports:

`podman run --publish {{host_port}}:{{container_port}} {{image:tag}} {{command}}`

- Run command in a new container overwriting the entrypoint of the image:

`podman run --entrypoint {{command}} {{image:tag}}`

- Run command in a new container connecting it to a network:

`podman run --network {{network}} {{image:tag}}`
