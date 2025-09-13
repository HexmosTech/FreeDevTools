---
title: "SnowSQL Client - Execute SQL Commands | Free DevTools"
name: snowsql
path: /freedevtools/tldr/common/snowsql
canonical: "https://hexmos.com/freedevtools/tldr/common/snowsql/"
description: "Execute SQL commands with SnowSQL client for Snowflake's Data Cloud. Connect to Snowflake, run queries and manage data efficiently. Free online tool, no registration required."
category: common
keywords:
- Snowflake SQL client
- SQL command line tool
- SnowSQL command reference
- Snowflake query execution
- Database command line interface
- Snowflake data cloud client
- SQL scripting tool
- SnowSQL configuration
- SnowSQL authentication
- SnowSQL CLI
features:
- Connect to Snowflake instances via command line
- Execute SQL queries and SnowSQL commands
- Authenticate using tokens for MFA
- Run SQL scripts from files
- Configure connections using configuration files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# snowsql

> SnowSQL client for Snowflake's Data Cloud.
> More information: <https://docs.snowflake.com/en/user-guide/snowsql.html>.

- Connect to a specific instance at <https://account.snowflakecomputing.com> (password can be provided in prompt or configuration file):

`snowsql --accountname {{account}} --username {{username}} --dbname {{database}} --schemaname {{schema}}`

- Connect to an instance specified by a specific configuration file (defaults to `~/.snowsql/config`):

`snowsql --config {{path/to/configuration_file}}`

- Connect to the default instance using a token for multi-factor authentication:

`snowsql --mfa-passcode {{token}}`

- Execute a single SQL query or SnowSQL command on the default connection (useful in shell scripts):

`snowsql --query '{{query}}'`

- Execute commands from a specific file on the default connection:

`snowsql --filename {{path/to/file.sql}}`
