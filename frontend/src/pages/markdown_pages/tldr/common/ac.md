---
title: "AC Command - Monitor User Connection Time | Online Free DevTools by Hexmos"
name: ac
path: /freedevtools/tldr/common/ac
canonical: "https://hexmos.com/freedevtools/tldr/common/ac/"
description: "Monitor user connection time with the AC command. Analyze user activity and system usage with this powerful Linux tool. Free online tool, no registration required."
category: common
keywords:
- user connection time
- ac command
- linux user statistics
- system activity monitor
- session duration analysis
- user login history
- connection time reporting
- linux connection analysis
- user activity logging
- terminal session monitor
features:
- Print total connection time for the current user
- Print connection time for all users
- Print connection time for a specific user
- Print daily connection time for a specific user
- Analyze user activity and system usage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ac

> Print statistics on how long users have been connected.
> More information: <https://manned.org/ac.8>.

- Print how long the current user has been connected in hours:

`ac`

- Print how long users have been connected in hours:

`ac -p`

- Print how long a particular user has been connected in hours:

`ac -p {{username}}`

- Print how long a particular user has been connected in hours per [d]ay (with total):

`ac -dp {{username}}`
