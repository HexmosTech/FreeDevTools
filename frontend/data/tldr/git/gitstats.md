---
title: "Generate Git Statistics - Analyze Repos | Online Free DevTools by Hexmos"
name: gitstats
path: "/freedevtools/tldr/git/gitstats/"
canonical: "https://hexmos.com/freedevtools/tldr/git/gitstats/"
description: "Generate Git repository statistics with gitstats. Analyze project history, contributor activity, and code metrics using command line. Free online tool, no registration required."
category: common
keywords:
- git statistics generator
- git repository analysis
- git history metrics
- git contributor analysis
- git project statistics
- git code metrics
- command line git stats
- linux gitstats
- macos gitstats
- windows gitstats
features:
- Analyze a local Git repository.
- Generate HTML reports of repository statistics.
- Visualize project history and contributor activity.
- Calculate code metrics like lines of code and commit frequency.
- Output statistics to a specified directory.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gitstats

> Git repository statistics generator.
> More information: <https://gitstats.sourceforge.net>.

- Generate statistics for a local repository:

`gitstats {{path/to/git_repo/.git}} {{path/to/output_folder}}`

- View generated statistics in a web browser on Windows (PowerShell)/macOS/Linux:

`{{Invoke-Item|open|xdg-open}} {{path/to/output_folder/index.html}}`
