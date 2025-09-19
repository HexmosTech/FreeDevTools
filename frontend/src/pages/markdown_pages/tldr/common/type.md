---
title: "Type Command - Display Command Type | Online Free DevTools by Hexmos"
name: type
path: /freedevtools/tldr/common/type
canonical: "https://hexmos.com/freedevtools/tldr/common/type/"
description: "Display command type with Type command. Identify command type, location, and definition across various shells. Free online tool, no registration required."
category: common
keywords:
- command type identifier
- shell command analysis
- bash command type
- zsh command type
- fish command type
- linux command type
- command location finder
- command definition display
- executable path lookup
- shell scripting tool
features:
- Determine the type of a command (alias, keyword, function, etc.).
- Locate the disk file that would be executed for a command.
- Display all locations of an executable in Bash/fish/Zsh.
- Identify built-in commands in various shells.
- Analyze command definitions in shell scripts.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# type

> Display the type of command the shell will execute.
> Note: All examples are not POSIX compliant.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-type>.

- Display the type of a command:

`type {{command}}`

- Display all locations containing the specified executable (works only in Bash/fish/Zsh shells):

`type -a {{command}}`

- Display the name of the disk file that would be executed (works only in Bash/fish/Zsh shells):

`type -p {{command}}`

- Display the type of a specific command, alias/keyword/function/builtin/file (works only in Bash/fish shells):

`type -t {{command}}`
