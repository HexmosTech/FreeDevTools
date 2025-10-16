---
title: "Docker Swarm - Control Container Clusters | Online Free DevTools by Hexmos"
name: docker-swarm
path: "/freedevtools/tldr/docker/docker-swarm/"
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-swarm/"
description: "Control Docker Swarm clusters effortlessly with this online tool. Manage nodes, tokens, and certificates with ease. Free online tool, no registration required."
category: common
keywords:
- docker swarm control
- container orchestration
- docker cluster management
- swarm init
- swarm join token
- docker swarm leave
- docker swarm ca
- docker node management
- docker swarm update
- container deployment
features:
- Initialize a Docker Swarm cluster
- Display join tokens for managers and workers
- Join new nodes to an existing swarm
- Remove a worker node from the swarm
- Rotate the CA certificate for secure communication
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker swarm

> A container orchestration tool.
> More information: <https://docs.docker.com/engine/swarm/>.

- Initialize a swarm cluster:

`docker swarm init`

- Display the token to join a manager or a worker:

`docker swarm join-token {{worker|manager}}`

- Join a new node to the cluster:

`docker swarm join --token {{token}} {{manager_node_url:2377}}`

- Remove a worker from the swarm (run inside the worker node):

`docker swarm leave`

- Display the current CA certificate in PEM format:

`docker swarm ca`

- Rotate the current CA certificate and display the new certificate:

`docker swarm ca --rotate`

- Change the valid period for node certificates:

`docker swarm update --cert-expiry {{hours}}h{{minutes}}m{{seconds}}s`
