---
title: "Zenity Dialogs - Command-Line Dialogs for Linux | Online Free DevTools by Hexmos"
name: zenity
path: /freedevtools/tldr/linux/zenity
canonical: "https://hexmos.com/freedevtools/tldr/linux/zenity/"
description: "Create command-line dialogs with Zenity for Linux. Display messages, forms, and progress bars easily. Free online tool, no registration required."
category: linux
keywords:
  - linux command-line dialog
  - zenity dialog box
  - linux zenity tutorial
  - shell script dialog creation
  - create interactive forms linux
  - zenity progress bar
  - linux gui dialog
  - command-line file selection
  - zenity question prompt
  - linux zenity examples
features:
  - Display interactive question dialog boxes.
  - Show informative messages using various dialog types.
  - Create and manage custom forms with input fields.
  - Allow users to select files and directories through dialogs.
  - Implement dynamic progress bars with customizable messages.
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
