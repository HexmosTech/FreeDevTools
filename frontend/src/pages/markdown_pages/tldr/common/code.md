---
title: "Code Editor - Edit Code Files Cross-Platform | Online Free DevTools by Hexmos"
name: code
path: /freedevtools/tldr/common/code
canonical: "https://hexmos.com/freedevtools/tldr/common/code/"
description: "Edit code files with Code Editor, a versatile and extensible cross-platform IDE.  Open, compare, and manage files effortlessly. Free online tool, no registration required."
category: common
keywords:
- code editor
- text editor
- IDE
- cross-platform code editor
- vs code
- visual studio code
- code comparison tool
- file editor
- linux code editor
- macos code editor
features:
- Open and edit code files across multiple platforms
- Compare two code files for differences
- Install and uninstall extensions to enhance functionality
- Manage code files and directories from the command line
- Display diagnostic information about running code instances
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# code

> Cross platform and extensible code editor.
> More information: <https://code.visualstudio.com/docs/configure/command-line>.

- Start Visual Studio Code:

`code`

- Open specific files/directories:

`code {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Compare two specific files:

`code {{[-d|--diff]}} {{path/to/file1}} {{path/to/file2}}`

- Open specific files/directories in a new window:

`code {{[-n|--new-window]}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Install/uninstall a specific extension:

`code --{{install|uninstall}}-extension {{publisher.extension}}`

- Display diagnostic and process information about the running code window:

`code {{[-s|--status]}}`

- Print installed extensions with their versions:

`code --list-extensions --show-versions`

- Start the editor as a superuser (root) while storing user data in a specific directory:

`sudo code --user-data-dir {{path/to/directory}}`
