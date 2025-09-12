---
title: "CBT - Read Bigtable Data | Free DevTools"
name: cbt
path: /freedevtools/tldr/common/cbt
canonical: "https://hexmos.com/freedevtools/tldr/common/cbt/"
description: "Read Bigtable data efficiently with CBT. Retrieve rows, count records, and filter columns from Google Cloud Bigtable. Free online tool, no registration required."
category: common
keywords:
- Bigtable data reader
- CBT data retrieval
- Google Cloud Bigtable command
- Bigtable row lookup
- Bigtable data filtering
- Bigtable table listing
- Bigtable row counting
- gcloud bigtable cbt
- cbt linux
- cbt command line
features:
- List Bigtable tables in a project
- Count rows in a specific Bigtable table
- Display a single Bigtable row with cell revisions
- Retrieve specific columns from a Bigtable row
- Search and print rows by a specific regex pattern
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cbt

> Utility for reading data from Google Cloud's Bigtable.
> More information: <https://cloud.google.com/bigtable/docs/cbt-reference>.

- List tables in the current project:

`cbt ls`

- Print count of rows in a specific table in the current project:

`cbt count "{{table_name}}"`

- Display a single row from a specific table with only 1 (most recent) cell revision per column in the current project:

`cbt lookup "{{table_name}}" "{{row_key}}" cells-per-column={{1}}`

- Display a single row with only specific column(s) (omit qualifier to return entire family) in the current project:

`cbt lookup "{{table_name}}" "{{row_key}}" columns="{{family1:qualifier1,family2:qualifier2,...}}"`

- Search up to 5 rows in the current project by a specific `regex` pattern and print them:

`cbt read "{{table_name}}" regex="{{row_key_pattern}}" count={{5}}`

- Read a specific range of rows and print only returned row keys in the current project:

`cbt read {{table_name}} start={{start_row_key}} end={{end_row_key}} keys-only=true`
