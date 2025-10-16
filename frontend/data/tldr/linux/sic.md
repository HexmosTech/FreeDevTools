---
title: "Control IRC Sessions - Simple IRC Client | Online Free DevTools by Hexmos"
name: sic
path: "/freedevtools/tldr/linux/sic/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/sic/"
description: "Control IRC sessions with sic, a simple IRC client. Connect to servers, manage channels, and send messages directly from the Linux command line. Free online tool, no registration required."
category: linux
keywords:
- linux irc client
- command line irc
- terminal irc client
- sic irc
- irc client linux
- irc client terminal
- suckless tools irc
- linux chat client
- command line chat
- console irc client
features:
- Connect to IRC servers using command line
- Manage IRC channels directly from the terminal
- Send and receive messages within IRC channels
- Set default channel or user for easier messaging
- Authenticate with IRC servers using nicknames and passwords
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sic

> Simple IRC client.
> Part of the suckless tools.
> More information: <https://manned.org/sic>.

- Connect to the default host (irc.ofct.net) with the nickname set in the `$USER` environment variable:

`sic`

- Connect to a given host, using a given nickname:

`sic -h {{host}} -n {{nickname}}`

- Connect to a given host, using a given nickname and password:

`sic -h {{host}} -n {{nickname}} -k {{password}}`

- Join a channel:

`:j #{{channel}}<Enter>`

- Send a message to a channel or user:

`:m #{{channel|user}}<Enter>`

- Set default channel or user:

`:s #{{channel|user}}<Enter>`
