---
title: "Start MySQL Server - Control Database Instances | Free DevTools"
name: mysqld
path: /freedevtools/tldr/common/mysqld
canonical: "https://hexmos.com/freedevtools/tldr/common/mysqld/"
description: "Start MySQL server instances with mysqld. Manage database connections, configure logging, and customize port settings. Free online tool, no registration required."
category: common
keywords:
- mysql server start
- mysql database server
- mysqld command
- database instance control
- mysql configuration
- server logging
- port customization
- linux mysql
- macos mysql
- common database commands
features:
- Start the MySQL database server with default settings.
- Customize the server's port for network connections.
- Redirect logging output to a specified file.
- Print default arguments for configuration review.
- Read configuration options from a specified file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mysqld

> Start the MySQL database server.
> More information: <https://dev.mysql.com/doc/refman/en/mysqld.html>.

- Start the MySQL database server:

`mysqld`

- Start the server, printing error messages to the console:

`mysqld --console`

- Start the server, saving logging output to a custom log file:

`mysqld --log={{path/to/file.log}}`

- Print the default arguments and their values and exit:

`mysqld --print-defaults`

- Start the server, reading arguments and values from a file:

`mysqld --defaults-file={{path/to/file}}`

- Start the server and listen on a custom port:

`mysqld --port={{port}}`

- Display help:

`mysqld --verbose --help`
