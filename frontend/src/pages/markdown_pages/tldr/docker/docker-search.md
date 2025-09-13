---
title: "Docker Search - Find Docker Images on Docker Hub | Free DevTools"
name: docker-search
path: /freedevtools/tldr/common/docker-search
canonical: "https://hexmos.com/freedevtools/tldr/common/docker-search/"
description: "Find Docker images easily with Docker Search. Discover official images, automated builds, and filter by stars on Docker Hub. Free online tool, no registration required."
category: common
keywords:
- docker image search
- docker hub search
- docker command line
- docker official images
- docker automated builds
- docker image registry
- docker search filters
- docker search stars
- docker cli search
- docker find images
features:
- Search Docker Hub for images by keyword
- Filter Docker images by official status
- Find Docker images with automated builds
- Search Docker images by minimum star count
- Limit the number of Docker search results
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker search

> Search for Docker images on Docker Hub.
> More information: <https://docs.docker.com/reference/cli/docker/search/>.

- Search for Docker images by name or keyword:

`docker search {{keyword}}`

- Search for images and only show official ones:

`docker search {{[-f|--filter]}} is-official=true {{keyword}}`

- Search for images and only show automated builds:

`docker search {{[-f|--filter]}} is-automated=true {{keyword}}`

- Search for images with a minimum number of stars:

`docker search {{[-f|--filter]}} stars={{number}} {{keyword}}`

- Limit the number of results:

`docker search --limit {{number}} {{keyword}}`

- Customize the output format:

`docker search {{[-f|--format]}} "{{.Name}}: {{.Description}}" {{keyword}}`
