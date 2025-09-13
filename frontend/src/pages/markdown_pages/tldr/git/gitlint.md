---
title: "Validate Git Commit Messages - Style Linter | Free DevTools"
name: gitlint
path: /freedevtools/tldr/common/gitlint
canonical: "https://hexmos.com/freedevtools/tldr/common/gitlint/"
description: "Validate git commit messages with Gitlint, a powerful style linter. Improve code quality and collaboration with consistent commit messages. Free online tool, no registration required."
category: common
keywords:
- git commit message linter
- commit message validation
- git style guide
- git commit conventions
- lint git commits
- git commit formatting
- git commit quality control
- command line linter
- code review automation
- commit history improvement
features:
- Checks commit messages for style compliance
- Lints a specific range of commits
- Allows custom rules through extra paths
- Enables targeting specific CI jobs
- Reads commit messages from files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gitlint

> Git commit message linter checks your commit messages for style.
> More information: <https://jorisroovers.com/gitlint/>.

- Check the last commit message:

`gitlint`

- The range of commits to lint:

`gitlint --commits {{single_refspec_argument}}`

- Path to a directory or Python module with extra user-defined rules:

`gitlint --extra-path {{path/to/directory}}`

- Start a specific CI job:

`gitlint --target {{path/to/target_directory}}`

- Path to a file containing a commit-msg:

`gitlint --msg-filename {{path/to/filename}}`

- Read staged commit meta-info from the local repository:

`gitlint --staged`
