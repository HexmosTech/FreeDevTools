---
title: "MSSQL Client - Execute SQL Queries | Online Free DevTools by Hexmos"
name: mssqlclient.py
path: /freedevtools/tldr/common/mssqlclient.py
canonical: "https://hexmos.com/freedevtools/tldr/common/mssqlclient.py/"
description: "Execute SQL queries with MSSQL Client. Connect to Microsoft SQL Server instances using various authentication methods. Free online tool, no registration required."
category: common
keywords:
- mssql query execution
- sql server connection
- windows authentication mssql
- pass-the-hash mssql
- kerberos authentication mssql
- mssql command line client
- impacket mssqlclient
- sql query tool
- mssql database connection string
- mssql windows authentication
features:
- Connect to MSSQL server using Windows authentication
- Execute SQL queries from a file
- Support for pass-the-hash authentication
- Connect using Kerberos authentication
- Specify database instance to connect to
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mssqlclient.py

> Connect to Microsoft SQL Server instances and execute queries.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Connect to an MSSQL server using Windows authentication:

`mssqlclient.py -windows-auth {{domain}}/{{username}}:{{password}}@{{target}}`

- Connect using SQL server authentication:

`mssqlclient.py {{username}}:{{password}}@{{target}}`

- Connect using pass-the-hash authentication:

`mssqlclient.py {{domain}}/{{username}}@{{target}} -hashes {{LM_Hash}}:{{NT_Hash}}`

- Connect using Kerberos authentication (requires valid tickets):

`mssqlclient.py -k {{domain}}/{{username}}@{{target}}`

- Execute a specific SQL command upon connection:

`mssqlclient.py {{username}}:{{password}}@{{target}} -query "{{SELECT user_name();}}"`

- Execute multiple SQL commands from a file:

`mssqlclient.py {{username}}:{{password}}@{{target}} -file {{path/to/sql_file.sql}}`

- Connect to a specific database instance (default is `None`):

`mssqlclient.py {{username}}:{{password}}@{{target}} -db {{database_name}}`

- Display SQL queries before execution:

`mssqlclient.py {{username}}:{{password}}@{{target}} -show`
