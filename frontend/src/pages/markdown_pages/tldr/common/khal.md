---
title: "Khal Calendar - Schedule Events with Command Line | Free DevTools"
name: khal
path: /freedevtools/tldr/common/khal
canonical: "https://hexmos.com/freedevtools/tldr/common/khal/"
description: "Schedule events with Khal, a powerful command-line calendar. Manage appointments, lists, and calendars seamlessly from your terminal. Free online tool, no registration required."
category: common
keywords:
- command line calendar
- terminal calendar application
- khal schedule events
- khal list events
- khal calendar view
- khal appointment manager
- khal icalendar
- text based calendar
- linux calendar
- macos calendar
features:
- List events from the command line
- Add new events to a specified calendar
- Print calendar view for specified time period
- Filter events by calendar
- Schedule events for specific dates and times
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# khal

> A text-based calendar and scheduling application.
> More information: <https://lostpackets.de/khal>.

- Start Khal on interactive mode:

`ikhal`

- Print all events scheduled in personal calendar for the next seven days:

`khal list -a {{personal}} {{today}} {{7d}}`

- Print all events scheduled not in personal calendar for tomorrow at 10:00:

`khal at -d {{personal}} {{tomorrow}} {{10:00}}`

- Print a calendar with a list of events for the next three months:

`khal calendar`

- Add new event to personal calendar:

`khal new -a {{personal}} {{2020-09-08}} {{18:00}} {{18:30}} "{{Dentist appointment}}"`
