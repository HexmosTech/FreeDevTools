---
title: "Neo4j Admin - Manage Database Instances | Online Free DevTools by Hexmos"
name: neo4j-admin
path: "/freedevtools/tldr/common/neo4j-admin/"
canonical: "https://hexmos.com/freedevtools/tldr/common/neo4j-admin/"
description: "Manage Neo4j database instances with neo4j-admin. Control startup, shutdown, and password settings using command line. Free online tool, no registration required."
category: common
keywords:
- Neo4j database administration
- Graph database management
- Neo4j server control
- Neo4j database backup
- Neo4j database restore
- Neo4j database dump
- Neo4j database load
- Neo4j admin CLI
- Neo4j password reset
- Neo4j command line tools
features:
- Start and stop Neo4j database server
- Set initial password for Neo4j database
- Create database backups as dump files
- Restore databases from archive files
- Load database from stdin
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# neo4j-admin

> Manage and administer a Neo4j DBMS (Database Management System).
> See also: `cypher-shell`, `mysqld`.
> More information: <https://neo4j.com/docs/operations-manual/current/neo4j-admin-neo4j-cli/>.

- Start the DBMS:

`neo4j-admin server start`

- Stop the DBMS:

`neo4j-admin server stop`

- Set the initial password of the default `neo4j` user (prerequisite for the first start of the DBMS):

`neo4j-admin dbms set-initial-password {{database_name}}`

- Create an archive (dump) of an offline database to a file named `database_name.dump`:

`neo4j-admin database dump --to-path={{path/to/directory}} {{database_name}}`

- Load a database from an archive named `database_name.dump`:

`neo4j-admin database load --from-path={{path/to/directory}} {{database_name}} --overwrite-destination=true`

- Load a database from a specified archive file through `stdin`:

`neo4j-admin database load --from-stdin {{database_name}} --overwrite-destination=true < {{path/to/filename.dump}}`

- Display help:

`neo4j-admin --help`
