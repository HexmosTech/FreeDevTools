---
title: "Dolt Blame - Track Row Changes | Online Free DevTools by Hexmos"
name: dolt-blame
path: /freedevtools/tldr/dolt/dolt-blame
canonical: "https://hexmos.com/freedevtools/tldr/dolt/dolt-blame/"
description: "Track row changes with Dolt Blame. Investigate data lineage and audit trails in Dolt databases, identifying commit information for each row. Free online tool, no registration required."
category: common
keywords:
- Dolt blame
- Dolt data lineage
- Dolt row history
- Database blame tool
- Version control blame
- Dolt audit trail
- SQL blame
- Dolt command line
- Data version control
- Git-like blame for data
features:
- Display commit information for specific rows
- Identify the last commit affecting a row
- Track changes in a Dolt table over time
- Examine data lineage within Dolt databases
- Pinpoint when a specific row was modified
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dolt blame

> Display commit information for each row of a Dolt table.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-blame>.

- Display the latest commit for each row of a table:

`dolt blame {{table}}`

- Display the latest commits for each row of a table when the specified commit was made:

`dolt blame {{commit}} {{table}}`

- Display help:

`dolt blame --help`
