---
title: "Edit Text - Control Files with Atom Editor | Online Free DevTools by Hexmos"
name: atom
path: "/freedevtools/tldr/common/atom/"
canonical: "https://hexmos.com/freedevtools/tldr/common/atom/"
description: "Edit text files quickly with Atom Editor, a versatile cross-platform text editor. Open files, create new documents, and customize your editing environment. Free online tool, no registration required."
category: common
keywords:
- text editor
- code editor
- atom editor
- cross-platform editor
- file editor
- plain text editor
- syntax highlighting
- apm package manager
- atom text editor
- open source editor
features:
- Open files and directories from the command line
- Create new editor windows
- Add files and directories to an existing window
- Run in safe mode without loading packages
- Prevent Atom from forking to the background
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# atom

> A cross-platform pluggable text editor.
> Plugins are managed by `apm`.
> Note: Atom has been sunsetted and is no longer actively maintained.
> More information: <https://atom.io/>.

- Open a file or directory:

`atom {{path/to/file_or_directory}}`

- Open a file or directory in a [n]ew window:

`atom -n {{path/to/file_or_directory}}`

- Open a file or directory in an existing window:

`atom --add {{path/to/file_or_directory}}`

- Open Atom in safe mode (does not load any additional packages):

`atom --safe`

- Prevent Atom from forking into the background, keeping Atom attached to the terminal:

`atom --foreground`

- Wait for Atom window to close before returning (useful for Git commit editor):

`atom --wait`
