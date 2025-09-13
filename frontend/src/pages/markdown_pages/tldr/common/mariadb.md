---
title: "MariaDB Client - Control Databases | Free DevTools"
name: mariadb
path: /freedevtools/tldr/common/mariadb
canonical: "https://hexmos.com/freedevtools/tldr/common/mariadb/"
description: "Control databases with MariaDB Client. Connect, execute SQL scripts, and debug memory usage. Free online tool, no registration required."
category: common
keywords:
- mariadb client control
- mariadb database manager
- sql script executor
- mariadb command line tool
- database connection manager
- mariadb memory debugger
- socket connection mariadb
- linux mariadb client
- macos mariadb client
- mariadb command line interface
features:
- Connect to MariaDB databases using various methods
- Execute SQL scripts from files
- Display warnings for each executed statement
- Check memory and file usage during debugging
- Connect to a MariaDB server using a socket file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mariadb

> The mariadb client tool.
> More information: <https://mariadb.com/kb/en/mariadb-command-line-client/>.

- Connect to a specific MariaDB database:

`mariadb {{db_name}}`

- Connect to a specific MariaDB database using username and password:

`mariadb --user {{user_name}} --password {{your_password}} {{db_name}}`

- Show warnings after every statement in interactive and batch mode:

`mariadb --show-warning`

- Display less verbose outputs (can be used multiple times to produce less output):

`mariadb {{-s|-ss|-sss|--silent}}`

- Execute SQL statements from a script file:

`mariadb {{db_name}} < {{path/to/script.sql}} > {{path/to/output.tab}}`

- Check memory and open file usage at exit:

`mariadb --debug-check`

- Connect using a socket file for local connections:

`mariadb {{[-S|--socket]}} {{path/to/socket_name}}`

- Display help:

`mariadb {{[-?|--help]}}`
