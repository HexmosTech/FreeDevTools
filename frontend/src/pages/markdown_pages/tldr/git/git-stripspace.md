---
title: "Whitespace Trim - Format Git Text | Free DevTools"
name: git-stripspace
path: /freedevtools/tldr/git/git-stripspace
canonical: "https://hexmos.com/freedevtools/tldr/git/git-stripspace/"
description: "Format Git text with git-stripspace. Clean commit messages and notes by trimming whitespace and comments. Free online tool, no registration required."
category: common
keywords:
- git whitespace trim
- git stripspace command
- git comment remover
- git text formatter
- git message cleaner
- git notes editor
- git branch description
- git tag formatter
- linux whitespace trim
- macos git stripspace
features:
- Trim whitespace from Git text input
- Remove comments from Git commit messages
- Convert text to Git comment format
- Clean notes and tags for repository
- Format branch descriptions automatically
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git stripspace

> Read text (e.g. commit messages, notes, tags, and branch descriptions) from `stdin` and clean it into the manner used by Git.
> More information: <https://git-scm.com/docs/git-stripspace>.

- Trim whitespace from a file:

`cat {{path/to/file}} | git stripspace`

- Trim whitespace and Git comments from a file:

`cat {{path/to/file}} | git stripspace {{[-s|--strip-comments]}}`

- Convert all lines in a file into Git comments:

`git stripspace {{[-c|--comment-lines]}} < {{path/to/file}}`
