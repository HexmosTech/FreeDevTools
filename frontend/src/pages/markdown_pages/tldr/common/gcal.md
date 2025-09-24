---
title: "Calendar Display - View Calendar with gcal | Online Free DevTools by Hexmos"
name: gcal
path: /freedevtools/tldr/common/gcal
canonical: "https://hexmos.com/freedevtools/tldr/common/gcal/"
description: "Display Calendar information with gcal command. Quickly view current or specific months and years. Free online tool, no registration required."
category: common
keywords:
- calendar display
- gcal command
- linux calendar
- unix calendar tool
- command line calendar
- display month calendar
- date formatting
- calendar with week numbers
- terminal calendar
- gcal date utility
features:
- Display the current month's calendar
- Display a calendar for a specific month and year
- Show calendar with week numbers included
- Set the starting day of the week
- Display the previous, current, and next month
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcal

> Display calendar.
> More information: <https://www.gnu.org/software/gcal/manual/gcal.html#Invoking-Gcal>.

- Display calendar for the current month:

`gcal`

- Display calendar for the month of February of the year 2010:

`gcal 2 2010`

- Provide calendar sheet with week numbers:

`gcal --with-week-number`

- Change starting day of week to 1st day of the week (Monday):

`gcal --starting-day=1`

- Display the previous, current and next month surrounding today:

`gcal .`
