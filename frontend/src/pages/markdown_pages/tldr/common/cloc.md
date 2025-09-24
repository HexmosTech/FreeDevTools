---
title: "Count Lines of Code - Analyze Source Code with cloc | Online Free DevTools by Hexmos"
name: cloc
path: /freedevtools/tldr/common/cloc
canonical: "https://hexmos.com/freedevtools/tldr/common/cloc/"
description: "Analyze source code with cloc, a tool for counting lines of code and comments. Get detailed reports and compare different versions. Free online tool, no registration required."
category: common
keywords:
- source code analyzer
- lines of code counter
- cloc code analysis
- code metrics
- software analysis tool
- code difference analyzer
- linux code counter
- macos code counter
- windows code counter
- source code statistics
features:
- Count lines of code in directories
- Display progress during counting
- Compare code between two directories
- Ignore VCS-ignored files
- Display code count results per file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cloc

> Count, and compute differences of, lines of source code and comments.
> More information: <https://github.com/AlDanial/cloc#basic-use->.

- Count all the lines of code in a directory:

`cloc {{path/to/directory}}`

- Count all the lines of code in a directory, displaying a progress bar during the counting process:

`cloc --progress=1 {{path/to/directory}}`

- Compare 2 directory structures and count the differences between them:

`cloc --diff {{path/to/directory/one}} {{path/to/directory/two}}`

- Ignore files that are ignored by VCS, such as files specified in `.gitignore`:

`cloc --vcs git {{path/to/directory}}`

- Count all the lines of code in a directory, displaying the results for each file instead of each language:

`cloc --by-file {{path/to/directory}}`
