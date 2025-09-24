---
title: "Redis Control - Manage Redis Server Connections | Online Free DevTools by Hexmos"
name: redis-cli
path: /freedevtools/tldr/redis/redis-cli
canonical: "https://hexmos.com/freedevtools/tldr/redis/redis-cli/"
description: "Control Redis server connections using redis-cli. Manage local and remote connections, execute commands, and handle authentication. Free online tool, no registration required."
category: common
keywords:
- Redis command line interface
- Redis server connection
- Redis client manager
- Redis remote access
- Redis authentication control
- Redis command executor
- Redis cluster control
- Redis connection string
- Redis connection manager
- Redis command-line tool
features:
- Connect to local and remote Redis servers.
- Execute arbitrary Redis commands.
- Authenticate with Redis servers using passwords.
- Connect to Redis clusters.
- Specify connection parameters like host, port, and URI.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# redis-cli

> Opens a connection to a Redis server.
> More information: <https://redis.io/topics/rediscli>.

- Connect to the local server:

`redis-cli`

- Connect to a remote server on the default port (6379):

`redis-cli -h {{host}}`

- Connect to a remote server specifying a port number:

`redis-cli -h {{host}} -p {{port}}`

- Connect to a remote server specifying a URI:

`redis-cli -u {{uri}}`

- Specify a password:

`redis-cli -a {{password}}`

- Execute Redis command:

`redis-cli {{redis_command}}`

- Connect to the local cluster:

`redis-cli -c`
