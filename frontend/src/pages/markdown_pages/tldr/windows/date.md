---
title: "Date - Display System Date | Free DevTools"
name: date
path: /freedevtools/tldr/widows/date
canonical: "https://hexmos.com/freedevtools/tldr/widows/date/"
description: "Display the system date with Date. Control date formatting and update the system date using command-line interface. Free online tool, no registration required."
category: windows
keywords:
  - system date
  - date display
  - date format
  - date set
  - command line date
  - terminal date
  - date string
  - change date
  - date update
  - date manipulation
features:
  - Display the current system date.
  - Set the system date via command-line.
  - Format the date output.
  - Suppress prompts when displaying the date.
  - Manipulate date values in various formats.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# date

> Display or set the system date.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/date>.

- Display the current system date and prompt to enter a new date (leave empty to keep unchanged):

`date`

- Display the current system date without prompting for a new date:

`date /t`

- Change the current system date to a specific date:

`date {{month}}-{{day}}-{{year}}`
