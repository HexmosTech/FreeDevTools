---
title: "Compare Text - Display Word Differences with wdiff | Online Free DevTools by Hexmos"
name: wdiff
path: "/freedevtools/tldr/common/wdiff/"
canonical: "https://hexmos.com/freedevtools/tldr/common/wdiff/"
description: "Compare text files with wdiff to quickly display word differences between versions. Analyze changes and identify alterations instantly. Free online tool, no registration required."
category: common
keywords:
- text comparison
- file difference analysis
- wdiff command
- word diff linux
- text diff tool
- command line diff
- gnu wdiff
- compare text versions
- diff text files
- word difference analysis
features:
- Compare two text files and display word-level differences.
- Ignore case sensitivity during text comparison.
- Display statistics about the number of insertions, deletions, and replacements.
- Analyze changes between text files for content revisions.
- Identify word-level edits in text documents.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wdiff

> Display word differences between text files.
> More information: <https://www.gnu.org/software/wdiff/manual/wdiff.html#wdiff-invocation>.

- Compare two files:

`wdiff {{path/to/file1}} {{path/to/file2}}`

- Ignore case when comparing:

`wdiff {{[-i|--ignore-case]}} {{path/to/file1}} {{path/to/file2}}`

- Display how many words are deleted, inserted or replaced:

`wdiff {{[-s|--statistics]}} {{path/to/file1}} {{path/to/file2}}`
