---
title: "Display Git Repo Info - Onefetch | Online Free DevTools by Hexmos"
name: onefetch
path: "/freedevtools/tldr/common/onefetch/"
canonical: "https://hexmos.com/freedevtools/tldr/common/onefetch/"
description: "Display Git repository information and statistics with Onefetch. Analyze code contributions and project details quickly. Free online tool, no registration required."
category: common
keywords:
- Git repository stats
- Code statistics analyzer
- Project information display
- Git contribution analysis
- Local repository information
- Code churn metrics
- Command line git info
- Terminal git stats
- Git repo summary
- Git project overview
features:
- Displays comprehensive Git repository statistics
- Analyzes code contributions by authors and languages
- Identifies file churn and code complexity
- Ignores bot and merge commits for cleaner analysis
- Customizes output by excluding files and directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# onefetch

> Display project information and code statistics for a local Git repository.
> More information: <https://github.com/o2sh/onefetch/wiki/command-line-options>.

- Display statistics for the Git repository in the current working directory:

`onefetch`

- Display statistics for the Git repository in the specified directory:

`onefetch {{path/to/directory}}`

- Ignore commits made by bots:

`onefetch --no-bots`

- Ignore merge commits:

`onefetch --no-merges`

- Don't print the ASCII art of the language logo:

`onefetch --no-art`

- Show `n` authors, languages, or file churns (default: 3, 6, and 3 respectively):

`onefetch --number-of-{{authors|languages|file-churns}} {{n}}`

- Ignore the specified files and directories:

`onefetch {{[-e|--exclude]}} {{path/to/file_or_directory|regex}}`

- Only detect languages from the specified categories (default: programming and markup):

`onefetch {{[-T|--type]}} {{programming|markup|prose|data}}`
