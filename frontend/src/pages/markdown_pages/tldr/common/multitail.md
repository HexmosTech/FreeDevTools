---
title: "Multitail - Monitor Multiple Logs | Online Free DevTools by Hexmos"
name: multitail
path: /freedevtools/tldr/common/multitail
canonical: "https://hexmos.com/freedevtools/tldr/common/multitail/"
description: "Monitor multiple log files simultaneously with Multitail. Analyze diverse data streams, track changes, and debug efficiently. Free online tool, no registration required."
category: common
keywords:
- log file monitoring
- multiple log viewer
- tail multiple files
- Linux log analysis
- command line log monitor
- stream file monitoring
- real-time log analysis
- pattern based log filtering
- dynamic log file tracking
- combine log streams
features:
- Monitor multiple files in a single terminal window
- Tail files matching a specific pattern dynamically
- Merge and display specific columns from multiple files
- Automatically add new files based on a pattern
- Filter and highlight specific content within log streams
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# multitail

> Extension of tail.
> More information: <https://manned.org/multitail>.

- Tail all files matching a pattern in a single stream:

`multitail -Q 1 '{{pattern}}'`

- Tail all files in a directory in a single stream:

`multitail -Q 1 '{{path/to/directory}}/*'`

- Automatically add new files to a window:

`multitail -Q {{pattern}}`

- Show 5 logfiles while merging 2 and put them in 2 columns with only one in the left column:

`multitail -s 2 -sn 1,3 {{path/to/mergefile}} -I {{path/to/file1}} {{path/to/file2}} {{path/to/file3}} {{path/to/file4}}`
