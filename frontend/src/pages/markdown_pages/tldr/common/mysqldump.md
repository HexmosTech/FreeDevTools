---
title: "MySQL Backup - Create Database Backups | Online Free DevTools by Hexmos"
name: mysqldump
path: /freedevtools/tldr/common/mysqldump
canonical: "https://hexmos.com/freedevtools/tldr/common/mysqldump/"
description: "Create MySQL backups with mysqldump. Easily backup databases, tables, and entire servers. Free online tool, no registration required."
category: common
keywords:
- mysql database backup
- mysql dump command
- database backup script
- mysql backup linux
- mysql export database
- mysql data extraction
- mysql command line backup
- mysql server backup
- mysql database dump
- mysql database export
features:
- Create full database backups
- Backup specific tables
- Backup all databases on a server
- Backup databases from remote hosts
- Redirect backup output to a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mysqldump

> Backups MySQL databases.
> See also: `mysql` for restoring databases.
> More information: <https://dev.mysql.com/doc/refman/en/mysqldump.html>.

- Create a backup (user will be prompted for a password):

`mysqldump --user {{user}} --password {{database_name}} --result-file={{path/to/file.sql}}`

- Backup a specific table redirecting the output to a file (user will be prompted for a password):

`mysqldump --user {{user}} --password {{database_name}} {{table_name}} > {{path/to/file.sql}}`

- Backup all databases redirecting the output to a file (user will be prompted for a password):

`mysqldump --user {{user}} --password --all-databases > {{path/to/file.sql}}`

- Backup all databases from a remote host, redirecting the output to a file (user will be prompted for a password):

`mysqldump --host={{ip_or_hostname}} --user {{user}} --password --all-databases > {{path/to/file.sql}}`
