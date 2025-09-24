---
title: "MongoDB Shell - Execute Commands | Online Free DevTools by Hexmos"
name: mongosh
path: /freedevtools/tldr/mongo/mongosh
canonical: "https://hexmos.com/freedevtools/tldr/mongo/mongosh/"
description: "Execute MongoDB commands with Mongosh. Connect to databases, authenticate users, and evaluate JavaScript expressions easily. Free online tool, no registration required."
category: common
keywords:
- MongoDB shell command
- Mongosh database query
- MongoDB shell authentication
- Mongosh JavaScript execution
- MongoDB shell connection string
- Mongosh command-line interface
- Mongosh database management
- NoSQL database shell
- MongoDB query tool
- Mongosh shell scripting
features:
- Connect to MongoDB databases
- Authenticate with username and password
- Evaluate JavaScript expressions against a database
- Execute database commands from the command line
- Specify connection options using connection strings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mongosh

> A new shell for MongoDB, replacement for `mongo`.
> Note: All connection options can be replaced with one string: `mongodb://user@host:port/db_name?authSource=authdb_name`.
> More information: <https://www.mongodb.com/docs/mongodb-shell>.

- Connect to a local database on the default port (`mongodb://localhost:27017`):

`mongosh`

- Connect to a database:

`mongosh --host {{host}} --port {{port}} {{db_name}}`

- Authenticate using the specified username on the specified database (you will be prompted for a password):

`mongosh --host {{host}} --port {{port}} --username {{username}} --authenticationDatabase {{authdb_name}} {{db_name}}`

- Evaluate a JavaScript expression on a database:

`mongosh --eval '{{JSON.stringify(db.foo.findOne())}}' {{db_name}}`
