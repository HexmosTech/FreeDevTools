---
title: "Analyze User Connection Time - AC Command | Online Free DevTools by Hexmos"
name: ac
path: "/freedevtools/tldr/linux/ac/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ac/"
description: "Analyze user connection time with AC command. Quickly track user login durations and generate daily summaries. Free online tool, no registration required."
category: linux
keywords:
  - user connection time analysis
  - account statistics command
  - ac command linux
  - linux user login duration
  - user session analyzer
  - daily connection time reports
  - connection time calculator
  - system accounting tool
  - user activity monitor
  - command line accounting
features:
  - Calculate total connection time for users
  - Generate daily connection time summaries
  - Track individual user connection durations
  - Display compatibility details for various systems
  - Provide historical user connection data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ac

> Print statistics on how long users have been connected.
> More information: <https://www.gnu.org/software/acct/manual/accounting.html#ac>.

- Print how long the current user has been connected in hours:

`ac`

- Print how long users have been connected in hours:

`ac {{[-p|--individual-totals]}}`

- Print how long a particular user has been connected in hours:

`ac {{[-p|--individual-totals]}} {{username}}`

- Print how long a particular user has been connected in hours per day (with total):

`ac {{[-d|--daily-totals]}} {{[-p|--individual-totals]}} {{username}}`

- Also display additional details:

`ac --compatibility`
