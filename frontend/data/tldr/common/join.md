---
title: "Join Files - Merge Data with Common Fields | Online Free DevTools by Hexmos"
name: join
path: "/freedevtools/tldr/common/join/"
canonical: "https://hexmos.com/freedevtools/tldr/common/join/"
description: "Merge data with Join command using common fields. Combine information from multiple files based on shared data. Free online tool, no registration required."
category: common
keywords:
- Join files linux
- Merge data command
- Combine text files
- Join data sets
- Linux file join
- Join text files
- Join data fields
- Linux join command
- Join files on common field
- Coreutils join
features:
- Join two files based on the first field
- Specify a custom field separator
- Join specific fields from each file
- Produce lines for unpairable lines in the first file
- Join a file directly from standard input
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# join

> Join lines of two sorted files on a common field.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/join-invocation.html>.

- Join two files on the first (default) field:

`join {{path/to/file1}} {{path/to/file2}}`

- Join two files using a comma (instead of a space) as the field separator:

`join -t {{','}} {{path/to/file1}} {{path/to/file2}}`

- Join field3 of file1 with field1 of file2:

`join -1 {{3}} -2 {{1}} {{path/to/file1}} {{path/to/file2}}`

- Produce a line for each unpairable line for file1:

`join -a {{1}} {{path/to/file1}} {{path/to/file2}}`

- Join a file from `stdin`:

`cat {{path/to/file1}} | join - {{path/to/file2}}`
