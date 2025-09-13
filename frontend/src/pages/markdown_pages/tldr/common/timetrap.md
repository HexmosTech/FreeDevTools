---
title: "Time Tracker - Track Time with Timetrap | Free DevTools"
name: timetrap
path: /freedevtools/tldr/common/timetrap
canonical: "https://hexmos.com/freedevtools/tldr/common/timetrap/"
description: "Track time efficiently with Timetrap, a command-line time tracker. Manage timesheets, create entries, and edit logs with ease. Free online tool, no registration required."
category: common
keywords:
- command line time tracker
- ruby time tracking
- terminal time management
- timetrap timesheet
- timetrap entry
- command line time logging
- github time tracker
- macos time tracker
- linux time tracker
- timetrap command
features:
- Create and manage timesheets easily
- Record time entries with notes
- Display current timesheet information
- Edit existing time entry details
- Track time spent on various tasks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# timetrap

> Simple time tracker written in Ruby.
> More information: <https://github.com/samg/timetrap>.

- Create a new timesheet:

`timetrap sheet {{timesheet}}`

- Check in an entry started 5 minutes ago:

`timetrap in --at "{{5 minutes ago}}" {{entry_notes}}`

- Display the current timesheet:

`timetrap display`

- Edit the last entry's end time:

`timetrap edit --end {{time}}`
