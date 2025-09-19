---
title: "Create MongoDB Backups - mongodump | Online Free DevTools by Hexmos"
name: mongodump
path: /freedevtools/tldr/mongo/mongodump
canonical: "https://hexmos.com/freedevtools/tldr/mongo/mongodump/"
description: "Create MongoDB backups with mongodump. Export entire databases or specific collections for safekeeping. Free online tool, no registration required."
category: common
keywords:
- MongoDB backup
- database dump
- export MongoDB
- MongoDB data export
- mongodump command
- NoSQL backup
- data backup tool
- MongoDB recovery
- database migration tool
- common command
features:
- Export entire MongoDB databases to a directory
- Create backups of specific collections within a database
- Connect to remote MongoDB instances using host and port
- Authenticate MongoDB backups with username and password
- Create backups using a MongoDB connection string (URI)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mongodump

> Utility to export the contents of a MongoDB instance.
> More information: <https://docs.mongodb.com/database-tools/mongodump/>.

- Create a dump of all databases (this will place the files inside a directory called "dump"):

`mongodump`

- Specify an output location for the dump:

`mongodump {{[-o|--out]}} {{path/to/directory}}`

- Create a dump of a given database:

`mongodump {{[-d|--db]}} {{database_name}}`

- Create a dump of a given collection within a given database:

`mongodump {{[-c|--collection]}} {{collection_name}} {{[-d|--db]}} {{database_name}}`

- Connect to a given host running on a given port, and create a dump:

`mongodump {{[-h|--host]}} {{host}} --port {{port}}`

- Create a dump of a given database with a given username; user will be prompted for password:

`mongodump {{[-u|--username]}} {{username}} {{database}} {{[-p|--password]}}`

- Create a dump from a specific instance; host, user, password and database will be defined in the connection string:

`mongodump --uri {{connection_string}}`
