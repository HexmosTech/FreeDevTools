---
title: "Manage Manual Pages - Format Database with mandb | Free DevTools"
name: mandb
path: /freedevtools/tldr/linux/mandb
canonical: "https://hexmos.com/freedevtools/tldr/linux/mandb/"
description: "Format the manual page database with mandb. Update, create, and purge entries efficiently using command line options. Free online tool, no registration required."
category: linux
keywords:
  - manual page formatter
  - mandb manual database
  - linux man pages
  - unix manual indexer
  - create man database
  - update man database
  - purge man entries
  - command line man pages
  - manual page management
  - format man pages
features:
  - Purge obsolete manual page entries
  - Process manual pages to update the database
  - Create entries from scratch
  - Check the validity of manual pages
  - Update single manual page entries
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mandb

> Manage the pre-formatted manual page database.
> More information: <https://manned.org/mandb>.

- Purge and process manual pages:

`mandb`

- Update a single entry:

`mandb --filename {{path/to/file}}`

- Create entries from scratch instead of updating:

`mandb --create`

- Only process user databases:

`mandb --user-db`

- Do not purge obsolete entries:

`mandb --no-purge`

- Check the validity of manual pages:

`mandb --test`
