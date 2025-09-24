---
title: "Comm - Compare and Filter Lines | Online Free DevTools by Hexmos"
name: comm
path: /freedevtools/tldr/common/comm
canonical: "https://hexmos.com/freedevtools/tldr/common/comm/"
description: "Compare lines with Comm, a powerful file comparison utility. Select, reject, or isolate common and unique lines between two sorted files. Free online tool, no registration required."
category: common
keywords:
- file comparison
- line filtering
- text comparison
- comm command
- linux comm
- gnu comm
- command line compare
- sorted file compare
- file difference
- text processing
features:
- Compare two sorted files line by line
- Output lines unique to each file
- Identify lines common to both files
- Suppress output of specific columns
- Filter based on line presence in files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# comm

> Select or reject lines common to two files. Both files must be sorted.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/comm-invocation.html>.

- Produce three tab-separated columns: lines only in first file, lines only in second file and common lines:

`comm {{file1}} {{file2}}`

- Print only lines common to both files:

`comm -12 {{file1}} {{file2}}`

- Print only lines common to both files, reading one file from `stdin`:

`cat {{file1}} | comm -12 - {{file2}}`

- Get lines only found in first file, saving the result to a third file:

`comm -23 {{file1}} {{file2}} > {{file1_only}}`

- Print lines only found in second file, when the files aren't sorted:

`comm -13 <(sort {{file1}}) <(sort {{file2}})`
