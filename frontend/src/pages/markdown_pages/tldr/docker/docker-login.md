---
title: "Docker Login - Authenticate to Docker Registry | Online Free DevTools by Hexmos"
name: docker-login
path: /freedevtools/tldr/docker/docker-login
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-login/"
description: "Authenticate with Docker using Docker Login. Securely access private repositories and images. Free online tool, no registration required."
category: common
keywords:
- docker login
- docker registry login
- docker authenticate
- docker image authentication
- docker command line login
- docker login command
- docker hub login
- docker login ubuntu
- docker login windows
- docker login cli
features:
- Interactively authenticate to a Docker registry.
- Log in with a specific username and password.
- Authenticate using password from standard input (stdin).
- Securely log in to private repositories.
- Authenticate to Docker registry via command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker login

> Log into a Docker registry.
> More information: <https://docs.docker.com/reference/cli/docker/login/>.

- Interactively log into a registry:

`docker login`

- Log into a registry with a specific username (user will be prompted for a password):

`docker login {{[-u|--username]}} {{username}}`

- Log into a registry with username and password:

`docker login {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} {{server}}`

- Log into a registry with password from `stdin`:

`echo "{{password}}" | docker login {{[-u|--username]}} {{username}} --password-stdin`
