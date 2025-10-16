---
title: "RabbitMQ User Control - Manage Permissions | Online Free DevTools by Hexmos"
name: rabbitmqctl-users
path: "/freedevtools/tldr/rabbitmqctl/rabbitmqctl-users/"
canonical: "https://hexmos.com/freedevtools/tldr/rabbitmqctl/rabbitmqctl-users/"
description: "Manage RabbitMQ users with RabbitMQctl Users command. Control user permissions, set tags, and manage credentials for secure messaging. Free online tool, no registration required."
category: common
keywords:
- RabbitMQ user management
- RabbitMQ permissions control
- RabbitMQ authentication
- AMQP user management
- Message queue security
- RabbitMQctl user commands
- RabbitMQ administrator tools
- RabbitMQ user tags
- RabbitMQ vhost permissions
- Command line RabbitMQ user control
features:
- Manage RabbitMQ user credentials
- Set user permissions on virtual hosts
- Assign tags to RabbitMQ users
- Clear user permissions easily
- Control users through the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rabbitmqctl-users

> Manage RabbitMQ users, their permissions, and tags.
> More information: <https://www.rabbitmq.com/management.html>.

- List all users:

`rabbitmqctl list_users`

- Add a new user with a password:

`rabbitmqctl add_user {{username}} {{password}}`

- Delete an existing user:

`rabbitmqctl delete_user {{username}}`

- Change the password for a user:

`rabbitmqctl change_password {{username}} {{new_password}}`

- Set permissions for a user on a specific virtual host:

`rabbitmqctl set_permissions {{[-p|--vhost]}} {{vhost}} {{username}} {{read}} {{write}} {{configure}}`

- Clear all permissions for a user on a specific virtual host:

`rabbitmqctl clear_permissions {{[-p|--vhost]}} {{vhost}} {{username}}`

- Assign one or more tags (e.g., administrator) to a user:

`rabbitmqctl set_user_tags {{username}} {{tag1}} [{{tag2}}]`
