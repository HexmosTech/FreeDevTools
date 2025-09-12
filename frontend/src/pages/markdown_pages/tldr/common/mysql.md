---
title: "MySQL Tool - Manage Databases | Free DevTools"
name: mysql
path: /freedevtools/tldr/common/mysql
canonical: "https://hexmos.com/freedevtools/tldr/common/mysql/"
description: "Manage databases with MySQL tool. Connect to databases, execute SQL scripts, and restore backups. Free online tool, no registration required."
category: common
keywords:
- mysql database management
- mysql command line tool
- mysql sql execution
- mysql database restore
- mysql connection parameters
- mysql linux
- mysql database backup
- mysql unix socket connection
- mysql command line interface
- mysql database administration
features:
- Connect to a MySQL database
- Execute SQL statements from a file
- Restore a database from a SQL backup
- Connect to a database using a Unix socket
- Specify username and password for database connection
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mysql

> The MySQL tool.
> More information: <https://manned.org/mysql>.

- Connect to a database:

`mysql {{database_name}}`

- Connect to a database, user will be prompted for a password:

`mysql {{[-u|--user]}} {{user}} {{[-p|--password]}} {{database_name}}`

- Connect to a database on another host:

`mysql {{[-h|--host]}} {{database_host}} {{database_name}}`

- Connect to a database through a Unix socket:

`mysql {{[-S|--socket]}} {{path/to/socket.sock}}`

- Execute SQL statements in a script file (batch file):

`mysql {{[-e|--execute]}} "source {{filename.sql}}" {{database_name}}`

- Restore a database from a backup created with `mysqldump` (user will be prompted for a password):

`mysql {{[-u|--user]}} {{user}} {{[-p|--password]}} {{database_name}} < {{path/to/backup.sql}}`

- Restore all databases from a backup (user will be prompted for a password):

`mysql {{[-u|--user]}} {{user}} {{[-p|--password]}} < {{path/to/backup.sql}}`
