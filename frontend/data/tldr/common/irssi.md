---
title: "Control Irssi - Text-Based IRC Client | Online Free DevTools by Hexmos"
name: irssi
path: "/freedevtools/tldr/common/irssi/"
canonical: "https://hexmos.com/freedevtools/tldr/common/irssi/"
description: "Control IRC sessions with Irssi, a powerful text-based IRC client. Manage channels, connect to servers, and quit sessions using commands. Free online tool, no registration required."
category: common
keywords:
- irssi client
- irc client linux
- command line irc
- text based irc
- irc terminal client
- irc linux
- irc command
- irssi commands
- irssi tutorial
- irc configuration
features:
- Connect to IRC servers via the command line
- Join and manage IRC channels efficiently
- Change active windows within the Irssi interface
- Quit Irssi cleanly, disconnecting from servers
- Display help information for available commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# irssi

> Text based IRC client.
> More information: <https://irssi.org>.

- Open Irssi and connect to a server with a nickname:

`irssi {{[-n|--nick]}} {{nickname}} {{[-c|--connect]}} {{irc.example.com}}`

- Open Irssi and connect with a specific server on a given port:

`irssi {{[-c|--connect]}} {{irc.example.com}} {{[-p|--port]}} {{port}}`

- Display help:

`irssi {{[-?|--help]}}`

- Join a channel:

`/join {{#channelname}}`

- Change active window (starts at 1):

`/win {{window_number}}`

- Exit the application cleanly and quitting any server(s):

`/quit`
