---
title: "Format Datetime - Arithmetic, Parsing & Formatting | Online Free DevTools by Hexmos"
name: biff
path: "/freedevtools/tldr/common/biff/"
canonical: "https://hexmos.com/freedevtools/tldr/common/biff/"
description: "Format datetime values with biff. Perform date arithmetic, parsing, and formatting operations with ease. Free online tool, no registration required."
category: common
keywords:
- datetime formatter
- datetime parser
- date arithmetic
- date formatting tool
- time zone converter
- relative time calculator
- date duration calculator
- log timestamp formatter
- command line datetime tool
- unix datetime tool
features:
- Format datetime values using custom formats.
- Convert datetime values between different time zones.
- Calculate relative times and durations.
- Perform datetime arithmetic operations (add/subtract).
- Parse datetime values from various sources like log files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# biff

> A simple utility for doing datetime arithmetic, parsing and formatting.
> More information: <https://github.com/burntsushi/biff>.

- Print the current time in a format of your choosing:

`biff time fmt {{[-f|--format]}} rfc3339 now`

- Print multiple relative times in one command:

`biff time fmt {{[-f|--format]}} '%c' now -1d 'next sat' 'last monday' '9pm last mon'`

- Print the current time in another time zone, and round it the nearest 15 minute increment:

`biff time in Asia/Bangkok now | biff time round {{[-i|--increment]}} 15 {{[-s|--smallest]}} minute`

- Convert a time between two different time zone:

`TZ='Japan' biff time in America/New_York 02:30`

- Print a past or future time relative to current time:

`biff time add {{-1d|1d|1w|-1m|1y|...}} now`

- Add a complex duration to the current time:

`biff time add '1 week, 12 hours ago' now`

- Find the duration since a date in the past and round it to the desired precision:

`biff span since 2025-01-20T12:00 {{[-l|--largest]}} year`

- Find timestamps in a log file and reformat them into your local time in place:

`biff tag lines /tmp/access.log | biff time in system | biff time fmt {{[-f|--format]}} '%c' | head {{[-n|--lines]}} 3 | biff untag {{[-s|--substitute]}}`
