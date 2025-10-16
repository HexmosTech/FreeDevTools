---
title: "Fake Time Control - Manage System Time for Commands | Online Free DevTools by Hexmos"
name: faketime
path: "/freedevtools/tldr/linux/faketime/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/faketime/"
description: "Control system time for commands with faketime. Easily simulate past, present, and future dates for testing and debugging. Free online tool, no registration required."
category: linux
keywords:
  - time manipulation command
  - system time control command
  - faketime command line
  - command line time simulator
  - date simulation tool
  - bash time manipulation
  - linux time control
  - test environment time setting
  - program time testing
  - development time management
features:
  - Simulates specific dates and times for commands.
  - Allows testing of time-sensitive applications.
  - Enables debugging of date/time related issues.
  - Supports specifying past, present, or future times.
  - Integrates seamlessly with command-line tools.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# faketime

> Fake the system time for a command.
> More information: <https://manned.org/faketime>.

- Fake the time to this evening, before printing the result of `date`:

`faketime '{{today 23:30}}' {{date}}`

- Open a new Bash shell, which uses yesterday as the current date:

`faketime '{{yesterday}}' {{bash}}`

- Simulate how a program would act next Friday night:

`faketime '{{next Friday 1 am}}' {{path/to/program}}`
