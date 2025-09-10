---
title: "Calendar - Display Calendar Information | Free DevTools"
name: cal
path: /freedevtools/tldr/netbsd/cal
canonical: "https://hexmos.com/freedevtools/tldr/netbsd/cal/"
description: "Display calendar information instantly with cal. Show current month, specific year or month with year. Free online tool, no registration required."
category: netbsd
keywords:
  - calendar display information
  - netbsd calendar
  - show month calendar
  - show year calendar
  - display specific month year
  - command line calendar
  - julian day calendar
  - customize calendar output
  - terminal calendar
  - netbsd cal command
features:
  - display current month calendar in terminal
  - display calendar for specific year
  - display calendar for specific month and year
  - highlight the current day in the calendar
  - customize starting day of the week for calendar
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cal

> Display a calendar.
> More information: <https://man.netbsd.org/cal.1>.

- Display a calendar for the current month:

`cal`

- Display a calendar for a specific year:

`cal {{year}}`

- Display a calendar for a specific month and year:

`cal {{month}} {{year}}`

- Display the whole calendar for the current year using [j]ulian days (one-based, numbered from January 1):

`cal -y -j`

- [h]ighlight today and display [3] months spanning the date:

`cal -h -3 {{month}} {{year}}`

- Display the 2 months [B]efore and 3 [A]fter a specific [m]onth of the current year:

`cal -A 3 -B 2 {{month}}`

- Display a specific number of months before and after ([C]ontext) the specified month:

`cal -C {{months}} {{month}}`

- Specify the starting [d]ay of the week (0: Sunday, 1: Monday, ..., 6: Saturday):

`cal -d {{0..6}}`
