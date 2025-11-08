---
title: "Generate Code Statistics - Tokei Code Analyzer | Online Free DevTools by Hexmos"
name: tokei
path: "/freedevtools/tldr/common/tokei/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tokei/"
description: "Generate code statistics with Tokei. Analyze codebase complexity, identify language distribution, and improve code quality. Free online tool, no registration required."
category: common
keywords:
- code statistics analyzer
- software metrics tool
- code analysis tool
- language distribution report
- codebase complexity analysis
- source code statistics
- tokei code analyzer
- cli code metrics
- linux code analysis
- cross-platform code statistics
features:
- Analyze codebases for statistical insights
- Generate detailed reports on language distribution
- Exclude specific files or patterns from analysis
- Analyze code in multiple directories and subdirectories
- Identify code complexity metrics at file level
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tokei

> Display statistics about code.
> More information: <https://github.com/XAMPPRocky/tokei>.

- Display a report for the code in a directory and all subdirectories:

`tokei {{path/to/directory}}`

- Display a report for a directory excluding `.min.js` files:

`tokei {{path/to/directory}} {{[-e|--exclude]}} {{*.min.js}}`

- Display statistics for individual files in a directory:

`tokei {{path/to/directory}} {{[-f|--files]}}`

- Display a report for all files of type Rust and Markdown:

`tokei {{path/to/directory}} {{[-t|--type]}} {{Rust}},{{Markdown}}`
