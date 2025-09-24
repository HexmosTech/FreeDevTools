---
title: "iCal Events - Control Calendar Events with iCalBuddy | Online Free DevTools by Hexmos"
name: icalbuddy
path: /freedevtools/tldr/osx/icalbuddy
canonical: "https://hexmos.com/freedevtools/tldr/osx/icalbuddy/"
description: "Control calendar events easily with iCalBuddy. Manage, format, and display iCal events and tasks directly from the command line. Free online tool, no registration required."
category: osx
keywords:
- iCal event manager
- macOS calendar CLI
- command-line calendar tool
- iCal task manager
- iCal event formatter
- osx calendar events
- icalbuddy command
- calendar event exporter
- calendar list generator
- schedule event manager
features:
- Display events for a specific date range
- List upcoming tasks and deadlines
- Format calendar output for better readability
- Show events separated by calendar
- Filter events based on specified criteria
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# icalBuddy

> Command-line utility for printing events and tasks from the macOS calendar database.
> More information: <https://hasseg.org/icalBuddy/>.

- Show events later today:

`icalBuddy --includeOnlyEventsFromNowOn eventsToday`

- Show uncompleted tasks:

`icalBuddy uncompletedTasks`

- Show a formatted list separated by calendar for all events today:

`icalBuddy --formatOutput --separateByCalendar eventsToday`

- Show tasks for a specified number of days:

`icalBuddy --includeOnlyEventsFromNowOn "tasksDueBefore:today+{{number_of_days}}"`

- Show events in a time range:

`icalBuddy eventsFrom:{{start_date}} to:{{end_date}}`
