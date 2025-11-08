---
title: "Create Diff Histogram - Analyze File Changes | Online Free DevTools by Hexmos"
name: diffstat
path: "/freedevtools/tldr/common/diffstat/"
canonical: "https://hexmos.com/freedevtools/tldr/common/diffstat/"
description: "Create diff histogram with Diffstat. Analyze code changes and file modifications from diff output with ease. Free online tool, no registration required."
category: common
keywords:
- diff histogram generator
- file change analyzer
- diffstat output analysis
- code modification statistics
- diff output summary
- patch statistics tool
- linux diffstat
- unix diffstat
- git diffstat
- command line diff analyzer
features:
- Analyze changes in files from diff output
- Generate histograms of added, deleted, and modified lines
- Display changes as a table for detailed analysis
- Summarize the overall impact of changes
- Parse standard diff format output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# diffstat

> Create a histogram from the output of the `diff` command.
> More information: <https://manned.org/diffstat>.

- Display changes in a histogram:

`diff {{path/to/file1}} {{path/to/file2}} | diffstat`

- Display inserted, deleted and modified changes as a table:

`diff {{path/to/file1}} {{path/to/file2}} | diffstat -t`
