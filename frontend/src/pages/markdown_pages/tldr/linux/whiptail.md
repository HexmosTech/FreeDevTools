---
title: "Whiptail Dialog Boxes - Create Shell Dialogs | Online Free DevTools by Hexmos"
name: whiptail
path: /freedevtools/tldr/linux/whiptail
canonical: "https://hexmos.com/freedevtools/tldr/linux/whiptail/"
description: "Create customizable text-based dialog boxes with Whiptail for shell scripts.  Easily display messages, input fields, and menus. Free online tool, no registration required."
category: linux
keywords:
  - shell dialog creation
  - terminal dialog boxes
  - whiptail command line
  - linux shell scripting
  - text-based user interface
  - command-line dialogs
  - interactive shell scripts
  - message boxes
  - input boxes
  - menu creation
features:
  - Display simple message boxes with custom titles and sizes.
  - Implement yes/no dialogs with customizable button text.
  - Create text input boxes for user data entry.
  - Securely collect passwords using password input boxes.
  - Build interactive menus with multiple choices and custom values.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# whiptail

> Display text-based dialog boxes from shell scripts.
> See also: `dialog`, `gum`.
> More information: <https://manned.org/whiptail>.

- Display a simple message:

`whiptail --title "{{title}}" --msgbox "{{message}}" {{height_in_chars}} {{width_in_chars}}`

- Display a boolean choice, returning the result through the exit code:

`whiptail --title "{{title}}" --yesno "{{message}}" {{height_in_chars}} {{width_in_chars}}`

- Customise the text on the yes/no buttons:

`whiptail --title "{{title}}" --yes-button "{{text}}" --no-button "{{text}}" --yesno "{{message}}" {{height_in_chars}} {{width_in_chars}}`

- Display a text input box:

`{{result_variable_name}}="$(whiptail --title "{{title}}" --inputbox "{{message}}" {{height_in_chars}} {{width_in_chars}} {{default_text}} 3>&1 1>&2 2>&3)"`

- Display a password input box:

`{{result_variable_name}}="$(whiptail --title "{{title}}" --passwordbox "{{message}}" {{height_in_chars}} {{width_in_chars}} 3>&1 1>&2 2>&3)"`

- Display a multiple-choice menu:

`{{result_variable_name}}=$(whiptail --title "{{title}}" --menu "{{message}}" {{height_in_chars}} {{width_in_chars}} {{menu_display_height}} {{"value_1" "display_text_1" "value_2" "display_text_2" ...}} 3>&1 1>&2 2>&3)`
