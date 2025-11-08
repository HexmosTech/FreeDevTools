---
title: "Evtest Input Device - Display Events | Online Free DevTools by Hexmos"
name: evtest
path: "/freedevtools/tldr/linux/evtest/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/evtest/"
description: "Display and control input device events with evtest.  Monitor keystrokes, mouse movements, and other input activity using command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - input device events display
  - linux input event viewer
  - evtest command monitoring
  - event code analysis linux
  - input device debugging linux
  - system input diagnostics
  - evtest exclusive grab
  - keyboard event monitoring
  - mouse event monitoring
  - linux system tools
features:
  - List all detected input devices
  - Display real-time events from input devices
  - Grab input devices exclusively
  - Query the state of specific keys or buttons
  - Diagnose input device malfunctions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# evtest

> Display information from input device drivers.
> More information: <https://manned.org/evtest>.

- List all detected input devices:

`sudo evtest`

- Display events from a specific input device:

`sudo evtest /dev/input/event{{number}}`

- Grab the device exclusively, preventing other clients from receiving events:

`sudo evtest --grab /dev/input/event{{number}}`

- Query the state of a specific key or button on an input device:

`sudo evtest --query /dev/input/event{{number}} {{event_type}} {{event_code}}`
