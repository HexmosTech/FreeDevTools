---
title: "Cypher Query - Run Queries on Neo4j | Free DevTools"
name: cypher-shell
path: /freedevtools/tldr/common/cypher-shell
canonical: "https://hexmos.com/freedevtools/tldr/common/cypher-shell/"
description: "Run Cypher queries with cypher-shell. Connect to Neo4j instances, execute Cypher statements and manage your database. Free online tool, no registration required."
category: common
keywords:
- Neo4j Cypher query
- graph database query
- Cypher shell command
- Neo4j command line
- database query tool
- graph query language
- Neo4j query execution
- database management tool
- cypher-shell Neo4j
- graph database shell
features:
- Connect to local or remote Neo4j instances
- Execute Cypher queries from files
- Authenticate with usernames and passwords
- Specify a target database for queries
- Log command output to a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cypher-shell

> Open an interactive session and run Cypher queries against a Neo4j instance.
> See also: `neo4j-admin`, `mysql`.
> More information: <https://neo4j.com/docs/operations-manual/current/tools/cypher-shell/>.

- Connect to a local instance on the default port (`neo4j://localhost:7687`):

`cypher-shell`

- Connect to a remote instance:

`cypher-shell --address neo4j://{{host}}:{{port}}`

- Connect and supply security credentials:

`cypher-shell --username {{username}} --password {{password}}`

- Connect to a specific database:

`cypher-shell --database {{database_name}}`

- Execute Cypher statements in a file and close:

`cypher-shell --file {{path/to/file.cypher}}`

- Enable logging to a file:

`cypher-shell --log {{path/to/file.log}}`

- Display help:

`cypher-shell --help`
