---
title: "Display Calendar - View Dates with cal | Free DevTools"
name: cal
path: /freedevtools/tldr/freebsd/cal
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/cal/"
description: "View and manage dates easily with the cal command. Display calendars for specific months, years, or ranges. Free online tool, no registration required."
category: freebsd
keywords:
  - calendar display command
  - date viewing command line
  - linux calendar command
  - unix calendar utility
  - command line calendar
  - terminal calendar display
  - cal command options
  - system calendar command
  - date scheduling command
  - month year calendar view
features:
  - Display the calendar for the current month.
  - Show the calendar for a specific year.
  - Display the calendar for a given month and year.
  - View the entire calendar for the current year.
  - Customize calendar display with options for highlighting and date ranges.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cal

> Display a calendar with the current day highlighted.
> More information: <https://man.freebsd.org/cgi/man.cgi?cal>.

- Display a calendar for the current month:

`cal`

- Display a calendar for a specific year:

`cal {{year}}`

- Display a calendar for a specific month and year:

`cal {{month}} {{year}}`

- Display the whole calendar for the current year:

`cal -y`

- Don't [h]ighlight today and display [3] months spanning the date:

`cal -h -3 {{month}} {{year}}`

- Display the 2 months [B]efore and 3 [A]fter a specific [m]onth of the current year:

`cal -A 3 -B 2 {{month}}`

- Display [j]ulian days (starting from one, numbered from January 1):

`cal -j`
