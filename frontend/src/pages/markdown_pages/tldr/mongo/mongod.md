---
title: "Control MongoDB Server - Manage Database Instances | Free DevTools"
name: mongod
path: /freedevtools/tldr/common/mongod
canonical: "https://hexmos.com/freedevtools/tldr/common/mongod/"
description: "Control MongoDB server instances with mongod. Configure database paths, ports, and profiling levels using command line. Free online tool, no registration required."
category: common
keywords:
- MongoDB server control
- MongoDB database management
- MongoDB command line tool
- MongoDB instance configuration
- MongoDB profiling tool
- NoSQL database server
- mongod command
- Linux MongoDB
- macOS MongoDB
- Windows MongoDB
features:
- Specify the database storage path
- Configure the port the server listens on
- Set the database profiling level
- Use a configuration file to define settings
- Manage MongoDB instances from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mongod

> The MongoDB database server.
> More information: <https://docs.mongodb.com/manual/reference/program/mongod>.

- Specify the storage directory (default: `/data/db` on Linux and macOS, `C:\data\db` on Windows):

`mongod --dbpath {{path/to/directory}}`

- Specify a configuration file:

`mongod --config {{path/to/file}}`

- Specify the port to listen on (default: 27017):

`mongod --port {{port}}`

- Specify the database profiling level. 0 is off, 1 is only slow operations, 2 is all (default: 0):

`mongod --profile {{0|1|2}}`
