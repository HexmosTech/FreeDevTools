---
title: "Time Tracker - Measure Activity Duration | Free DevTools"
name: timew
path: /freedevtools/tldr/common/timew
canonical: "https://hexmos.com/freedevtools/tldr/common/timew/"
description: "Measure activity duration with Time Tracker. Track time spent on tasks, generate reports, and analyze productivity. Free online tool, no registration required."
category: common
keywords:
- time tracking
- activity tracking
- command line time tracker
- duration measurement
- timewarrior
- timew command
- productivity tracker
- command-line activity manager
- shell time tracker
- task duration analysis
features:
- Start and stop activity tracking with ease
- Tag activities for detailed categorization
- Generate summary reports of tracked time
- Track activities retroactively with specific start and end times
- View activity reports for different timeframes like day, week, month
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# timew

> A time tracking tool used to measure the duration of activities.
> More information: <https://timewarrior.net/docs>.

- Start tracking an activity:

`timew start`

- Tag the current activity:

`timew tag {{activity_tag}}`

- Start tracking and tag a new activity:

`timew start {{activity_tag}}`

- Stop the current activity:

`timew stop`

- Track an activity in the past:

`timew track {{start_time}} - {{end_time}} {{activity_tag}}`

- View tracked items of the day:

`timew summary`

- View report for the last day, week, current month, etc.:

`timew summary :{{today|yesterday|week|lastweek|month|lastmonth|year|lastyear}}`
