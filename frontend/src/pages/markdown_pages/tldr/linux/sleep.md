---
title: "Sleep Command - Control Process Timing | Online Free DevTools by Hexmos"
name: sleep
path: /freedevtools/tldr/linux/sleep
canonical: "https://hexmos.com/freedevtools/tldr/linux/sleep/"
description: "Control process timing with the Sleep command.  Pause execution for specified durations using seconds, minutes, hours, or days. Free online tool, no registration required."
category: linux
keywords:
  - sleep command
  - process timer
  - delay command
  - time control
  - command line sleep
  - shell scripting sleep
  - linux sleep command
  - unix sleep command
  - batch sleep command
  - scheduled task sleep
features:
  - Pause script execution for a defined time.
  - Use various time units (seconds, minutes, hours, days).
  - Chain commands to execute after a delay.
  - Control program flow with precise timing.
  - Implement time-based automation in scripts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sleep

> Delay for a specified amount of time.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/sleep-invocation.html>.

- Delay in seconds:

`sleep {{seconds}}`

- Delay in [m]inutes. (Other units [d]ay, [h]our, [s]econd, [inf]inity can also be used):

`sleep {{minutes}}m`

- Delay for 1 [d]ay 3 [h]ours:

`sleep 1d 3h`

- Execute a specific command after 20 [m]inutes delay:

`sleep 20m && {{command}}`
