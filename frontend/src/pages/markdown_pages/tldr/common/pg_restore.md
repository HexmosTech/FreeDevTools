---
title: "Pg_restore - Restore PostgreSQL Databases | Free DevTools"
name: pg_restore
path: /freedevtools/tldr/common/pg_restore
canonical: "https://hexmos.com/freedevtools/tldr/common/pg_restore/"
description: "Restore PostgreSQL databases instantly with pg_restore. Recover data from backups and manage database objects easily. Free online tool, no registration required."
category: common
keywords:
- PostgreSQL database restore
- pg_restore command
- Database backup recovery
- PostgreSQL archive file
- Restore database objects
- SQL database recovery
- Command line restore
- Database dump restore
- Common pg_restore
- psql restore
features:
- Restore a PostgreSQL database from an archive file
- List database objects within an archive
- Clean database objects prior to restoration
- Customize the database username, host and port
- Utilize multiple jobs for faster restoration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pg_restore

> Restore a PostgreSQL database from an archive file created by pg_dump.
> More information: <https://www.postgresql.org/docs/current/app-pgrestore.html>.

- Restore an archive into an existing database:

`pg_restore {{[-d|--dbname]}} {{db_name}} {{archive_file.dump}}`

- Same as above, customize username:

`pg_restore {{[-U|--username]}} {{username}} {{[-d|--dbname]}} {{db_name}} {{archive_file.dump}}`

- Same as above, customize host and port:

`pg_restore {{[-h|--host]}} {{host}} {{[-p|--port]}} {{port}} {{[-d|--dbname]}} {{db_name}} {{archive_file.dump}}`

- List database objects included in the archive:

`pg_restore {{[-l|--list]}} {{archive_file.dump}}`

- Clean database objects before creating them:

`pg_restore {{[-c|--clean]}} {{[-d|--dbname]}} {{db_name}} {{archive_file.dump}}`

- Use multiple jobs to do the restoring:

`pg_restore {{[-j|--jobs]}} {{2}} {{[-d|--dbname]}} {{db_name}} {{archive_file.dump}}`
