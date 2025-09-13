---
title: "Control X11 Actions with xdotool | Free DevTools"
name: xdotool
path: /freedevtools/tldr/linux/xdotool
canonical: "https://hexmos.com/freedevtools/tldr/linux/xdotool/"
description: "Automate X11 actions with xdotool.  Control mouse clicks, keyboard input, and window management efficiently. Free online tool, no registration required."
category: linux
keywords:
  - xdotool window control
  - xdotool mouse automation
  - xdotool keyboard simulation
  - x11 window manipulation xdotool
  - linux xdotool commands
  - xdotool scripting automation
  - xdotool key press simulation
  - xdotool GUI automation
  - xdotool window focus control
  - xdotool click automation
features:
  - Simulate mouse clicks and keyboard input.
  - Control and manage X11 windows.
  - Automate complex sequences of actions.
  - Interact with applications programmatically.
  - Retrieve window IDs and active window information.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xdotool

> Automate X11 actions.
> More information: <https://manned.org/xdotool>.

- Retrieve the X-Windows window ID of the running Firefox window(s):

`xdotool search --onlyvisible --name {{firefox}}`

- Perform a mouse `<RightClick>`:

`xdotool click {{3}}`

- Get the ID of the currently active window:

`xdotool getactivewindow`

- Focus on the window with ID of 12345:

`xdotool windowfocus --sync {{12345}}`

- Type a message, with a 500ms delay for each letter:

`xdotool type --delay {{500}} "Hello world"`

- Press the `<Enter>` key:

`xdotool key {{KP_Enter}}`
