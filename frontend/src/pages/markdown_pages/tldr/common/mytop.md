---
title: "Control MySQL Performance - mytop Monitor | Free DevTools"
name: mytop
path: /freedevtools/tldr/common/mytop
canonical: "https://hexmos.com/freedevtools/tldr/common/mytop/"
description: "Control MySQL server performance with mytop, a top-like monitor for real-time diagnostics. Analyze database queries and resource usage. Free online tool, no registration required."
category: common
keywords:
- mysql performance monitor
- mysql top alternative
- database server monitoring
- mysql resource usage
- query performance analysis
- linux mysql monitor
- command line mysql tool
- mysql server diagnostics
- real time mysql monitor
- mytop command
features:
- Display real-time MySQL server statistics.
- Show active and sleeping threads.
- Monitor query performance.
- Connect to MySQL server with username and password.
- Filter idle threads from the display.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mytop

> Display MySQL server performance info like `top`.
> More information: <https://jeremy.zawodny.com/mysql/mytop/mytop.html>.

- Start `mytop`:

`mytop`

- Connect with a specified username and password:

`mytop {{[-u|-user]}} {{user}} {{[-p|-password]}} {{password}}`

- Connect with a specified username (the user will be prompted for a password):

`mytop {{[-u|-user]}} {{user}} -prompt`

- Do not show any idle (sleeping) threads:

`mytop {{[-u|-user]}} {{user}} {{[-p|-password]}} {{password}} --noidle`
