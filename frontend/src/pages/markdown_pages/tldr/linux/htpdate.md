---
title: "htpdate - Synchronize Time via HTTP | Online Free DevTools by Hexmos"
name: htpdate
path: /freedevtools/tldr/linux/htpdate
canonical: "https://hexmos.com/freedevtools/tldr/linux/htpdate/"
description: "Synchronize your system time with htpdate using HTTP headers.  This command-line tool offers precise time synchronization and handles clock drift. Free online tool, no registration required."
category: linux
keywords:
  - time synchronization command
  - http time synchronization
  - network time protocol alternative
  - command-line time setting
  - htpdate linux
  - htpdate usage
  - system clock synchronization
  - htpdate options
  - precise time setting
  - date and time synchronization
features:
  - Synchronizes system time using HTTP headers from specified servers.
  - Offers a quiet mode for simulating synchronization without changes.
  - Compensates for systematic clock drift for enhanced accuracy.
  - Allows setting time immediately after synchronization.
  - Provides a reliable and simple method for time synchronization.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# htpdate

> Synchronize local date and time via HTTP headers from web servers.
> More information: <https://www.vervest.org/htp/>.

- Synchronize date and time:

`sudo htpdate {{host}}`

- Perform simulation of synchronization, without any action:

`htpdate -q {{host}}`

- Compensate the systematic clock drift:

`sudo htpdate -x {{host}}`

- Set time immediate after the synchronization:

`sudo htpdate -s {{host}}`
