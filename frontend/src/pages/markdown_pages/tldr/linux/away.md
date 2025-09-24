---
title: "Away Command - Lock Terminal with Message | Online Free DevTools by Hexmos"
name: away
path: /freedevtools/tldr/linux/away
canonical: "https://hexmos.com/freedevtools/tldr/linux/away/"
description: "Lock your terminal and set an away message with the Away command.  Customize mail checking and background task sleeping options. Free online tool, no registration required."
category: linux
keywords:
  - terminal lock command
  - away message command
  - linux terminal lock
  - background task management
  - mail check command
  - command line away message
  - terminal security command
  - system away mode
  - persistent mail check
  - temporary terminal lock
features:
  - Locks the terminal session.
  - Sets a custom away message.
  - Enables/disables automatic mail checking.
  - Allows pausing background tasks for a specified time.
  - Offers persistent or non-persistent mail checking options.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# away

> Locks terminal with an away message.
> More information: <https://manned.org/away>.

- Lock terminal and set away message:

`away {{message}}`

- Lock terminal and enable mail check:

`away {{[-c|--mail]}} {{message}}`

- Lock terminal and disable mail check:

`away {{[-C|--nomail]}} {{message}}`

- Lock terminal and sleep background tasks for number of seconds:

`away {{[-t|--time]}} {{seconds}} {{message}}`

- Lock terminal and check mail if at least one inbox hasn't received new mail:

`away {{[-p|--persist]}} {{message}}`

- Lock terminal and check mail until at least one inbox has received new mail:

`away {{[-P|--nopersist]}} {{message}}`

- Display help:

`away {{[-h|--help]}}`

- Display version:

`away {{[-v|--version]}}`
