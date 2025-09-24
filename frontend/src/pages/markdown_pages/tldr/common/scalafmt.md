---
title: "Scalafmt - Format Scala Code | Online Free DevTools by Hexmos"
name: scalafmt
path: /freedevtools/tldr/common/scalafmt
canonical: "https://hexmos.com/freedevtools/tldr/common/scalafmt/"
description: "Format Scala code quickly with Scalafmt. Improve code readability and maintainability using a consistent style. Free online tool, no registration required."
category: common
keywords:
- scala formatter
- scala code formatter
- scala style checker
- scalafmt configuration
- code formatting scala
- scalafmt command line
- scala linting
- scala style guide
- scalafmt diff
- scalafmt exclude
features:
- Reformat scala files recursively
- Use custom scalafmt configurations
- Check scala code formatting style
- Exclude specific files or directories
- Format files edited against a Git branch
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# scalafmt

> Code formatter for Scala.
> Configurations are stored in the `.scalafmt.conf` file.
> More information: <https://scalameta.org/scalafmt>.

- Reformat all `.scala` files in the current directory recursively:

`scalafmt`

- Reformat specific files or directories with a custom formatting configuration:

`scalafmt --config {{path/to/.scalafmt.conf}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Check if files are correctly formatted, returning `0` if all files respect the formatting style:

`scalafmt --config {{path/to/.scalafmt.conf}} --test`

- Exclude files or directories:

`scalafmt --exclude {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Format only files that were edited against the current Git branch:

`scalafmt --config {{path/to/.scalafmt.conf}} --mode diff`
