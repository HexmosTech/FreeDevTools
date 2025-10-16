---
title: "Manage Command History - Control Bash History | Online Free DevTools by Hexmos"
name: history
path: "/freedevtools/tldr/common/history/"
canonical: "https://hexmos.com/freedevtools/tldr/common/history/"
description: "Manage command-line history with the Bash History tool. Control, clear, and manipulate your shell history easily. Free online tool, no registration required."
category: common
keywords:
- bash history manager
- command line history
- shell history manipulation
- linux history tool
- bash history control
- zsh history tool
- history command
- history timestamp
- history delete
- history overwrite
features:
- Display command history with line numbers
- Clear command history
- Overwrite history file with current session
- Delete specific history entries by offset
- Add commands to history without executing them
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# history

> Manage command-line history.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-history>.

- Display the commands history list with line numbers:

`history`

- Display the last 20 commands (in Zsh it displays all commands starting from the 20th):

`history 20`

- Display history with timestamps in different formats (only available in Zsh):

`history -{{d|f|i|E}}`

- [c]lear the commands history list:

`history -c`

- Over[w]rite history file with history of current Bash shell (often combined with `history -c` to purge history):

`history -w`

- [d]elete the history entry at the specified offset:

`history -d {{offset}}`

- Add a command to history without running it:

`history -s {{command}}`
