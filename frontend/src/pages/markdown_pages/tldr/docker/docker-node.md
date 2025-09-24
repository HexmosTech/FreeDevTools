---
title: "Docker Node - Manage Swarm Nodes | Online Free DevTools by Hexmos"
name: docker-node
path: /freedevtools/tldr/docker/docker-node
canonical: "https://hexmos.com/freedevtools/tldr/docker/docker-node/"
description: "Manage Docker Swarm nodes effectively with Docker Node commands. Inspect node details, promote/demote managers, and update node metadata. Free online tool, no registration required."
category: common
keywords:
- Docker Swarm node management
- Docker node command line
- Docker node inspection
- Docker node update
- Docker node promotion
- Docker node demotion
- Docker node removal
- Docker swarm orchestration
- Docker node metadata
- Docker node availability
features:
- List nodes in a Docker Swarm cluster.
- Display detailed information about Docker nodes.
- Promote or demote nodes within a Docker Swarm.
- Remove nodes from a Docker Swarm.
- Update the availability and roles of Docker nodes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# docker node

> Manage Docker Swarm nodes.
> More information: <https://docs.docker.com/reference/cli/docker/node/>.

- List nodes in the swarm:

`docker node ls`

- List tasks running on one or more nodes, defaults to the current node:

`docker node ps {{node1 node2 node3 ...}}`

- Display detailed information on one or more nodes:

`docker node inspect {{node1 node2 node3 ...}}`

- Promote one or more nodes to manager in the swarm:

`docker node promote {{node1 node2 node3 ...}}`

- Demote one or more nodes from manager in the swarm:

`docker node demote {{node1 node2 node3 ...}}`

- Remove one or more nodes from the swarm:

`docker node rm {{node1 node2 node3 ...}}`

- Update metadata about a node, such as its availability, labels, or roles:

`docker node update --{{availability|role|label-add|...}} {{active|worker|foo|...}} {{node1}}`
