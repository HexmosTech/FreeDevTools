---
title: "Control Linux Notifications - Dunstify Command | Online Free DevTools by Hexmos"
name: dunstify
path: "/freedevtools/tldr/common/dunstify"
canonical: "https://hexmos.com/freedevtools/tldr/common/dunstify/"
description: "Control Linux desktop notifications easily with the Dunstify command.  Customize urgency, replace messages, and enhance your notification experience. Free online tool, no registration required."
category: common
keywords:
  - linux desktop notification control
  - dunstify command line
  - linux notification urgency
  - dunstify message replacement
  - linux terminal notification
  - command line notification display
  - dunstify notification options
  - replace linux notifications
  - dunst notification control
  - linux notify-send alternative
features:
  - Send customized desktop notifications from the command line.
  - Set notification urgency levels (low, normal, critical).
  - Replace existing notifications with updated messages using IDs.
  - Display help information for available dunstify options.
  - Manage and control multiple notifications efficiently from the terminal.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dunstify

> A notification tool that is an extension of `notify-send`, but has more features based around `dunst`.
> Accepts all options of `notify-send`.
> More information: <https://dunst-project.org/documentation/dunstify>.

- Show a notification with a given title and message:

`dunstify "{{Title}}" "{{Message}}"`

- Show a notification with the specified urgency:

`dunstify "{{Title}}" "{{Message}}" {{[-u|--urgency]}} {{low|normal|critical}}`

- Specify a message ID (overwrites any previous messages with the same ID):

`dunstify "{{Title}}" "{{Message}}" {{[-r|--replace]}} {{123}}`

- Display help:

`dunstify {{[-?|--help]}}`
