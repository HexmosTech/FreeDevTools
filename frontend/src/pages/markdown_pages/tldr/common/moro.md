---
title: "Track Time - Manage Work Time with Moro | Online Free DevTools by Hexmos"
name: moro
path: /freedevtools/tldr/common/moro
canonical: "https://hexmos.com/freedevtools/tldr/common/moro/"
description: "Track work time effectively with Moro. Manage time logs and notes effortlessly for improved productivity. Free online tool, no registration required."
category: common
keywords:
- work time tracker
- time logging tool
- work day management
- moro time tracking
- command line time tracker
- time report generator
- work log command
- time tracking automation
- work hours calculator
- productivity time tracking
features:
- Track work start and end times
- Add notes to time logs
- Generate daily time reports
- Display all historical time logs
- Calculate total work hours
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# moro

> Track work time.
> More information: <https://moro.js.org>.

- Invoke `moro` without parameters, to set the current time as the start of the working day:

`moro`

- Specify a custom time for the start of the working day:

`moro hi {{09:30}}`

- Invoke `moro` without parameters a second time, to set the current time at the end of the working day:

`moro`

- Specify a custom time for the end of the working day:

`moro bye {{17:30}}`

- Add a note on the current working day:

`moro note {{3 hours on project Foo}}`

- Show a report of time logs and notes for the current working day:

`moro report`

- Show a report of time logs and notes for all working days on record:

`moro report --all`
