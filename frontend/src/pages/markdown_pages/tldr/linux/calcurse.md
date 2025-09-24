---
title: "Manage Calendar with Calcurse - Command-line Tool | Online Free DevTools by Hexmos"
name: calcurse
path: /freedevtools/tldr/linux/calcurse
canonical: "https://hexmos.com/freedevtools/tldr/linux/calcurse/"
description: "Manage your calendar appointments efficiently with the Calcurse command-line tool. View, add, edit, and delete events with ease.  Integrates with CalDAV servers. Free online tool, no registration required."
category: linux
keywords:
  - command-line calendar
  - linux calendar manager
  - terminal calendar app
  - calcurse scheduling
  - caldav calendar client
  - text-based calendar linux
  - command-line appointment manager
  - linux cli calendar
  - calcurse event management
  - calcurse appointment viewing
features:
  - View and navigate calendar appointments and events.
  - Add, edit, and delete calendar entries interactively.
  - Manage appointments and events via command-line interface.
  - Synchronize with CalDAV servers for remote calendar access.
  - Import and export calendar data.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
