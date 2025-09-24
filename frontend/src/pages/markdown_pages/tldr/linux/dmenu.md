---
title: "Create Dynamic Menu - Control Input with dmenu | Online Free DevTools by Hexmos"
name: dmenu
path: /freedevtools/tldr/linux/dmenu
canonical: "https://hexmos.com/freedevtools/tldr/linux/dmenu/"
description: "Create dynamic menus with dmenu. Quickly filter and select items from text input using the command line. Free online tool, no registration required."
category: linux
keywords:
- dynamic menu linux
- text input menu linux
- dmenu command
- command-line menu linux
- linux menu selector
- terminal menu linux
- dmenu custom menu
- dmenu select item
- dmenu filter input
- dmenu script menu
features:
- Generate menus from standard input
- Filter and select items quickly from the terminal
- Customize menu appearance and behavior
- Integrate dmenu with shell scripts
- Launch applications or execute commands based on selection
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dmenu

> Dynamic menu.
> Create a menu from a text input with each item on a new line.
> More information: <https://manned.org/dmenu>.

- Display a menu of the output of the `ls` command:

`{{ls}} | dmenu`

- Display a menu with custom items separated by a new line (`\n`):

`echo -e "{{red}}\n{{green}}\n{{blue}}" | dmenu`

- Let the user choose between multiple items and save the selected one to a file:

`echo -e "{{red}}\n{{green}}\n{{blue}}" | dmenu > {{color.txt}}`

- Launch dmenu on a specific monitor:

`ls | dmenu -m {{1}}`

- Display dmenu at the bottom of the screen:

`ls | dmenu -b`
