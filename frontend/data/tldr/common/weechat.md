---
title: "Control WeeChat - IRC Client Configuration | Online Free DevTools by Hexmos"
name: weechat
path: "/freedevtools/tldr/common/weechat/"
canonical: "https://hexmos.com/freedevtools/tldr/common/weechat/"
description: "Control WeeChat IRC client settings with command-line options. Customize startup, plugins, and server connections. Free online tool, no registration required."
category: common
keywords:
- irc client
- weechat irc
- terminal irc client
- command-line irc
- irc configuration
- weechat plugins
- weechat scripts
- irc server connection
- linux irc client
- macos irc client
features:
- Configure WeeChat startup options
- Manage plugin loading on startup
- Control script loading on startup
- Disable automatic server connections
- Output terminal colors to stdout
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# weechat

> Internet relay chat client with various features.
> More information: <https://weechat.org/doc>.

- Start WeeChat:

`weechat`

- Do not load any plugin(s) on startup:

`weechat --no-plugin`

- Do not load any script(s) on startup:

`weechat --no-script`

- Do not connect to servers automatically:

`weechat --no-connect`

- Write default terminal colors to `stdout`:

`weechat --colors`
