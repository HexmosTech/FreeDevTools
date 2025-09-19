---
title: "RSS to Email - Forward Feeds | Online Free DevTools by Hexmos"
name: r2e
path: "/freedevtools/tldr/common/r2e"
canonical: "https://hexmos.com/freedevtools/tldr/common/r2e/"
description: "Forward RSS feeds to email with r2e. Automate email delivery of news and updates from your favorite websites. Free online tool, no registration required."
category: common
keywords:
- RSS feed email
- Email RSS forwarder
- Automate email delivery
- RSS to email command line
- Command line email alerts
- News feed email alerts
- RSS subscriber
- r2e RSS
- Linux RSS
- MacOS RSS
features:
- Subscribe to RSS feeds via command line
- Automatically send new RSS stories to email
- Manage RSS feed subscriptions
- Delete RSS feeds by index
- Create new RSS feed databases
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# r2e

> Forwards RSS feeds to an email address.
> Requires a configured `sendmail` or smtp setup.
> More information: <https://manned.org/r2e>.

- Create a new feed database that sends email to an email address:

`r2e new {{email_address}}`

- Subscribe to a feed:

`r2e add {{feed_name}} {{feed_URI}}`

- Send new stories to an email address:

`r2e run`

- List all feeds:

`r2e list`

- Delete a feed at a specified index:

`r2e delete {{index}}`

- Display help:

`r2e {{[-h|--help]}}`
