---
title: "Format Date - Control System Time | Online Free DevTools by Hexmos"
name: date
path: /freedevtools/tldr/common/date
canonical: "https://hexmos.com/freedevtools/tldr/common/date/"
description: "Format and control system date and time with the date command.  Display dates in various formats, including Unix timestamps and ISO 8601. Free online tool, no registration required."
category: common
keywords:
  - date formatting command
  - date manipulation command
  - unix timestamp converter
  - iso 8601 date converter
  - date command line tool
  - system date control
  - time zone conversion
  - rfc 3339 date format
  - command line date
  - date time formatting
features:
  - Display the current date and time in various formats.
  - Convert between Unix timestamps and human-readable dates.
  - Set the system date and time.
  - Utilize different time zones (UTC, local).
  - Format dates according to specific standards (ISO 8601, RFC 3339).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# date

> Set or display the system date.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/date-invocation.html>.

- Display the current date using the default locale's format:

`date +%c`

- Display the current date in UTC, using the ISO 8601 format:

`date {{[-u|--utc]}} +%Y-%m-%dT%H:%M:%S%Z`

- Display the current date as a Unix timestamp (seconds since the Unix epoch):

`date +%s`

- Convert a date specified as a Unix timestamp to the default format:

`date {{[-d|--date]}} @{{1473305798}}`

- Convert a given date to the Unix timestamp format:

`date {{[-d|--date]}} "{{2018-09-01 00:00}}" +%s {{[-u|--utc]}}`

- Display the current date using the RFC-3339 format (`YYYY-MM-DD hh:mm:ss TZ`):

`date --rfc-3339 s`

- Set the current date using the format `MMDDhhmmYYYY.ss` (`YYYY` and `.ss` are optional):

`date {{093023592021.59}}`

- Display the current ISO week number:

`date +%V`
