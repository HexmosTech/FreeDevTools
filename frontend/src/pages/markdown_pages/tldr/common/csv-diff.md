---
title: "CSV Diff - View Differences in CSV Files | Free DevTools"
name: csv-diff
path: /freedevtools/tldr/common/csv-diff
canonical: "https://hexmos.com/freedevtools/tldr/common/csv-diff/"
description: "View differences with CSV Diff. Compare CSV files online, identify changed rows, and generate diff summaries. Free online tool, no registration required."
category: common
keywords:
- csv diff
- csv comparison
- csv diff tool
- tsv diff
- json diff
- data diff
- file comparison
- command line csv diff
- diff two csv files
- csv diff online
features:
- Compare CSV files by unique key column
- Generate human-readable diff summaries
- Display unchanged values in changed rows
- Output diff results in JSON format
- Identify added, removed, and modified rows
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# csv-diff

> View differences between two CSV, TSV or JSON files.
> More information: <https://github.com/simonw/csv-diff>.

- Display a human-readable summary of differences between files using a specific column as a unique identifier:

`csv-diff {{path/to/file1.csv}} {{path/to/file2.csv}} --key {{column_name}}`

- Display a human-readable summary of differences between files that includes unchanged values in rows with at least one change:

`csv-diff {{path/to/file1.csv}} {{path/to/file2.csv}} --key {{column_name}} --show-unchanged`

- Display a summary of differences between files in JSON format using a specific column as a unique identifier:

`csv-diff {{path/to/file1.csv}} {{path/to/file2.csv}} --key {{column_name}} --json`
