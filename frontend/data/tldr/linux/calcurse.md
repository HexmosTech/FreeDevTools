---
title: "Manage Calendar - Calcurse Command-line Tool | Online Free DevTools by Hexmos"
name: calcurse
path: "/freedevtools/tldr/linux/calcurse/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/calcurse/"
description: "Manage your calendar appointments efficiently with the Calcurse command-line tool.  View, add, and edit events with ease. Free online tool, no registration required."
category: linux
keywords:
  - calendar command-line
  - command-line calendar
  - text-based calendar
  - schedule command-line
  - calcurse appointments
  - calcurse events
  - terminal calendar
  - linux calendar tool
  - cli calendar manager
  - caldav calendar
features:
  - View appointments and events.
  - Add and edit calendar entries.
  - Manage appointments interactively.
  - Synchronize with CalDAV servers.
  - Delete and import calendar items.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# calcurse

> A text-based calendar and scheduling application for the command-line.
> More information: <https://github.com/lfos/calcurse/blob/pu/doc/calcurse.1.txt>.

- Start `calcurse` on interactive mode:

`calcurse`

- Print the appointments and events for the current day and exit:

`calcurse {{[-a|--appointment]}}`

- Remove all local calcurse items and import remote objects:

`calcurse-caldav --init=keep-remote`

- Remove all remote objects and push local calcurse items:

`calcurse-caldav --init=keep-local`

- Copy local objects to the CalDAV server and vice versa:

`calcurse-caldav --init=two-way`
