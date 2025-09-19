---
title: "PostgreSQL Ready Check - Control Connection Status | Online Free DevTools by Hexmos"
name: pg_isready
path: /freedevtools/tldr/postgres/pg_isready
canonical: "https://hexmos.com/freedevtools/tldr/postgres/pg_isready/"
description: "Check PostgreSQL connection status with pg_isready. Monitor database availability and troubleshoot connection issues effectively. Free online tool, no registration required."
category: common
keywords:
- PostgreSQL connection check
- database availability status
- PostgreSQL readiness probe
- connection status monitor
- PostgreSQL command line tool
- pg_isready utility
- PostgreSQL server health
- database connection troubleshooting
- common database commands
- command line connection test
features:
- Determine PostgreSQL server connection status
- Check server availability using command line
- Verify connection with specific hostname and port
- Display output only on connection failure
- Support quiet mode for silent checking
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pg_isready

> Check the connection status of a PostgreSQL server.
> More information: <https://www.postgresql.org/docs/current/app-pg-isready.html>.

- Check connection:

`pg_isready`

- Check connection with a specific hostname and port:

`pg_isready {{[-h|--host]}} {{hostname}} {{[-p|--port]}} {{port}}`

- Check connection displaying a message only when the connection fails:

`pg_isready {{[-q|--quiet]}}`
