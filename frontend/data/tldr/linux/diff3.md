---
title: "Compare Files - Analyze Differences with diff3 | Online Free DevTools by Hexmos"
name: diff3
path: "/freedevtools/tldr/linux/diff3/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/diff3/"
description: "Compare files with diff3 to analyze differences between three files side-by-side. Identify conflicts and merge changes efficiently. Free online tool, no registration required."
category: linux
keywords:
  - file comparison
  - diff tool
  - three way merge
  - text comparison
  - conflict resolution
  - file differencing
  - linux diff
  - unix diff
  - gnu diffutils
  - diff3 command
features:
  - Compares three files line by line
  - Highlights differences between files
  - Identifies conflicting changes
  - Shows all changes with conflict outlining
  - Provides a detailed analysis of file content
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# diff3

> Compare three files line by line.
> More information: <https://www.gnu.org/software/diffutils/manual/diffutils.html#Invoking-diff3>.

- Compare files:

`diff3 {{path/to/file1}} {{path/to/file2}} {{path/to/file3}}`

- Show all changes, outlining conflicts:

`diff3 {{[-A|--show-all]}} {{path/to/file1}} {{path/to/file2}} {{path/to/file3}}`
