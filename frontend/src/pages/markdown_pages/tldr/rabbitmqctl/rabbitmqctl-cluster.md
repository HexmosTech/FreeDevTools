---
title: "RabbitMQ Cluster - Control Nodes | Online Free DevTools by Hexmos"
name: rabbitmqctl-cluster
path: /freedevtools/tldr/rabbitmqctl/rabbitmqctl-cluster
canonical: "https://hexmos.com/freedevtools/tldr/rabbitmqctl/rabbitmqctl-cluster/"
description: "Control RabbitMQ nodes easily with RabbitMQ Cluster command. Manage cluster status and node operations efficiently. Free online tool, no registration required."
category: common
keywords:
- rabbitmq cluster control
- rabbitmq node management
- cluster status command
- rabbitmqctl cluster administration
- rabbitmq node stop
- rabbitmq node start
- rabbitmq node reset
- rabbitmq join cluster
- rabbitmq cluster tools
- amqp cluster management
features:
- Display RabbitMQ cluster status
- Start and stop RabbitMQ applications on specific nodes
- Stop specific RabbitMQ nodes
- Reset RabbitMQ nodes to a clean state
- Join existing RabbitMQ clusters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rabbitmqctl-cluster

> Manage RabbitMQ nodes in a cluster.
> More information: <https://www.rabbitmq.com/rabbitmqctl.8.html>.

- Display the status of the cluster:

`rabbitmqctl cluster_status`

- Display the status of the current node:

`rabbitmqctl status`

- Start the RabbitMQ application on a specific node:

`rabbitmqctl {{[-n|--node]}} {{nodename}} start_app`

- Stop the RabbitMQ application on a specific node:

`rabbitmqctl {{[-n|--node]}} {{nodename}} stop_app`

- Stop a specific RabbitMQ node:

`rabbitmqctl {{[-n|--node]}} {{nodename}} stop`

- Reset a specific RabbitMQ node to a clean state:

`rabbitmqctl {{[-n|--node]}} {{nodename}} reset`

- Make the current node join an existing cluster:

`rabbitmqctl join_cluster {{nodename}}`
