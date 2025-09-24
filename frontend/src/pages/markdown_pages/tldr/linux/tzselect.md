---
title: "Select Timezone - Interactively Choose Timezone | Online Free DevTools by Hexmos"
name: tzselect
path: /freedevtools/tldr/linux/tzselect
canonical: "https://hexmos.com/freedevtools/tldr/linux/tzselect/"
description: "Select timezone interactively with tzselect. Find the correct timezone based on your location using command line interface. Free online tool, no registration required."
category: linux
keywords:
  - timezone selector
  - interactive timezone selection
  - command line timezone tool
  - tzselect linux
  - tzselect command
  - find timezone by coordinates
  - timezone identifier
  - timezone lookup
  - geographical timezone finder
  - ISO 6709 timezone
features:
  - Interactively select a timezone from a list of regions and cities.
  - Print the selected timezone identifier to standard output.
  - Find the nearest timezone using geographic coordinates in ISO 6709 format.
  - Navigate through the timezone selection menu using terminal input.
  - Provide a simple command-line interface for timezone selection.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tzselect

> Interactively select timezone.
> Note: This program doesn't actually set the timezone.
> More information: <https://manned.org/tzselect>.

- Open the interactive menu for timezone selection and print the selected timezone to `stdout`:

`tzselect`

- Ask for nearest timezone to coordinates in ISO 6709 notation:

`tzselect -c {{coordinates}}`
