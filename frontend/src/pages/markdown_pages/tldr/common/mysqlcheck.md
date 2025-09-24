---
title: "MySQL Check - Repair Tables | Online Free DevTools by Hexmos"
name: mysqlcheck
path: /freedevtools/tldr/common/mysqlcheck
canonical: "https://hexmos.com/freedevtools/tldr/common/mysqlcheck/"
description: "Check and repair MySQL database tables quickly with MySQLCheck. Optimize tables, verify data integrity, and ensure database performance. Free online tool, no registration required."
category: common
keywords:
- mysql table check
- mysql table repair
- mysql database check
- mysql database repair
- mysql database optimize
- mysql table integrity
- mysql data validation
- command line mysql
- linux mysql check
- database administration tool
features:
- Check MySQL tables for errors
- Repair corrupted MySQL tables
- Optimize MySQL table performance
- Verify data integrity in MySQL databases
- Check tables with user credentials
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mysqlcheck

> Check and repair MySQL tables.
> More information: <https://dev.mysql.com/doc/refman/en/mysqlcheck.html>.

- Check a table:

`mysqlcheck --check {{table}}`

- Check a table and provide credentials to access it:

`mysqlcheck --check {{table}} --user {{username}} --password {{password}}`

- Repair a table:

`mysqlcheck --repair {{table}}`

- Optimize a table:

`mysqlcheck --optimize {{table}}`
