---
title: "Countdown Timer - Control Terminal Timers | Online Free DevTools by Hexmos"
name: termdown
path: /freedevtools/tldr/common/termdown
canonical: "https://hexmos.com/freedevtools/tldr/common/termdown/"
description: "Control terminal timers with termdown, a versatile countdown timer and stopwatch. Monitor elapsed time and set alarms directly from your command line. Free online tool, no registration required."
category: common
keywords:
- terminal countdown timer
- command line stopwatch
- linux timer utility
- macos timer command
- terminal alarm clock
- time management tool
- shell script timer
- countdown script
- timer with blink
- stopwatch with title
features:
- Start a countdown timer with a specified duration
- Initiate a stopwatch to measure elapsed time
- Configure the terminal to blink upon timer completion
- Display a title above the countdown for context
- Display current system time in the terminal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# termdown

> Countdown timer and stopwatch.
> More information: <https://github.com/trehn/termdown>.

- Start a stopwatch:

`termdown`

- Start a 1 minute and 30 seconds countdown:

`termdown {{1m30s}}`

- Start a 1 minute 30 seconds countdown with blinking the terminal at the end:

`termdown {{1m30s}} --blink`

- Show a title above countdown:

`termdown {{1m30s}} --title "{{Interesting title}}"`

- Display current time:

`termdown --time`
