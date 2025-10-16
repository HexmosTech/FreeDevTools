---
title: "SA Command - Summarize Accounting Data | Online Free DevTools by Hexmos"
name: sa
path: "/freedevtools/tldr/linux/sa/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/sa/"
description: "Summarize accounting information with the SA command. Analyze CPU time, I/O rates, and user activity. Free online tool, no registration required."
category: linux
keywords:
  - accounting data analysis
  - linux command sa
  - system accounting command
  - sa command usage
  - cpu time analysis
  - io rate monitoring
  - user activity summary
  - process accounting
  - unix sa command
  - system performance analysis
features:
  - Displays executable invocations per user.
  - Shows responsible usernames for each invocation.
  - Lists recently used resources per user.
  - Provides detailed information on CPU time spent.
  - Reports I/O rates for processed commands.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sa

> Summarize accounting information about commands called by users, including basic information on CPU time spent processing and I/O rates.
> Part of the `acct` package.
> More information: <https://manned.org/sa.8>.

- Display executable invocations per user (username not displayed):

`sudo sa`

- Display executable invocations per user, showing responsible usernames:

`sudo sa --print-users`

- List resources used recently per user:

`sudo sa --user-summary`
