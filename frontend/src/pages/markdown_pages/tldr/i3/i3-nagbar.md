---
title: "Display Error Bars - Control i3-nagbar Messages | Free DevTools"
name: i3-nagbar
path: /freedevtools/tldr/i3/i3-nagbar
canonical: "https://hexmos.com/freedevtools/tldr/i3/i3-nagbar/"
description: "Control error and warning messages with i3-nagbar, the bar display tool for i3 window manager. Customize message types and actions. Free online tool, no registration required."
category: common
keywords:
- i3-nagbar message
- i3-nagbar error display
- i3 warning bar
- Linux notification
- Desktop alert
- Window manager message
- i3 configuration
- Pango font specification
- Custom button command
- Shell command execution
features:
- Display error messages on screen
- Display warning messages on screen
- Customize message fonts
- Create interactive buttons with commands
- Execute commands in a terminal upon button click
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# i3-nagbar

> Display an error/warning in a bar on top of a screen.
> More information: <https://manned.org/i3-nagbar>.

- Display an error:

`i3-nagbar {{[-m|--message]}} "{{error message}}"`

- Display a warning:

`i3-nagbar {{[-t|--type]}} warning {{[-m|--message]}} "{{warning message}}"`

- Use the specified font:

`i3-nagbar {{[-f|--font]}} "{{pango:monospace bold 9}}" {{[-m|--message]}} "{{error message}}"`

- Create a button and run a command in a terminal on click:

`i3-nagbar {{[-b|--button]}} "{{button text}}" {{command}} {{[-m|--message]}} "{{error message}}"`

- Create a button and run a command on click:

`i3-nagbar {{[-B|--button-no-terminal]}} "{{button text}}" {{command}} {{[-m|--message]}} "{{error message}}"`

- Always open `i3-nagbar` on the primary monitor (default: focused monitor):

`i3-nagbar {{[-pm|--primary --message]}} "{{error message}}"`
