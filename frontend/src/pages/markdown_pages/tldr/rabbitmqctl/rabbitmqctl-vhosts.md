---
title: "RabbitMQ Vhosts - Control Virtual Hosts | Free DevTools"
name: rabbitmqctl-vhosts
path: /freedevtools/tldr/rabbitmqctl/rabbitmqctl-vhosts
canonical: "https://hexmos.com/freedevtools/tldr/rabbitmqctl/rabbitmqctl-vhosts/"
description: "Control RabbitMQ virtual hosts easily with rabbitmqctl-vhosts. Manage vhosts, set permissions, and ensure secure multi-tenancy. Free online tool, no registration required."
category: common
keywords:
- RabbitMQ vhosts management
- RabbitMQ virtual hosts control
- RabbitMQ vhost configuration
- rabbitmqctl vhost commands
- AMQP virtual hosts
- Message queue vhosts
- Distributed messaging vhosts
- RabbitMQ multi-tenancy
- Erlang RabbitMQ vhosts
- Command-line vhost management
features:
- List existing RabbitMQ virtual hosts
- Add new virtual hosts to RabbitMQ
- Delete specified virtual hosts from RabbitMQ
- Set user permissions for specific virtual hosts
- Clear user permissions on RabbitMQ virtual hosts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rabbitmqctl-vhosts

> Manage virtual hosts (vhosts) in RabbitMQ.
> Vhosts are used to separate multiple logical brokers on the same RabbitMQ server.
> More information: <https://www.rabbitmq.com/vhosts.html>.

- List all virtual hosts:

`rabbitmqctl list_vhosts`

- Add a new virtual host:

`rabbitmqctl add_vhost {{vhost_name}}`

- Delete a virtual host:

`rabbitmqctl delete_vhost {{vhost_name}}`

- Set permissions for a user on a specific virtual host:

`rabbitmqctl set_permissions {{[-p|--vhost]}} {{vhost_name}} {{username}} {{read}} {{write}} {{configure}}`

- Clear permissions for a user on a specific virtual host:

`rabbitmqctl clear_permissions {{[-p|--vhost]}} {{vhost_name}} {{username}}`
