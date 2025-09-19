---
title: "Display Dialogs with Zenity - Command-Line Tool | Online Free DevTools by Hexmos"
name: zenity
path: /freedevtools/tldr/linux/zenity
canonical: "https://hexmos.com/freedevtools/tldr/linux/zenity/"
description: "Display dialogs instantly with Zenity, the command-line dialog tool. Create interactive shell scripts and forms easily. Free online tool, no registration required."
category: linux
keywords:
  - command-line dialog
  - shell script dialog
  - zenity dialog
  - linux dialog
  - create forms
  - display info
  - display progress bar
  - command-line interface
  - cli dialog
  - zenity command
features:
  - Display question prompts from the command line
  - Show information messages in a graphical dialog
  - Create and display interactive forms
  - Select files and directories through a dialog
  - Display progress bars with dynamic updates
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zenity

> Display dialogs from the command-line/shell scripts.
> Return user-inserted values or 1 if error.
> More information: <https://manned.org/zenity>.

- Display the default question dialog:

`zenity --question`

- Display an info dialog displaying the text "Hello!":

`zenity --info --text="{{Hello!}}"`

- Display a name/password form and output the data separated by ";":

`zenity --forms --add-entry="{{Name}}" --add-password="{{Password}}" --separator="{{;}}"`

- Display a file selection form in which the user can only select directories:

`zenity --file-selection --directory`

- Display a progress bar which updates its message every second and show a progress percent:

`{{(echo "#1"; sleep 1; echo "50"; echo "#2"; sleep 1; echo "100")}} | zenity --progress`
