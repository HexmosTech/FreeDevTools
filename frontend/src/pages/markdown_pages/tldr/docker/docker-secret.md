---
title: "Create Docker Secrets - Manage Swarm Secrets | Free DevTools"
name: docker-secret
path: /freedevtools/tldr/docker/docker-secret
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-secret/"
description: "Create Docker secrets securely with Docker Secret manager. Manage swarm secrets, store sensitive data, and improve container security. Free online tool, no registration required."
category: common
keywords:
- docker secret management
- docker swarm secrets
- docker container security
- docker secrets from file
- docker secrets stdin
- docker secrets list
- docker secrets inspect
- docker secrets remove
- docker secret command line
- docker secret cli
features:
- Create Docker secrets from stdin
- Create Docker secrets from a file
- List all Docker secrets
- Inspect Docker secrets details
- Remove one or more Docker secrets
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker secret

> Manage Docker swarm secrets.
> More information: <https://docs.docker.com/reference/cli/docker/secret/>.

- Create a new secret from `stdin`:

`{{command}} | docker secret create {{secret_name}} -`

- Create a new secret from a file:

`docker secret create {{secret_name}} {{path/to/file}}`

- List all secrets:

`docker secret ls`

- Display detailed information on one or multiple secrets in a human friendly format:

`docker secret inspect --pretty {{secret_name1 secret_name2 ...}}`

- Remove one or more secrets:

`docker secret rm {{secret_name1 secret_name2 ...}}`
