---
title: "Calendar - Display Calendar with Cal Command | Online Free DevTools by Hexmos"
name: cal
path: "/freedevtools/tldr/openbsd/cal/"
canonical: "https://hexmos.com/freedevtools/tldr/openbsd/cal/"
description: "Display calendars quickly with Cal command. View specific months, years, and Julian dates. Free online tool, no registration required."
category: openbsd
keywords:
  - calendar command
  - cal command
  - unix calendar
  - linux calendar
  - terminal calendar
  - command line calendar
  - calendar date
  - calendar year
  - julian date calendar
  - month calendar
features:
  - Display the current month's calendar
  - Display a calendar for a specific year
  - Display a calendar for a specific month and year
  - Display Julian days starting from January 1
  - Set Monday as the week's starting day
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cal

> Display a calendar with the current day highlighted.
> More information: <https://man.openbsd.org/cal>.

- Display a calendar for the current month:

`cal`

- Display a calendar for a specific year:

`cal {{year}}`

- Display a calendar for a specific month and year:

`cal {{month}} {{year}}`

- Display a calendar for the current [y]ear:

`cal -y`

- Display [j]ulian days (starting from one, numbered from January 1):

`cal -j`

- Use [m]onday as week start instead of Sunday:

`cal -m`

- Number [w]eek numbers (incompatible with `-j`):

`cal -w`
