---
title: "Manage GitHub Issues - Control Issues with Hub | Online Free DevTools by Hexmos"
name: hub-issue
path: /freedevtools/tldr/hub/hub-issue
canonical: "https://hexmos.com/freedevtools/tldr/hub/hub-issue/"
description: "Manage GitHub issues efficiently with Hub Issue Manager. List, display, and filter issues directly from the command line. Free online tool, no registration required."
category: common
keywords:
- github issue manager
- hub issue command
- github command line
- issue tracker cli
- github issue list
- github issue filter
- github issue assignee
- github issue closed
- git issue management
- command line issue tracking
features:
- List issues with specific labels
- Display a specific issue by its number
- Filter issues by state (open or closed)
- Assign issues to specific users
- Limit the number of issues displayed
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hub issue

> Manage Github issues.
> More information: <https://hub.github.com/hub-issue.1.html>.

- List the last 10 issues with the `bug` label:

`hub issue list {{[-L|--limit]}} {{10}} {{[-l|--labels]}} "{{bug}}"`

- Display a specific issue:

`hub issue show {{issue_number}}`

- List 10 closed issues assigneed to a specific user:

`hub issue {{[-s|--state]}} {{closed}} {{[-a|--assignee]}} {{username}} --limit {{10}}`
