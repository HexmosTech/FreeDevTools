---
title: "Docker Registry Tool - List & Dump Repositories | Free DevTools"
name: dockdiver
path: /freedevtools/tldr/common/dockdiver
canonical: "https://hexmos.com/freedevtools/tldr/common/dockdiver/"
description: "List and dump repositories with Docker Registry Tool Dockdiver. Easily manage Docker images and access registry data. Free online tool, no registration required."
category: common
keywords:
- docker registry tool
- docker repository list
- docker repository dump
- docker image management
- docker registry access
- container registry tool
- docker CLI tool
- docker repository browser
- docker registry explorer
- docker registry enumeration
features:
- List all repositories in a Docker registry.
- Dump a specific Docker repository to a directory.
- Authenticate with username and password.
- Authenticate with bearer token.
- Add custom headers for requests.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dockdiver

> A tool for interacting with Docker registries, including listing and dumping repositories.
> More information: <https://github.com/MachiavelliII/dockdiver>.

- List all repositories in a Docker registry:

`dockdiver -url {{https://example.com}} -list`

- Dump a specific repository to the default output directory (docker_dump):

`dockdiver -url {{https://example.com}} -dump {{repository_name}}`

- Dump all repositories with basic authentication:

`dockdiver -url {{https://example.com}} -dump-all -username {{username}} -password {{password}}`

- Dump a repository with a rate limit and a custom port (the default port is `5000`):

`dockdiver -url {{https://example.com}} -dump {{repository_name}} -port {{port}} -rate {{requests_per_second}} -dir {{path/to/output_directory}}`

- Dump all repositories with bearer token for authorization:

`dockdiver -url {{https://example.com}} -dump-all -bearer {{bearer_token}}`

- Add custom headers as JSON (e.g., '{"X-Custom": "Value"}'):

`dockdiver -url {{https://example.com}} -list -headers {{'{"X-Custom": "Value"}'}}`
