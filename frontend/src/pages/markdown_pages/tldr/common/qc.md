---
title: "Control Command Snippets - Manage Notes with QC | Online Free DevTools by Hexmos"
name: qc
path: /freedevtools/tldr/common/qc
canonical: "https://hexmos.com/freedevtools/tldr/common/qc/"
description: "Control command snippets efficiently with QC. Manage, search, and execute code snippets stored in QOwnNotes for enhanced productivity. Free online tool, no registration required."
category: common
keywords:
- command snippet manager
- qownnotes commands
- note command execution
- command line snippet
- qc command line
- code snippet management
- markdown snippet tool
- note taking automation
- shell script execution
- command configuration
features:
- Configure snippet manager settings
- Search and print command snippets
- Execute snippets with command preview
- Execute the last executed snippet
- Switch between note folders in QOwnNotes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qc

> Manage and execute command snippets stored in QOwnNotes notes.
> See also: `qownnotes`.
> More information: <https://www.qownnotes.org/getting-started/command-line-snippet-manager.html>.

- Configure the snippet manager, e.g. to set the security token from QOwnNotes:

`qc configure`

- Search and print command snippets stored in your `Commands.md` note and all your notes tagged with `commands`:

`qc search`

- Execute a snippet and show the command before executing:

`qc exec --command`

- Execute the last snippet and show the command before executing:

`qc exec --command --last`

- Switch between note folders in QOwnNotes:

`qc switch`
