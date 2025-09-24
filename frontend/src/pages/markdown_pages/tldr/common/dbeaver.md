---
title: "Control DBeaver - GUI SQL Client | Online Free DevTools by Hexmos"
name: dbeaver
path: /freedevtools/tldr/common/dbeaver
canonical: "https://hexmos.com/freedevtools/tldr/common/dbeaver/"
description: "Control SQL databases with DBeaver, a versatile GUI SQL client. Connect to various databases, execute queries, and manage data. Free online tool, no registration required."
category: common
keywords:
- GUI SQL client
- database management tool
- SQL query tool
- database browser
- DBeaver command line
- SQL editor
- database connection manager
- open source database tool
- cross-platform SQL client
- database administration
features:
- Connect to a specific database from the command line.
- Force the creation of a new DBeaver instance.
- Close all open tabs within DBeaver.
- Bring the DBeaver application to the foreground.
- Stop a running DBeaver instance remotely.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dbeaver

> A GUI SQL client supporting many databases.
> More information: <https://dbeaver.com/docs/dbeaver/Command-Line/>.

- Open `DBeaver`:

`dbeaver`

- Open `DBeaver` connecting to a specific database:

`dbeaver {{[-con|--connect]}} {{database}}`

- Force the creation of a new instance:

`dbeaver --newInstance`

- Stop the running instance:

`dbeaver --quit`

- Close all tabs within dbeaver:

`dbeaver --closeTabs`

- Bring `DBeaver` to the top of applications:

`dbeaver --bringToFront`

- Display help:

`dbeaver --help`
