---
title: "Calendar Control with gcalcli - Interact with Google Calendar | Online Free DevTools by Hexmos"
name: gcalcli
path: /freedevtools/tldr/common/gcalcli
canonical: "https://hexmos.com/freedevtools/tldr/common/gcalcli/"
description: "Control Google Calendar from the command line with gcalcli. Manage events, list schedules, and add quick events seamlessly. Free online tool, no registration required."
category: common
keywords:
- Google Calendar CLI
- gcalcli command line
- Calendar event manager
- Schedule event CLI
- Google calendar linux
- Google calendar bash
- Google calendar terminal
- Event reminder command
- List google calendar events
- Add google calendar event
features:
- List events for all calendars
- Show events between specific dates
- Display calendar of events by week
- Quickly add events to Google Calendar
- Trigger interactive event addition prompt
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gcalcli

> Interact with Google Calendar.
> Requests Google API authorization upon first launch.
> More information: <https://github.com/insanum/gcalcli>.

- List your events for all your calendars over the next 7 days:

`gcalcli agenda`

- Show events starting from or between specific dates (also takes relative dates e.g. "tomorrow"):

`gcalcli agenda {{mm/dd}} [{{mm/dd}}]`

- List events from a specific calendar:

`gcalcli --calendar {{calendar_name}} agenda`

- Display an ASCII calendar of events by week:

`gcalcli calw`

- Display an ASCII calendar of events for a month:

`gcalcli calm`

- Quick-add an event to your calendar:

`gcalcli --calendar {{calendar_name}} quick "{{mm/dd}} {{HH:MM}} {{event_name}}"`

- Add an event to calendar. Triggers interactive prompt:

`gcalcli --calendar "{{calendar_name}}" add`
