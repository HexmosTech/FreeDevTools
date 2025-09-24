---
title: "MySQL Shell - Control MySQL Databases | Online Free DevTools by Hexmos"
name: mysqlsh
path: /freedevtools/tldr/common/mysqlsh
canonical: "https://hexmos.com/freedevtools/tldr/common/mysqlsh/"
description: "Control MySQL databases with MySQL Shell. Connect, query, and manage your MySQL servers from the command line. Free online tool, no registration required."
category: common
keywords:
- mysql shell
- mysql client
- mysql command line
- mysql javascript
- mysql python
- mysql database administration
- mysql schema management
- mysql innodb cluster
- mysql document store
- mysql json import
features:
- Connect to MySQL servers using different protocols
- Execute SQL statements and scripts
- Manage InnoDB clusters
- Import JSON documents into MySQL collections
- Interact with MySQL databases in JavaScript or Python
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mysqlsh

> Advanced client for MySQL, supporting SQL, JavaScript, and Python.
> It offers features for managing InnoDB clusters and document store collections.
> More information: <https://manned.org/mysqlsh>.

- Start MySQL Shell in interactive mode:

`mysqlsh`

- Connect to a MySQL server:

`mysqlsh --user {{username}} --host {{hostname}} --port {{port}}`

- Execute an SQL statement on the server and exit:

`mysqlsh --user {{username}} --execute '{{sql_statement}}'`

- Start MySQL Shell in JavaScript mode:

`mysqlsh --js`

- Start MySQL Shell in Python mode:

`mysqlsh --py`

- Import JSON documents into a MySQL collection:

`mysqlsh --import {{path/to/file.json}} --schema {{schema_name}} --collection {{collection_name}}`

- Enable verbose output:

`mysqlsh --verbose`
