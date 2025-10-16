---
title: "Control Notifications - Dunstify Message Tool | Online Free DevTools by Hexmos"
name: dunstify
path: "/freedevtools/tldr/common/dunstify/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dunstify/"
description: "Control Linux desktop notifications with Dunstify, a powerful message tool. Customize urgency, replace messages, and enhance your notification experience. Free online tool, no registration required."
category: common
keywords:
  - linux desktop notification
  - dunstify message tool
  - command line notification
  - notification control linux
  - dunstify linux
  - notify-send alternative
  - linux message display
  - desktop notification tool
  - terminal notification linux
  - urgency control dunstify
features:
  - Send desktop notifications via command line
  - Customize notification urgency levels
  - Replace existing notifications by ID
  - Display help information for dunstify
  - Display notifications with custom titles and messages
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
