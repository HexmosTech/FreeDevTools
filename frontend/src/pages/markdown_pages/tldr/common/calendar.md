---
title: "Calendar - Display Events | Online Free DevTools by Hexmos"
name: calendar
path: /freedevtools/tldr/common/calendar
canonical: "https://hexmos.com/freedevtools/tldr/common/calendar/"
description: "Display events with calendar. Schedule, plan, and organize your time efficiently with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- calendar events
- schedule events
- command line calendar
- linux calendar
- macos calendar
- display calendar
- terminal calendar
- event scheduling
- calendar file
- plan events
features:
- Display upcoming events from a default or specified calendar file
- Show events for a specific number of days in the future
- Show events for a specific number of days in the past
- Support custom calendar file paths
- Display current date's events
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# calendar

> Display upcoming events from a calendar file.
> More information: <https://manned.org/calendar>.

- Show events for today and tomorrow (or the weekend on Friday) from the default calendar:

`calendar`

- Look [A]head, showing events for the next 30 days:

`calendar -A {{30}}`

- Look [B]ack, showing events for the previous 7 days:

`calendar -B {{7}}`

- Show events from a custom calendar [f]ile:

`calendar -f {{path/to/file}}`
