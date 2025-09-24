---
title: "Connect to MongoDB - Manage Databases | Online Free DevTools by Hexmos"
name: mongo
path: /freedevtools/tldr/mongo/mongo
canonical: "https://hexmos.com/freedevtools/tldr/mongo/mongo/"
description: "Connect to MongoDB databases with the `mongo` shell. Execute queries, authenticate users, and manage your data. Free online tool, no registration required."
category: common
keywords:
- mongodb connection
- mongodb query
- mongodb shell
- mongodb database
- mongodb authentication
- mongodb javascript
- mongodb localhost
- mongodb command line
- nosql database
- mongodb user management
features:
- Connect to MongoDB databases using various connection strings
- Authenticate with MongoDB using usernames and authentication databases
- Execute JavaScript expressions directly on the MongoDB database
- Query and manipulate data within MongoDB databases
- Specify host, port, and database name for targeted connections
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mongo

> The legacy MongoDB shell. See `mongosh` for the new shell.
> Note: All connection options can be replaced with one string: `mongodb://user@host:port/db_name?authSource=authdb_name`.
> More information: <https://docs.mongodb.com/manual/reference/program/mongo>.

- Connect to a local database on the default port (`mongodb://localhost:27017`):

`mongo`

- Connect to a database:

`mongo --host {{host}} --port {{port}} {{db_name}}`

- Authenticate using the specified username on the specified database (you will be prompted for a password):

`mongo --host {{host}} --port {{port}} --username {{username}} --authenticationDatabase {{authdb_name}} {{db_name}}`

- Evaluate a JavaScript expression on a database:

`mongo --eval '{{JSON.stringify(db.foo.findOne())}}' {{db_name}}`
