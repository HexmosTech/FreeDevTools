---
title: "Find Files - Query Files with SQL-like Syntax | Online Free DevTools by Hexmos"
name: fselect
path: "/freedevtools/tldr/common/fselect/"
canonical: "https://hexmos.com/freedevtools/tldr/common/fselect/"
description: "Find files easily with fselect using SQL-like queries. Search files based on various attributes such as name, size, and metadata. Free online tool, no registration required."
category: common
keywords:
- file finder
- sql file query
- file search tool
- directory search
- linux file search
- macos file search
- windows file search
- file size query
- metadata file query
- command line file search
features:
- Find files using SQL-like syntax for precise queries
- Filter files based on various attributes like name, size, and metadata
- Output results in different formats such as JSON
- Utilize aggregate functions like MIN, MAX, AVG for directory analysis
- Limit the number of results returned for faster processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fselect

> Find files with SQL-like queries.
> More information: <https://github.com/jhspetersson/fselect>.

- Select full path and size from temporary or configuration files in a given directory:

`fselect size, path from {{path/to/directory}} where name = {{'*.cfg'}} or name = {{'*.tmp'}}`

- Find square images:

`fselect path from {{path/to/directory}} where width = height`

- Find old-school rap 320kbps MP3 files:

`fselect path from {{path/to/directory}} where genre = {{Rap}} and bitrate = {{320}} and mp3_year lt {{2000}}`

- Select only the first 5 results and output as JSON:

`fselect size, path from {{path/to/directory}} limit {{5}} into json`

- Use SQL aggregate functions to calculate minimum, maximum and average size of files in a directory:

`fselect "{{MIN(size), MAX(size), AVG(size), SUM(size), COUNT(*)}} from {{path/to/directory}}"`
