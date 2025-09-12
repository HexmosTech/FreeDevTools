---
title: "Calendar Command - Generate Calendars | Free DevTools"
name: cal
path: /freedevtools/tldr/unknown/cal
canonical: "https://hexmos.com/freedevtools/tldr/unknown/cal/"
description: "Generate calendars with the cal command. Display specific months, years, and even Easter dates with this versatile command-line utility. Free online tool, no registration required."
category: unknown
keywords:
- calendar generator
- command line calendar
- date calculator
- year calendar
- month calendar
- terminal calendar
- ncal easter date
- unix calendar
- linux calendar
- macos calendar
features:
- Display calendar for the current month
- Show previous, current, and next month
- Display calendar for a specific month and year
- Generate calendar for an entire year
- Calculate and display Easter date for a given year
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cal

> Print calendar information.
> More information: <https://keith.github.io/xcode-man-pages/cal.1.html>.

- Display a calendar for the current month:

`cal`

- Display previous, current, and next month:

`cal -3`

- Display a calendar for a specific month (1-12 or name):

`cal -m {{month}}`

- Display a calendar for the current year:

`cal -y`

- Display a calendar for a specific year (4 digits):

`cal {{year}}`

- Display a calendar for a specific month and year:

`cal {{month}} {{year}}`

- Display date of Easter (Western Christian churches) in a given year:

`ncal -e {{year}}`
