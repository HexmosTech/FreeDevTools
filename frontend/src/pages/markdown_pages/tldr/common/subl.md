---
title: "Sublime Text - Edit Files Quickly | Online Free DevTools by Hexmos"
name: subl
path: /freedevtools/tldr/common/subl
canonical: "https://hexmos.com/freedevtools/tldr/common/subl/"
description: "Edit files quickly with Sublime Text using command line. Open, navigate, and modify files with ease. Free online tool, no registration required."
category: common
keywords:
- sublime text editor
- text editor command line
- file editor linux
- file editor macos
- code editor windows
- open files sublime
- sublime text line number
- sublime text new window
- sublime text add to window
- sublime text directory
features:
- Open files and directories in Sublime Text
- Navigate to specific line numbers within files
- Add files or directories to the current Sublime Text window
- Open files or directories in a new Sublime Text window
- Edit files quickly via the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# subl

> Sublime Text editor.
> More information: <https://www.sublimetext.com/docs/command_line.html>.

- Open the current directory in Sublime Text:

`subl .`

- Open a file or directory in Sublime Text:

`subl {{path/to/file_or_directory}}`

- Open a file and jump to a specific line number:

`subl {{path/to/file}}:{{line_number}}`

- Open a file or directory in the currently open window:

`subl {{[-a|--add]}} {{path/to/file_or_directory}}`

- Open a file or directory in a new window:

`subl {{[-n|--new-window]}} {{path/to/file_or_directory}}`
