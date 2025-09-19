---
title: "Last Command - View User Logins | Online Free DevTools by Hexmos"
name: last
path: "/freedevtools/tldr/linux/last"
canonical: "https://hexmos.com/freedevtools/tldr/linux/last/"
description: "View user login details with the Last Command. Analyze login history, track user activity and audit system access effectively. Free online tool, no registration required."
category: linux
keywords:
- linux login history
- user login tracker
- last login viewer
- wtmp log analyzer
- system access audit
- command line login utility
- last command examples
- user activity monitoring
- terminal login details
- linux account access

features:
- Display last login information for all users
- Filter logins by specific username
- Limit the number of logins displayed
- Print full date and time for login entries
- View all recorded system reboots
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# last

> View the last logged in users.
> More information: <https://manned.org/last>.

- View last login infromation (e.g., username, terminal, boot time, kernel) of all users as read from `/var/log/wtmp`:

`last`

- List login information of a specific user:

`last {{username}}`

- Specify how many of the last logins to show:

`last {{[-n|--limit]}} {{login_count}}`

- Print the full date and time for entries and then display the hostname column last to prevent truncation:

`last {{[-F|--fulltimes]}} {{[-a|--hostlast]}}`

- View all logins by a specific user and show the IP address instead of the hostname:

`last {{username}} {{[-i|--ip]}}`

- List information since a specific time and date:

`last {{[-s|--since]}} {{-7days}}`

- View all recorded reboots (i.e., the last logins of the pseudo user "reboot"):

`last reboot`

- Display help:

`last {{[-h|--help]}}`
