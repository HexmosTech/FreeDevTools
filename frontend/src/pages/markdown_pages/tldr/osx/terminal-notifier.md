---
title: "Send Notifications - Control macOS Alerts | Online Free DevTools by Hexmos"
name: terminal-notifier
path: /freedevtools/tldr/osx/terminal-notifier
canonical: "https://hexmos.com/freedevtools/tldr/osx/terminal-notifier/"
description: "Send notifications with terminal-notifier. Control macOS user alerts from the command line. A simple tool for creating custom notifications. Free online tool, no registration required."
category: osx
keywords:
- macOS notifications
- command line notifications
- terminal alerts
- osx notifier
- apple script notifications
- custom notifications mac
- terminal-notifier command
- user alerts macos
- shell script notifications
- system notifications mac
features:
- Send notifications from the command line
- Customize notification title and message
- Open URLs upon notification click
- Activate applications when a notification is clicked
- Play custom sounds with notifications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# terminal-notifier

> Send macOS User Notifications.
> More information: <https://github.com/julienXX/terminal-notifier>.

- Send a notification (only the message is required):

`terminal-notifier -group {{tldr-info}} -title {{TLDR}} -message '{{TLDR rocks}}'`

- Display piped data with a sound:

`echo '{{Piped Message Data!}}' | terminal-notifier -sound {{default}}`

- Open a URL when the notification is clicked:

`terminal-notifier -message '{{Check your Apple stock!}}' -open '{{http://finance.yahoo.com/q?s=AAPL}}'`

- Open an app when the notification is clicked:

`terminal-notifier -message '{{Imported 42 contacts.}}' -activate {{com.apple.AddressBook}}`
