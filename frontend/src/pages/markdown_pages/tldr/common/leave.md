---
title: "Schedule Leave - Set Leave Reminders | Online Free DevTools by Hexmos"
name: leave
path: /freedevtools/tldr/common/leave
canonical: "https://hexmos.com/freedevtools/tldr/common/leave/"
description: "Schedule leave alerts with Leave. Set time-based reminders to depart on time, preventing overstays. Free online tool, no registration required."
category: common
keywords:
- leave reminder
- schedule departure
- set leave alert
- command line leave
- linux leave command
- freebsd leave command
- terminal leave
- time-based reminder
- cron alternative
- leave notifier
features:
- Schedule reminders to depart at a specific time.
- Set alerts based on a relative time duration.
- Display leave reminders in the terminal.
- Receive notifications when it's time to leave.
- Easily remove reminders using the `kill` command.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# leave

> Set a reminder for when it's time to leave.
> To remove reminders use `kill $(pidof leave)`.
> More information: <https://www.freebsd.org/cgi/man.cgi?query=leave>.

- Set a reminder at a given time:

`leave {{time_to_leave}}`

- Set a reminder to leave at noon:

`leave {{1200}}`

- Set a reminder in a specific amount of time:

`leave +{{amount_of_time}}`

- Set a reminder to leave in 4 hours and 4 minutes:

`leave +{{0404}}`
