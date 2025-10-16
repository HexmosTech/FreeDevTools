---
title: "Lastlog - View User Login History | Online Free DevTools by Hexmos"
name: lastlog
path: "/freedevtools/tldr/linux/lastlog/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lastlog/"
description: "View user login history with Lastlog. Analyze user activity and identify login patterns. Free online tool, no registration required."
category: linux
keywords:
  - user login history
  - last login details
  - user activity analysis
  - login record viewer
  - linux lastlog command
  - system login events
  - user session tracking
  - login timestamp information
  - user authentication logs
  - lastlog command examples
features:
  - Display the most recent login for all users
  - Show last login record of a specific user
  - Filter records by age (older than a certain number of days)
  - Filter records by recency (more recent than a certain number of days)
  - Analyze user login timestamps
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lastlog

> Show the most recent login of all users or of a user.
> More information: <https://manned.org/lastlog>.

- Display the most recent login of all users:

`lastlog`

- Display the lastlog record of the specified user:

`lastlog --user {{username}}`

- Display records older than 7 days:

`lastlog --before 7`

- Display records more recent than 3 days:

`lastlog --time 3`
