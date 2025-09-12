---
title: "Locale Checker - Manage System Locale Settings | Free DevTools"
name: locale
path: /freedevtools/tldr/linux/locale
canonical: "https://hexmos.com/freedevtools/tldr/linux/locale/"
description: "Manage and check system locale settings with the Locale Checker.  View available locales, display current date formats, and examine environment variables. Free online tool, no registration required."
category: linux
keywords:
  - locale settings checker
  - locale environment variables
  - system locale manager
  - date format locale
  - locale information display
  - command line locale
  - locale metadata viewer
  - available locales list
  - current locale details
  - locale configuration
features:
  - List all global environment variables related to the user's locale.
  - Display all available locales on the system.
  - Show detailed metadata for each available locale.
  - Display the current date format based on the system's locale.
  - Check and manage your system's locale settings via command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# locale

> Get locale-specific information.
> More information: <https://manned.org/locale>.

- List all global environment variables describing the user's locale:

`locale`

- List all available locales:

`locale {{[-a|--all-locales]}}`

- Display all available locales and the associated metadata:

`locale {{[-a|--all-locales]}} {{[-v|--verbose]}}`

- Display the current date format:

`locale date_fmt`
