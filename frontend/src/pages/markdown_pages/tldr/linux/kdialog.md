---
title: "Control kdialog - Display KDE Dialogs | Online Free DevTools by Hexmos"
name: kdialog
path: "/freedevtools/tldr/linux/kdialog"
canonical: "https://hexmos.com/freedevtools/tldr/linux/kdialog/"
description: "Control KDE dialog boxes with kdialog. Display message boxes, input prompts, and file choosers from shell scripts. Free online tool, no registration required."
category: linux
keywords:
  - KDE dialog control
  - kdialog command line
  - shell script dialog
  - Linux dialog boxes
  - desktop environment automation
  - input prompt tool
  - message box generator
  - file chooser dialog
  - password prompt tool
  - dropdown menu selector
features:
  - Display message boxes with custom content
  - Prompt users for input with text or passwords
  - Open file selection dialogs to choose files
  - Create yes/no and warning dialogs for user confirmation
  - Display progress bars and communicate via D-Bus
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kdialog

> Show KDE dialog boxes from within shell scripts.
> More information: <https://develop.kde.org/docs/administration/kdialog/>.

- Open a dialog box displaying a specific message:

`kdialog --msgbox "{{message}}" "{{optional_detailed_message}}"`

- Open a question dialog with a `yes` and `no` button, returning `0` and `1`, respectively:

`kdialog --yesno "{{message}}"`

- Open a warning dialog with a `yes`, `no`, and `cancel` button, returning `0`, `1`, or `2` respectively:

`kdialog --warningyesnocancel "{{message}}"`

- Open an input dialog box and print the input to `stdout` when `OK` is pressed:

`kdialog --inputbox "{{message}}" "{{optional_default_text}}"`

- Open a dialog to prompt for a specific password and print it to `stdout`:

`kdialog --password "{{message}}"`

- Open a dialog containing a specific dropdown menu and print the selected item to `stdout`:

`kdialog --combobox "{{message}}" "{{item1}}" "{{item2}}" "{{...}}"`

- Open a file chooser dialog and print the selected file's path to `stdout`:

`kdialog --getopenfilename`

- Open a progressbar dialog and print a D-Bus reference for communication to `stdout`:

`kdialog --progressbar "{{message}}"`
