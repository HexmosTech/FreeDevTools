---
title: "Process MySQL Binlog - Analyze Database Logs | Online Free DevTools by Hexmos"
name: mysqlbinlog
path: "/freedevtools/tldr/common/mysqlbinlog/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mysqlbinlog/"
description: "Analyze MySQL database logs with mysqlbinlog. Extract events, filter by date, position, or database. Free online tool, no registration required. Powerful data processing!"
category: common
keywords:
- mysql binlog analyzer
- database log parser
- mysql event viewer
- binlog data extraction
- mysql log analysis
- command line binlog tool
- mysql binlog reader
- database event tracking
- mysql recovery tool
- binlog date filter
features:
- Extract events from MySQL binary log files.
- Filter binary log entries by database name.
- Show events between specific date and time ranges.
- Display events between specific positions in the log.
- Read binary logs directly from a MySQL server.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mysqlbinlog

> Utility for processing MySQL binary log files.
> More information: <https://dev.mysql.com/doc/refman/en/mysqlbinlog.html>.

- Show events from a specific binary log file:

`mysqlbinlog {{path/to/binlog}}`

- Show entries from a binary log for a specific database:

`mysqlbinlog --database {{database_name}} {{path/to/binlog}}`

- Show events from a binary log between specific dates:

`mysqlbinlog --start-datetime='{{2022-01-01 01:00:00}}' --stop-datetime='{{2022-02-01 01:00:00}}' {{path/to/binlog}}`

- Show events from a binary log between specific positions:

`mysqlbinlog --start-position={{100}} --stop-position={{200}} {{path/to/binlog}}`

- Show binary log from a MySQL server on the given host:

`mysqlbinlog --host={{hostname}} {{path/to/binlog}}`
