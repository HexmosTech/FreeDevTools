---
title: "Git Difftool - Show File Changes | Online Free DevTools by Hexmos"
name: git-difftool
path: "/freedevtools/tldr/git/git-difftool/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-difftool/"
description: "Show file changes with Git Difftool, an external comparison tool. Configure your default diff tool and visualize modifications in your codebase. Free online tool, no registration required."
category: common
keywords:
- git difftool
- git diff tool
- git compare files
- git code comparison
- git meld
- git opendiff
- git visual diff
- git change viewer
- command line diff tool
- git file difference
features:
- Display file differences using external diff tools
- Configure a default diff tool for Git
- Show staged changes using a diff tool
- Compare files from specific commits
- Integrate with various GUI diff applications
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git difftool

> Show file changes using external diff tools. Accepts the same options and arguments as `git diff`.
> See also: `git diff`.
> More information: <https://git-scm.com/docs/git-difftool>.

- List available diff tools:

`git difftool --tool-help`

- Set the default diff tool to meld:

`git config --global diff.tool "{{meld}}"`

- Use the default diff tool to show staged changes:

`git difftool --staged`

- Use a specific tool (opendiff) to show changes since a given commit:

`git difftool {{[-t|--tool]}} {{opendiff}} {{commit}}`
