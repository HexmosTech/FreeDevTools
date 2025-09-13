---
title: "Execute Shell Script - Source Files on Linux/macOS | Free DevTools"
name: source
path: /freedevtools/tldr/common/source
canonical: "https://hexmos.com/freedevtools/tldr/common/source/"
description: "Execute shell scripts with Source on Linux/macOS. Run commands from files, modify current shell environment, and streamline workflow. Free online tool, no registration required."
category: common
keywords:
- shell script execution
- bash source command
- execute commands from file
- linux shell scripts
- macOS shell scripts
- shell environment modification
- dot command
- bash scripting
- source file evaluation
- shell initialization script
features:
- Execute commands directly within the current shell environment
- Load and run shell scripts from a specified file path
- Modify shell variables and functions permanently for the session
- Streamline workflow by running pre-defined command sequences
- Evaluate file contents with 'source' or '.' notation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# source

> Execute commands from a file in the current shell.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-source>.

- Evaluate contents of a given file:

`source {{path/to/file}}`

- Evaluate contents of a given file (alternatively replacing `source` with `.`):

`. {{path/to/file}}`
