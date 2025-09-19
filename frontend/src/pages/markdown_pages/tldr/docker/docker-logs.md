---
title: "Docker Logs - Control Container Logs | Online Free DevTools by Hexmos"
name: docker-logs
path: /freedevtools/tldr/docker/docker-logs
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-logs/"
description: "Control Docker container logs instantly with Docker Logs. Tail logs, filter by time, and view timestamps with ease. Free online tool, no registration required."
category: common
keywords:
- docker container logs
- container logging
- docker log viewer
- linux docker logs
- docker logs timestamp
- docker logs tail
- docker logs until
- docker logs follow
- docker logs command
- docker troubleshooting
features:
- Print logs from specified containers
- Follow container logs in real-time
- Print a specific number of lines from the end of logs
- Append timestamps to each log entry
- Filter logs based on a time range
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# docker logs

> Print container logs.
> More information: <https://docs.docker.com/reference/cli/docker/container/logs/>.

- Print logs from a container:

`docker logs {{container_name}}`

- Print logs and follow them:

`docker logs {{[-f|--follow]}} {{container_name}}`

- Print last 5 lines:

`docker logs {{container_name}} {{[-n|--tail]}} {{5}}`

- Print logs and append them with timestamps:

`docker logs {{[-t|--timestamps]}} {{container_name}}`

- Print logs from a certain point in time of container execution (i.e. 23m, 10s, 2013-01-02T13:23:37):

`docker logs {{container_name}} --until {{time}}`
