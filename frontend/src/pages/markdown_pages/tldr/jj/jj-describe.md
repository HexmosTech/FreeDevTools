---
title: "JJ Describe - Update Change Descriptions | Free DevTools"
name: jj-describe
path: /freedevtools/tldr/jj/jj-describe
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-describe/"
description: "Update change descriptions with JJ Describe. Easily manage and modify commit metadata within your repositories. Free online tool, no registration required."
category: common
keywords:
- jj describe
- jj change description
- jj metadata update
- jj commit message
- jj version control
- jj command line tool
- jj revsets
- jj update description
- version control system
- distributed VCS
features:
- Update commit descriptions
- Modify commit metadata
- Target specific revsets for description updates
- Use command-line interface
- Manage descriptions with custom messages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj describe

> Update the change description or other metadata.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-describe>.

- Update the description of the current change:

`jj {{[desc|describe]}}`

- Update the description of given revsets:

`jj {{[desc|describe]}} {{revsets}}`

- Update the description to the given message:

`jj {{[desc|describe]}} {{[-m|--message]}} {{message}}`
