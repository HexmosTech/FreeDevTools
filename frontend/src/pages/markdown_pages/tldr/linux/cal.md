---
title: "Display Calendar - View Monthly & Yearly Schedules | Free DevTools"
name: cal
path: /freedevtools/tldr/linux/cal
canonical: "https://hexmos.com/freedevtools/tldr/linux/cal/"
description: "View and manage monthly and yearly schedules with the cal command.  Easily display calendars for specific months, years, or ranges. Free online tool, no registration required."
category: linux
keywords:
  - calendar display command
  - calendar viewing utility
  - command line calendar
  - terminal calendar
  - linux calendar command
  - unix calendar command
  - monthly calendar view
  - yearly calendar view
  - date scheduling command
  - system calendar tool
features:
  - Display the current month's calendar.
  - Show multiple months at once.
  - View the entire year's calendar.
  - Display the next twelve months.
  - Customize the starting day of the week.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cal

> Display a calendar with the current day highlighted.
> More information: <https://manned.org/cal>.

- Display a calendar for the current month:

`cal`

- Display 3 months spanning the date:

`cal {{[-3|--three]}}`

- Display the whole calendar for the current year:

`cal {{[-y|--year]}}`

- Display the next twelve months:

`cal {{[-Y|--twelve]}}`

- Use Monday as the first day of the week:

`cal {{[-m|--monday]}}`

- Display a calendar for a specific year (4 digits):

`cal {{year}}`

- Display a calendar for a specific month and year:

`cal {{month}} {{year}}`
