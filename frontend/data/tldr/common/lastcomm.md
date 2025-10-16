---
title: "Show Last Command - Track User Activity | Online Free DevTools by Hexmos"
name: lastcomm
path: "/freedevtools/tldr/common/lastcomm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lastcomm/"
description: "Track user activity with Last Command. Audit system activity, monitor command execution, and identify user behavior. Free online tool, no registration required."
category: common
keywords:
- last command activity
- command history audit
- user activity tracking
- shell command logging
- system administration tools
- linux command history
- macos command history
- bash history viewer
- command execution monitoring
- terminal activity log
features:
- Display last commands executed on a system
- Filter command history by user
- View commands executed on specific terminals
- Show information about specific commands
- Analyze command execution timestamps
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lastcomm

> Show last commands executed.
> More information: <https://manpages.debian.org/latest/acct/lastcomm.1.en.html>.

- Print information about all the commands in the acct (record file):

`lastcomm`

- Display commands executed by a given user:

`lastcomm --user {{user}}`

- Display information about a given command executed on the system:

`lastcomm --command {{command}}`

- Display information about commands executed on a given terminal:

`lastcomm --tty {{terminal_name}}`
