---
title: "Git Fame - Analyze Code Contributions | Online Free DevTools by Hexmos"
name: git-fame
path: /freedevtools/tldr/git/git-fame
canonical: "https://hexmos.com/freedevtools/tldr/git/git-fame/"
description: "Analyze code contributions with Git Fame, providing insights into developer activity and effort within your Git repository. Free online tool, no registration required."
category: common
keywords:
- git contribution analyzer
- git authorship tracking
- code contribution metrics
- repository activity analysis
- git code ownership
- git blame alternative
- command line git tool
- git developer statistics
- code authorship attribution
- git contribution summary
features:
- Calculate contributions per file and author
- Exclude specific files or directories from analysis
- Filter contributions by date range
- Display results in multiple formats (pipe, YAML, JSON, CSV, TSV)
- Identify code moved or copied within the repository
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git fame

> Pretty-print Git repository contributions.
> More information: <https://manned.org/git-fame>.

- Calculate contributions for the current Git repository:

`git fame`

- Exclude files/directories that match the specified `regex`:

`git fame --excl "{{regex}}"`

- Calculate contributions made after the specified date:

`git fame --since "{{3 weeks ago|2021-05-13}}"`

- Display contributions in the specified format:

`git fame --format {{pipe|yaml|json|csv|tsv}}`

- Display contributions per file extension:

`git fame {{[-t|--bytype]}}`

- Ignore whitespace changes:

`git fame {{[-w|--ignore-whitespace]}}`

- Detect inter-file line moves and copies:

`git fame -C`

- Detect intra-file line moves and copies:

`git fame -M`
