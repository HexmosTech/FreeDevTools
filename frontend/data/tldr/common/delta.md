---
title: "Compare Diffs - View Git & Diff Output | Online Free DevTools by Hexmos"
name: delta
path: "/freedevtools/tldr/common/delta/"
canonical: "https://hexmos.com/freedevtools/tldr/common/delta/"
description: "Compare code diffs with Delta, a Git and diff output viewer. Analyze changes and identify issues. Free online tool, no registration required."
category: common
keywords:
- Git diff viewer
- Code comparison tool
- Diff analysis
- Terminal diff viewer
- Command-line diff tool
- Delta diff tool
- Side-by-side diff
- Hyperlink diff
- Git integration
- Code review
features:
- Compare files and directories
- Display line numbers in diffs
- Show side-by-side comparisons
- Ignore Git configuration settings
- Render commit hashes as hyperlinks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# delta

> A viewer for Git and diff output.
> More information: <https://dandavison.github.io/delta/full---help-output.html>.

- Compare files or directories:

`delta {{path/to/old_file_or_directory}} {{path/to/new_file_or_directory}}`

- Compare files or directories, showing the line numbers:

`delta {{[-n|--line-numbers]}} {{path/to/old_file_or_directory}} {{path/to/new_file_or_directory}}`

- Compare files or directories, showing the differences side by side:

`delta {{[-s|--side-by-side]}} {{path/to/old_file_or_directory}} {{path/to/new_file_or_directory}}`

- Compare files or directories, ignoring any Git configuration settings:

`delta --no-gitconfig {{path/to/old_file_or_directory}} {{path/to/new_file_or_directory}}`

- Compare, rendering commit hashes, file names, and line numbers as hyperlinks, according to the hyperlink spec for terminal emulators:

`delta --hyperlinks {{path/to/old_file_or_directory}} {{path/to/new_file_or_directory}}`

- Display the current settings:

`delta --show-config`

- Display supported languages and associated file extensions:

`delta --list-languages`
