---
title: "Track Termination - Control Notifications with ntfyme | Online Free DevTools by Hexmos"
name: ntfyme
path: /freedevtools/tldr/common/ntfyme
canonical: "https://hexmos.com/freedevtools/tldr/common/ntfyme/"
description: "Control command execution with Ntfyme. Get success/error notifications via Gmail or Telegram for long-running processes. Free online tool, no registration required."
category: common
keywords:
- Command Execution Notification
- Process Completion Alerts
- Gmail Notification Tool
- Telegram Notification Tool
- Termination Process Tracker
- Background Process Monitor
- Linux Command Notifications
- MacOS Command Notifications
- Shell Script Notification
- Batch Job Notification
features:
- Send notifications upon command completion (success or error)
- Integrate with Gmail for email notifications
- Integrate with Telegram for instant messaging notifications
- Track and terminate processes after a specified time
- Interactively configure notification settings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ntfyme

> A notification tool to track and notify you about your long-running termination process.
> Send notifications with success/error messages with Gmail, Telegram, and more.
> More information: <https://github.com/AnirudhG07/ntfyme>.

- Directly run your command:

`ntfyme exec {{[-c|--cmd]}} {{command}}`

- Pipe your command and run:

`echo {{command}} | ntfyme exec`

- Run multiple commands by enclosing them in quotes:

`echo "{{command1; command2; command3}}" | ntfyme exec`

- Track and terminate the process after prolonged suspension:

`ntfyme exec {{[-t|--track-process]}} {{[-c|--cmd]}} {{command}}`

- Setup the tool configurations interactively:

`ntfyme setup`

- Encrypt your password:

`ntfyme enc`

- See the log history:

`ntfyme log`

- Open and edit the configuration file:

`ntfyme config`
