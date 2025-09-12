---
title: "MongoDB Restore - Import Data | Free DevTools"
name: mongorestore
path: /freedevtools/tldr/common/mongorestore
canonical: "https://hexmos.com/freedevtools/tldr/common/mongorestore/"
description: "Import MongoDB data with mongorestore. Restore databases and collections from binary dumps into MongoDB instances. Free online tool, no registration required."
category: common
keywords:
- mongodb restore
- mongodb import
- bson import
- mongodb database restore
- mongodb collection restore
- mongodb dump import
- database restore tool
- mongodb data recovery
- mongodb command line tools
- data migration
features:
- Restore MongoDB databases from binary dumps.
- Restore individual collections from BSON files.
- Authenticate with username and password.
- Specify host and port for remote MongoDB servers.
- Import data into a specific database.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mongorestore

> Utility to import a collection or database from a binary dump into a MongoDB instance.
> More information: <https://docs.mongodb.com/database-tools/mongorestore/>.

- Import a BSON data dump from a directory to a MongoDB database:

`mongorestore --db {{database_name}} {{path/to/directory}}`

- Import a BSON data dump from a directory to a given database in a MongoDB server host, running at a given port, with user authentication (user will be prompted for password):

`mongorestore --host {{database_host:port}} --db {{database_name}} --username {{username}} {{path/to/directory}} --password`

- Import a collection from a BSON file to a MongoDB database:

`mongorestore --db {{database_name}} {{path/to/file}}`

- Import a collection from a BSON file to a given database in a MongoDB server host, running at a given port, with user authentication (user will be prompted for password):

`mongorestore --host {{database_host:port}} --db {{database_name}} --username {{username}} {{path/to/file}} --password`
