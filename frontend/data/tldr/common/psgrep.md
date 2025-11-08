---
title: "Psgrep - Search Processes with Grep | Online Free DevTools by Hexmos"
name: psgrep
path: "/freedevtools/tldr/common/psgrep/"
canonical: "https://hexmos.com/freedevtools/tldr/common/psgrep/"
description: "Search processes with psgrep, utilizing grep to filter results. Find running processes quickly and efficiently. Free online tool, no registration required."
category: common
keywords:
- process search grep
- linux process grep
- macos process grep
- command line process search
- filter running processes
- process identifier lookup
- process name search
- grep command examples
- psgrep command tutorial
- process management tools
features:
- Search processes using grep patterns
- Exclude headers from process search results
- Display process information in a simplified format
- Identify processes matching specific strings
- Quickly locate processes based on process name
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# psgrep

> Search running processes with `grep`.
> More information: <https://jvz.github.io/psgrep>.

- Find process lines containing a specific string:

`psgrep {{process_name}}`

- Find process lines containing a specific string, excluding headers:

`psgrep -n {{process_name}}`

- Search using a simplified format (PID, user, command):

`psgrep -s {{process_name}}`
