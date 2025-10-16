---
title: "Caffeinate - Prevent macOS Sleep | Online Free DevTools by Hexmos"
name: caffeinate
path: "/freedevtools/tldr/osx/caffeinate/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/caffeinate/"
description: "Prevent macOS from sleeping with Caffeinate. Stop your Mac from going idle, manage sleep settings, and prevent disk idling. Free online tool, no registration required."
category: osx
keywords:
  - macOS sleep prevention
  - Caffeinate command line
  - Prevent Mac idling
  - macOS no sleep
  - Keep Mac awake
  - Disable display sleep macOS
  - Disk idling prevention macOS
  - Command line no sleep
  - Caffeinate process control
  - macOS system management
features:
  - Prevent macOS from sleeping indefinitely.
  - Prevent the display from going to sleep.
  - Prevent sleeping for a specified duration.
  - Keep system awake while a specific process runs.
  - Prevent disk idling on macOS.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# caffeinate

> Prevent macOS from sleeping.
> More information: <https://keith.github.io/xcode-man-pages/caffeinate.8.html>.

- Prevent the display from sleeping:

`caffeinate -d`

- Prevent from sleeping for 1 hour (3600 seconds):

`caffeinate -u -t {{3600}}`

- Fork a process, exec "make" in it, and prevent sleep as long as that process is running:

`caffeinate -i make`

- Prevent from sleeping until a process with the specified PID completes:

`caffeinate -w {{pid}}`

- Prevent disk from sleeping (use `<Ctrl c>` to exit):

`caffeinate -m`
