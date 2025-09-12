---
title: "Control Redis Server - Persistent Key-Value Database | Free DevTools"
name: redis-server
path: /freedevtools/tldr/common/redis-server
canonical: "https://hexmos.com/freedevtools/tldr/common/redis-server/"
description: "Control Redis server settings and instances with this free online tool. Manage your key-value database and logging options. Free online tool, no registration required."
category: common
keywords:
- redis server control
- persistent key-value database
- redis configuration management
- redis command line interface
- redis logging control
- linux redis server
- macos redis server
- redis background process
- redis port management
- redis configuration file
features:
- Start Redis server with default or custom port
- Run Redis server as a background process
- Configure Redis server using a configuration file
- Control Redis server logging levels
- Manage persistent key-value storage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# redis-server

> Persistent key-value database.
> More information: <https://redis.io>.

- Start Redis server, using the default port (6379), and write logs to `stdout`:

`redis-server`

- Start Redis server, using the default port, as a background process:

`redis-server --daemonize yes`

- Start Redis server, using the specified port, as a background process:

`redis-server --port {{port}} --daemonize yes`

- Start Redis server with a custom configuration file:

`redis-server {{path/to/redis.conf}}`

- Start Redis server with verbose logging:

`redis-server --loglevel {{warning|notice|verbose|debug}}`
