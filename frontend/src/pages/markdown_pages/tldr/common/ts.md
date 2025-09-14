---
title: "Timestamp Lines - Add Timestamps to Text | Free DevTools"
name: ts
path: /freedevtools/tldr/common/ts
canonical: "https://hexmos.com/freedevtools/tldr/common/ts/"
description: "Add timestamps to lines with ts, a powerful command-line utility.  Enhance log readability and track event timing with precision. Free online tool, no registration required."
category: common
keywords:
- line timestamp adder
- timestamp log analyzer
- linux timestamp command
- bash timestamp utility
- command-line timestamping
- stdin timestamp generator
- incremental timestamping
- relative timestamp conversion
- text file timestamping
- timestamp precision control
features:
- Add timestamps to standard input
- Customize timestamp format with strftime
- Generate incremental timestamps
- Convert existing timestamps to relative time
- Control timestamp precision up to microseconds
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ts

> Add timestamps to every line from `stdin`.
> More information: <https://manned.org/ts>.

- Add a timestamp to the beginning of each line:

`{{command}} | ts`

- Add timestamps with microsecond precision:

`{{command}} | ts "{{%b %d %H:%M:%.S}}"`

- Add [i]ncremental timestamps with microsecond precision, starting from zero:

`{{command}} | ts -i "{{%H:%M:%.S}}"`

- Convert existing timestamps in a text file (eg. a log file) into [r]elative format:

`cat {{path/to/file}} | ts -r`
