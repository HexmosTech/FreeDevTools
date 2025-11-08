---
title: "Display Dialog Boxes - Control Terminal Interactions | Online Free DevTools by Hexmos"
name: dialog
path: "/freedevtools/tldr/linux/dialog/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/dialog/"
description: "Control terminal interactions easily with dialog. Display message boxes, prompt for user input, and create yes/no questions. Free online tool, no registration required."
category: linux
keywords:
  - terminal dialog box
  - command line dialog
  - linux dialog
  - unix dialog
  - text input dialog
  - message box dialog
  - yes no dialog
  - terminal interaction
  - user input dialog
  - dialog box creation
features:
  - Display customizable message boxes
  - Prompt users for text input
  - Create interactive yes/no questions
  - Provide simple help information
  - Offer flexible size adjustments for dialogs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dialog

> Display dialog boxes on the terminal.
> See also: `gum`, `whiptail`.
> More information: <https://manned.org/dialog>.

- Display a message:

`dialog --msgbox "{{Message}}" {{height}} {{width}}`

- Prompt the user for text:

`dialog --inputbox "{{Enter text:}}" {{8}} {{40}} 2>{{output.txt}}`

- Prompt the user for a yes/no question:

`dialog --yesno "{{Continue?}}" {{7}} {{40}}`

- Display help:

`dialog`
