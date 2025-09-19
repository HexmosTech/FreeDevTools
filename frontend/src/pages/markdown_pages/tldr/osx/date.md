---
title: "Date Command - Display System Date | Online Free DevTools by Hexmos"
name: date
path: /freedevtools/tldr/osx/date
canonical: "https://hexmos.com/freedevtools/tldr/osx/date/"
description: "Display system date with Date Command. Get current date and time in various formats on macOS. Free online tool, no registration required."
category: osx
keywords:
- date command
- osx date
- macos date
- unix timestamp
- utc date
- iso 8601 date
- date formatting
- display date
- set date
- date manipulation
features:
- Display current date and time
- Format date in various ways
- Output Unix timestamp
- Display date in UTC format
- Show date relative to current time
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# date

> Set or display the system date.
> More information: <https://keith.github.io/xcode-man-pages/date.1.html>.

- Display the current date using the default locale's format:

`date +%c`

- Display the current date in UTC and ISO 8601 format:

`date -u +%Y-%m-%dT%H:%M:%SZ`

- Display the current date as a Unix timestamp (seconds since the Unix epoch):

`date +%s`

- Display a specific date (represented as a Unix timestamp) using the default format:

`date -r {{1473305798}}`

- Display a date relative to the current date using the default format:

`date -v {{+1d}} -v {{-20m}}`
