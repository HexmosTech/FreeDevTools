---
title: "Intercept Tool - Control Input Events on Linux | Online Free DevTools by Hexmos"
name: intercept
path: "/freedevtools/tldr/linux/intercept/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/intercept/"
description: "Control input events with Intercept, a Linux command-line tool. Redirect raw input for custom control and debugging. Free online tool, no registration required."
category: linux
keywords:
- input event intercept
- linux input control
- device event redirection
- raw input stream
- keyboard event capture
- mouse event capture
- event device intercept
- linux event monitoring
- /dev/input/eventX handling
- interception tools linux
features:
- Read raw input events from specified device
- Redirect input events to stdout
- Monitor keyboard and mouse activity
- Bypass system input processing
- Access raw input stream data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# intercept

> Read raw input events from a specified input event device and redirect it to stdout.
> More information: <https://gitlab.com/interception/linux/tools/-/tree/master#intercept>.

- Read and output raw input events from a given input device file (the system will not see any key presses):

`sudo intercept -g {{/dev/input/eventX}}`

- Read and output raw input events from a given input device file (the system can see key presses and does not block other programs from reading them):

`sudo intercept {{/dev/input/eventX}}`
