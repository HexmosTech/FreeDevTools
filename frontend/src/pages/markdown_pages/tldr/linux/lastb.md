---
title: "List Logged In Users - Find Login Info | Free DevTools"
name: lastb
path: /freedevtools/tldr/linux/lastb
canonical: "https://hexmos.com/freedevtools/tldr/linux/lastb/"
description: "Find last logged in users with lastb. Analyze user login history and identify potential security breaches using this command. Free online tool, no registration required."
category: linux
keywords:
  - last logged in users
  - linux login history
  - user login analysis
  - lastb command
  - linux user tracking
  - login session tracking
  - user activity monitoring
  - security audit logs
  - system login information
  - failed login attempts
features:
  - List the last logged in users
  - Filter login history by date and time
  - Display IP addresses or hostnames
  - Identify failed login attempts
  - Analyze user login patterns
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lastb

> List last logged in users.
> More information: <https://manned.org/lastb>.

- List last logged in users:

`sudo lastb`

- List all last logged in users since a given time:

`sudo lastb {{[-s|--since]}} {{YYYY-MM-DD}}`

- List all last logged in users until a given time:

`sudo lastb {{[-t|--until]}} {{YYYY-MM-DD}}`

- List all logged in users at a specific time:

`sudo lastb {{[-p|--present]}} {{hh:mm}}`

- List all last logged in users and translate the IP into a hostname:

`sudo lastb {{[-d|--dns]}}`
